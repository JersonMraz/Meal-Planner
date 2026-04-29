"use client";
import { ArrowLeft, CalendarPlus, Clock, Flame, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useUser } from "../../../contexts/UserContext";

export default function RecipeDetail() {
    const { id } = useParams();
    const { user } = useUser();

    const [checked, setChecked] = useState<boolean[]>([]);
    const [saved, setSaved] = useState(false);
    const [recipe, setRecipe] = useState<any>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/meals/${id}`);
                const data = await res.json();
                if (data.meal) {
                    setRecipe(data.meal);
                } else {
                    console.error("Meal not found in response:", data);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setLoading(false);
            }
        }
        if (id) fetchMeal();
    }, [id])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="mt-4 text-muted-foreground">Loading recipe...</p>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <p className="text-muted-foreground">Recipe not found.</p>
                <Link href="/recipes" className="mt-4 text-primary underline font-medium">Back to recipes</Link>
            </div>
        );
    }

    if (checked.length === 0 && recipe?.Ingredients?.length > 0) {
        // initialize once
        setTimeout(() => setChecked(new Array(recipe?.Ingredients?.length).fill(false)), 0);
    }

    const toggle = (i: number) => {
        const next = [...checked];
        next[i] = !next[i];
        setChecked(next);
    };

    const handleSave = async () => {
        if (!user) return; // Make sure user is loaded
        try {
            const res = await fetch(`/api/favorite`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mealId: recipe.id, userId: user.id })
            });
            const data = await res.json();
            if (data.action === "added") {
                setSaved(true);
            } else {
                setSaved(false);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <Link href="/recipes" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back
            </Link>

            {/* Hero */}
            <div className="rounded-2xl overflow-hidden shadow-card">
                <img src={recipe?.image_url} alt={recipe?.title} className="w-full h-56 md:h-72 object-cover" />
            </div>

            {/* Title & meta */}
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground">{recipe?.name}</h1>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Flame className="h-4 w-4" />{recipe?.Nutrition?.calories} cal</span>
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{recipe?.prep_time} min</span>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{recipe?.cuisine}</span>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{recipe?.diet_type.toUpperCase().slice(0, 1) + recipe?.diet_type.slice(1)}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={saved ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSaved(!saved)}
                        className="gap-1.5 cursor-pointer"
                    >
                        <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
                        {saved ? "Saved" : "Save"}
                    </Button>
                    <Button size="sm" className="gap-1.5 bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer">
                        <CalendarPlus className="h-4 w-4" />
                        Add to Plan
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Ingredients */}
                <div className="rounded-xl bg-card shadow-soft p-5">
                    <h2 className="font-heading font-semibold text-foreground mb-3">Ingredients</h2>
                    <ul className="space-y-2">
                        {recipe?.Ingredients?.map((ing: any, i: number) => (
                            <li key={i}>
                                <label className="flex items-center gap-2 text-sm cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={checked[i] ?? false}
                                        onChange={() => toggle(i)}
                                        className="rounded border-input text-primary focus:ring-ring"
                                    />
                                    <span className={`transition-colors ${checked[i] ? "line-through text-muted-foreground" : "text-card-foreground"}`}>
                                        {ing.name.charAt(0).toUpperCase() + ing.name.slice(1)}
                                    </span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Nutrition */}
                <div className="rounded-xl bg-card shadow-soft p-5">
                    <h2 className="font-heading font-semibold text-foreground mb-3">Nutrition Facts</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { label: "Protein", value: `${recipe?.Nutrition?.protein ?? 0}g` },
                            { label: "Carbs", value: `${recipe?.Nutrition?.carbs ?? 0}g` },
                            { label: "Fat", value: `${recipe?.Nutrition?.fat ?? 0}g` },
                            { label: "Calories", value: `${recipe?.Nutrition?.calories ?? 0}` },
                        ].map((n) => (
                            <div key={n.label} className="rounded-lg bg-secondary p-3 text-center">
                                <p className="text-lg font-heading font-semibold text-foreground">{n.value}</p>
                                <p className="text-xs text-muted-foreground">{n.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Steps */}
            <div className="rounded-xl bg-card shadow-soft p-5">
                <h2 className="font-heading font-semibold text-foreground mb-4">Instructions</h2>
                <ol className="space-y-4">
                    {recipe?.Instructions?.map((step: any, i: number) => (
                        <li key={i} className="flex gap-3">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                                {i + 1}
                            </span>
                            <p className="text-sm text-card-foreground pt-1">{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
