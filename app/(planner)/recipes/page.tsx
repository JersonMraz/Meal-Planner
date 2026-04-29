"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { RecipeCard } from "../../components/RecipeCard";
import { useSearchParams } from "next/navigation";
import { useUser } from "../../contexts/UserContext";

function RecipeFinderContent() {
    const { user } = useUser();
    const searchParams = useSearchParams();
    const qParam = searchParams.get("q");

    const [query, setQuery] = useState(qParam || "");
    const [diet, setDiet] = useState("All");
    const [cuisine, setCuisine] = useState("All");
    const [showFilters, setShowFilters] = useState(false);
    const [meals, setMeals] = useState<any[]>([]);
    const [allDiets, setAllDiets] = useState<string[]>(["All"]);
    const [allCuisines, setAllCuisines] = useState<string[]>(["All"]);

    // Update query if URL param changes (e.g. searching from TopNav while already on /recipes)
    useEffect(() => {
        if (qParam !== null) {
            setQuery(qParam);
        }
    }, [qParam]);

    useEffect(() => {
        let ignore = false;

        const fetchMeals = async () => {
            try {
                const url = query ? `/api/meals/search?q=${query}` : `/api/meals?all=true`;
                const res = await fetch(url);
                const data = await res.json();

                if (!ignore && data.success) {
                    // Attach favorite status from /api/favorite
                    let favoriteMealIds: number[] = [];
                    if (user?.id) {
                        const favRes = await fetch(`/api/favorite?userId=${user.id}`);
                        if (favRes.ok) {
                            const favData = await favRes.json();
                            // The API returns { favorite: [...] } containing favorite objects
                            const favoriteObjects = favData.favorite || [];
                            // Extract just the meal IDs into an array of numbers
                            favoriteMealIds = favoriteObjects.map((f: any) => f.meal_id);
                        }
                    }

                    const mealsWithFavStatus = data.meals.map((meal: any) => ({
                        ...meal,
                        saved: favoriteMealIds.includes(meal.id)
                    }));

                    setMeals(mealsWithFavStatus);
                    if (!query) {
                        if (data.diets) setAllDiets(["All", ...data.diets]);
                        if (data.cuisines) setAllCuisines(["All", ...data.cuisines]);
                    }
                }
            } catch (error) {
                if (!ignore) console.log("Error fetching meals:", error);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchMeals();
        }, 300);

        return () => {
            ignore = true;
            clearTimeout(timeoutId);
        };
    }, [query, user?.id]);

    const filteredMeals = useMemo(() => {
        return meals.filter((meal) => {
            const matchesDiet = diet === "All" || meal.diet_type === diet;
            const matchesCuisine = cuisine === "All" || meal.cuisine === cuisine;

            return matchesDiet && matchesCuisine;
        });
    }, [meals, diet, cuisine]);

    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h1 className="text-2xl font-heading font-bold text-foreground">Recipe Finder</h1>
                <p className="text-sm text-muted-foreground mt-1">Search by name or ingredients</p>
            </div>

            {/* Search bar */}
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search recipes by name or ingredient..."
                        className="w-full rounded-xl border border-input bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 shadow-soft"
                    />
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`rounded-xl border border-input px-4 transition-colors ${showFilters ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-secondary"}`}
                >
                    <SlidersHorizontal className="h-5 w-5" />
                </button>
            </div>

            {/* Filters */}
            {showFilters && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl bg-card shadow-soft p-4">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Diet Type</p>
                        <div className="flex flex-wrap gap-2">
                            {allDiets.map((d) => (
                                <button
                                    key={d}
                                    onClick={() => setDiet(d)}
                                    className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors ${diet === d ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        }`}
                                >
                                    {d === "All" ? "All" : d.charAt(0).toUpperCase() + d.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Cuisine</p>
                        <div className="flex flex-wrap gap-2">
                            {allCuisines.map((c) => (
                                <button
                                    key={c}
                                    onClick={() => setCuisine(c)}
                                    className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors ${cuisine === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMeals?.map((r: any) => (
                    <RecipeCard key={r.id} recipe={r} />
                ))}
            </div>
            {filteredMeals?.length === 0 && (
                <p className="text-center text-muted-foreground py-12">No recipes found. Try a different search!</p>
            )}
        </div>
    );
}

export default function RecipeFinder() {
    return (
        <Suspense fallback={<div className="p-8 text-center text-muted-foreground animate-pulse">Loading recipes...</div>}>
            <RecipeFinderContent />
        </Suspense>
    );
}
