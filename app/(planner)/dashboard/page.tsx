"use client";

import { BookOpen, CalendarCheck, TrendingUp, Utensils } from "lucide-react";
import { RecipeCard } from "@/app/components/RecipeCard";
import heroImg from "@/app/assets/hero-recipe.jpg";
// import { div } from "framer-motion/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/contexts/UserContext";

const staticStats = [
    { label: "Recipes Saved", value: "24", icon: BookOpen, color: "bg-primary/10 text-primary" },
    { label: "Meals Planned", value: "12", icon: CalendarCheck, color: "bg-accent/10 text-accent" },
    { label: "This Week", value: "5 days", icon: Utensils, color: "bg-primary/10 text-primary" },
    { label: "Calories Avg", value: "1,840", icon: TrendingUp, color: "bg-accent/10 text-accent" },
];

const days = ["Mon", "Tue", "Wed"];

export default function Home() {
    const { user } = useUser();
    const [todayMeal, setTodayMeal] = useState([]);
    const router = useRouter();
    const [meals, setMeals] = useState([]);
    const [stats, setStats] = useState<any[]>(staticStats);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const res = await fetch(`/api/meals`);
                const data = await res.json();

                if (data.success) {
                    let favoriteMealIds: number[] = [];
                    if (user?.id) {
                        const favMeal = await fetch(`/api/favorite?userId=${user.id}`);
                        if (favMeal.ok) {
                            const favdata = await favMeal.json();
                            const favoriteObjects = favdata.favorite || [];
                            favoriteMealIds = favoriteObjects.map((f: any) => f.meal_id);

                        }
                    }
                    const mealWithFavStatus = data.meals.map((meal: any) => ({
                        ...meal,
                        saved: favoriteMealIds.includes(meal.id)
                    }));
                    setMeals(mealWithFavStatus);
                }
            } catch (error) {
                console.log("Error fetching meals:", error);
            }
        };

        fetchMeals();
    }, [user?.id]);

    useEffect(() => {
        const fetchStats = async () => {
            if (!user?.id) return;
            try {
                const res = await fetch(`/api/stats?userId=${user.id}`);
                const data = await res.json();

                if (data.totalFavorites !== undefined) {
                    setStats((prevStats) => {
                        const newStats = [...prevStats];
                        newStats[0].value = data.totalFavorites.toString(); //Recipes saved
                        newStats[1].value = data.totalMealPlans.toString(); //Meals planned
                        newStats[2].value = data.thisWeek.toString() + " days"; //Meals plan this week
                        newStats[3].value = data.averageCalories.toString() + " cal"; //Average calories
                        return newStats;
                    });
                }
            } catch (error) {
                console.log("Error fetching stats:", error);
            }
        };

        fetchStats();
    }, [user?.id]);

    useEffect(() => {
        const fetchTodayMeal = async () => {
            try {
                const response = await fetch('/api/auth/todaymeal')

                if (!response.ok) return console.error("Failed to fetch today's meal")

                const data = await response.json();
                setTodayMeal(data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchTodayMeal()
    }, [])

    return (
        <div className="space-y-8 animate-fade-in">
            {/* Welcome hero */}
            <div className="relative overflow-hidden rounded-2xl">
                <Image src={heroImg} loading="eager" alt="Fresh food" className="h-48 md:h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-r from-foreground/70 to-foreground/20 flex items-center px-6 md:px-10">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
                            Good morning, {user?.firstname} {user?.lastname} 👋
                        </h1>
                        <p className="mt-1 text-sm text-primary-foreground/80 max-w-md">
                            You have 3 meals planned for today. Let's make something delicious!
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {stats.map((s: any) => (
                    <div key={s.label} className="rounded-xl bg-card shadow-soft p-4 flex items-center gap-3">
                        <div className={`rounded-lg p-2 ${s.color}`}>
                            <s.icon className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-lg font-heading font-semibold text-card-foreground">{s.value}</p>
                            <p className="text-xs text-muted-foreground">{s.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Today's meal plan */}
            <section>
                <h2 className="text-lg font-heading font-semibold text-foreground mb-3">Today's Meal Plan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {todayMeal?.map((m: any) => {
                        return (
                            <div key={m.id} className="rounded-xl bg-card shadow-soft p-4">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{m.meal_type}</p>
                                {m.Meal ? (
                                    <div className="flex items-center gap-3">
                                        {m.Meal.image_url ?
                                            <Image
                                                src={m.Meal.image_url}
                                                alt={m.Meal.name}
                                                className="h-12 w-12 rounded-lg object-cover"
                                                loading="lazy"
                                                width={120}
                                                height={120} />
                                            :
                                            <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
                                                <svg className="h-12 w-12 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-6.6l3 3l4-4l4 4l4-4l3 3V19q0 .825-.587 1.413T19 21zM5 3h14q.825 0 1.413.588T21 5v6.575l-3-3l-4 4l-4-4l-4 4l-3-3V5q0-.825.588-1.412T5 3" />
                                                </svg>
                                            </div>
                                        }
                                        <div>
                                            <p className="text-sm font-medium text-card-foreground">{m.Meal.name}</p>
                                            <p className="text-xs text-muted-foreground">{m.Meal.Nutrition?.calories} cal · {m.Meal.prep_time} min</p>
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-sm text-muted-foreground italic">No meal planned</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Recommended */}
            <section>
                <h2 className="text-lg font-heading font-semibold text-foreground mb-3">Recommended Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {meals.map((meal: any) => (
                        <RecipeCard key={meal.id} recipe={meal} />
                    ))}
                </div>
            </section>
        </div>
    )
}