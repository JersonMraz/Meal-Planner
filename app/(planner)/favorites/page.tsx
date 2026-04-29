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

    useEffect(() => {
        if (user) {
            fetch(`/api/favorite?userId=${user.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setFavoriteMeals(data.favorite);
                    setLoading(false);
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
                {!loading && (
                    <span className="ml-2 bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold">
                        {favoriteMeals.length} {favoriteMeals.length === 1 ? 'Meal' : 'Meals'}
                    </span>
                )}
            </div>
            {!loading && (
                <p className="text-sm text-muted-foreground">Your saved {favoriteMeals.length === 1 ? 'meal' : 'meals'}</p>
            )}

            {loading ? (
                <div className="flex items-center justify-center py-12">
                    <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
                </div>
            ) : favoriteMeals.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-20 text-center bg-card rounded-2xl border border-border shadow-sm"
                >
                    <Heart className="h-16 w-16 text-muted-foreground/30 mb-4" />
                    <h2 className="text-xl font-heading font-semibold text-foreground mb-2">No favorites yet</h2>
                    <p className="text-muted-foreground text-sm max-w-sm mb-6">
                        You haven't saved any recipes to your favorites. Browse the recipes page and click the heart icon to save them here!
                    </p>
                </motion.div>
            ) : (
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence>
                        {favoriteMeals.map((r) => (
                            <motion.div
                                key={r.Meal.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6, filter: "blur(2px)" }}
                                transition={{ duration: 0.4 }}
                                layout
                            >
                                <RecipeCard
                                    recipe={{ ...r.Meal, saved: true }}
                                    onRemove={(id) => handleRemove(id)}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </div>
    );
}