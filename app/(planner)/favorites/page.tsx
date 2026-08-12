"use client";

import { RecipeCard } from "../../components/RecipeCard";
import { Heart } from "lucide-react";
import { useUser } from "../../contexts/UserContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Favorites() {
    const { user } = useUser();
    const [favoriteMeals, setFavoriteMeals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [favoriteAPIReady, setFavoriteAPIReady] = useState(false);

    useEffect(() => {
        if (user) {
            fetch(`/api/favorite?userId=${user.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setFavoriteMeals(data.favorite);
                    setLoading(false);
                    setFavoriteAPIReady(true);
                });
        }
    }, [user]);
    console.log(favoriteMeals);
    const handleRemove = (id: number) => {
        setFavoriteMeals((prev) => prev.filter((m) => m.Meal.id !== id));
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-accent" />
                <h1 className="text-2xl font-heading font-bold text-foreground">Favorites</h1>
                <span className="ml-2 bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    {!loading ? (
                        <>
                            {favoriteMeals.length} {favoriteMeals.length === 1 ? 'Meal' : 'Meals'}
                        </>
                    ) : (
                        <>
                            <p className="animate-pulse h-4 w-8"></p>
                        </>
                    )}
                </span>
            </div>
            <p className="text-sm text-muted-foreground">Your saved {favoriteMeals.length === 1 ? 'meal' : 'meals'}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favoriteAPIReady ? (
                    favoriteMeals.map((r) => (
                        <RecipeCard
                            key={r.Meal.id}
                            recipe={{ ...r.Meal, saved: true }}
                            onRemove={(id) => handleRemove(id)}
                            loaded={favoriteAPIReady}
                        />
                    ))
                ) : (
                    Array.from({ length: 6 }).map((_, i) => (
                        <RecipeCard key={i} recipe={{}} loaded={false} />
                    ))
                )}
            </div>
        </div>
    );
}