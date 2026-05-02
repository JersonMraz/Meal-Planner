'use client';

import { useEffect, useMemo, useState } from "react";
import {
    Plus,
    Trash2,
    Flame,
    Clock,
    Sparkles,
    Sun,
    Sunrise,
    Moon,
    Cookie,
    IceCream,
    Coffee,
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/app/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useUser } from "@/app/contexts/UserContext";

const MEAL_TYPES = ["breakfast", "lunch", "dinner", "snack", "dessert"] as const;
type MealType = (typeof MEAL_TYPES)[number];

const MEAL_META: Record<MealType, { icon: React.ReactNode; emoji: string; prompt: string; tint: string; chip: string }> = {
    breakfast: {
        icon: <Sunrise className="h-4 w-4" />,
        emoji: "🥐",
        prompt: "What's for breakfast?",
        tint: "from-amber-50 to-transparent dark:from-amber-500/10",
        chip: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
    },
    lunch: {
        icon: <Sun className="h-4 w-4" />,
        emoji: "🥗",
        prompt: "Any ideas for lunch?",
        tint: "from-emerald-50 to-transparent dark:from-emerald-500/10",
        chip: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    },
    dinner: {
        icon: <Moon className="h-4 w-4" />,
        emoji: "🍝",
        prompt: "What sounds good for dinner?",
        tint: "from-indigo-50 to-transparent dark:from-indigo-500/10",
        chip: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
    },
    snack: {
        icon: <Cookie className="h-4 w-4" />,
        emoji: "🍎",
        prompt: "Pick a little something",
        tint: "from-orange-50 to-transparent dark:from-orange-500/10",
        chip: "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",
    },
    dessert: {
        icon: <IceCream className="h-4 w-4" />,
        emoji: "🍰",
        prompt: "Treat yourself",
        tint: "from-pink-50 to-transparent dark:from-pink-500/10",
        chip: "bg-pink-100 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300",
    },
};

type Plan = Record<string, Partial<Record<MealType, string>>>;

function buildWeek() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const week: { key: string; date: Date; label: string; sub: string; weekday: string }[] = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const key = `${year}-${month}-${day}`; 
        let label: string;
        if (i === 0) label = "Today";
        else if (i === 1) label = "Tomorrow";
        else label = d.toLocaleDateString("en-US", { weekday: "long" });
        const sub = d.toLocaleDateString("en-US", { month: "short", day: "2-digit" });
        const weekday = d.toLocaleDateString("en-US", { weekday: "long" });
        week.push({ key, date: d, label, sub, weekday });
    }
    return week;
}

function greeting() {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
}

const TIPS = [
    "Tip: Plan two dinners that share an ingredient — less waste, more flavor.",
    "Tip: A bright lunch often means a calmer afternoon.",
    "Tip: Leave one slot open for a spontaneous craving.",
    "Tip: Cook once, eat twice — leftovers are your friend.",
];

export default function MealPlanner() {
    const { user } = useUser();
    const week = useMemo(buildWeek, []);
    const weekKeys = useMemo(() => week.map((w) => w.key), [week]);
    const tip = useMemo(() => TIPS[new Date().getDate() % TIPS.length], []);

    const [plan, setPlan] = useState<Plan>({});
    const [mealsData, setMealsData] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/meals?all=true")
            .then(res => res.json())
            .then(data => {
                if (data.success) setMealsData(data.meals);
            });
    }, []);

    useEffect(() => {
        if (!user) return;
        fetch(`/api/mealplan?userId=${user.id}`)
            .then(res => res.json())
            .then(data => {
                if (data.mealPlans) {
                    const newPlan: Plan = {};
                    for (const w of weekKeys) newPlan[w] = {};
                    for (const mp of data.mealPlans) {
                        if (!newPlan[mp.date]) newPlan[mp.date] = {};
                        newPlan[mp.date][mp.meal_type as MealType] = mp.meal_id.toString();
                    }
                    setPlan(newPlan);
                }
            });
    }, [user, weekKeys]);

    const recipes = useMemo(() => {
        return mealsData.map((m: any) => ({
            id: m.id.toString(),
            title: m.name,
            image: m.image_url || '/placeholder.jpg',
            calories: m.Nutrition?.calories || 0,
            prepTime: m.prep_time || 0,
            cuisine: m.cuisine || 'Unknown',
        }));
    }, [mealsData]);

    const [pickerOpen, setPickerOpen] = useState(false);
    const [target, setTarget] = useState<{ day: string; meal: MealType } | null>(null);
    const [search, setSearch] = useState("");

    const [confirmAdd, setConfirmAdd] = useState<{ recipeId: string } | null>(null);
    const [confirmDelete, setConfirmDelete] = useState<{ day: string; meal: MealType } | null>(null);

    const openPicker = (day: string, meal: MealType) => {
        setTarget({ day, meal });
        setSearch("");
        setPickerOpen(true);
    };
    const requestAssign = (recipeId: string) => setConfirmAdd({ recipeId });
    
    const confirmAssign = async () => {
        if (!target || !confirmAdd || !user) return;
        const { day, meal } = target;
        const recipeId = confirmAdd.recipeId;

        setPlan((prev) => ({
            ...prev,
            [day]: { ...(prev[day] || {}), [meal]: recipeId },
        }));
        setConfirmAdd(null);
        setPickerOpen(false);

        try {
            await fetch("/api/mealplan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id,
                    date: day,
                    meal_type: meal,
                    meal_id: recipeId
                })
            });
        } catch(err) {
            console.error(err);
        }
    };
    
    const requestRemove = (day: string, meal: MealType) => setConfirmDelete({ day, meal });
    
    const confirmRemove = async () => {
        if (!confirmDelete || !user) return;
        const { day, meal } = confirmDelete;
        
        setPlan((prev) => {
            const next = { ...prev, [day]: { ...(prev[day] || {}) } };
            delete next[day][meal];
            return next;
        });
        setConfirmDelete(null);

        try {
            await fetch("/api/mealplan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id,
                    date: day,
                    meal_type: meal,
                    meal_id: null
                })
            });
        } catch(err) {
            console.error(err);
        }
    };

    const filtered = recipes.filter(
        (r) =>
            r.title.toLowerCase().includes(search.toLowerCase()) ||
            r.cuisine.toLowerCase().includes(search.toLowerCase()),
    );

    const dayStats = (key: string) => {
        const day = plan[key] || {};
        const ids = Object.values(day).filter(Boolean) as string[];
        let calories = 0;
        let prep = 0;
        for (const id of ids) {
            const r = recipes.find((x) => x.id === id);
            if (r) { calories += r.calories; prep += r.prepTime; }
        }
        return { count: ids.length, calories, prep };
    };

    const weekStats = useMemo(() => {
        let mealsCount = 0;
        for (const k of weekKeys) {
            mealsCount += Object.values(plan[k] || {}).filter(Boolean).length;
        }
        const totalSlots = weekKeys.length * MEAL_TYPES.length;
        return { meals: mealsCount, totalSlots };
    }, [plan, weekKeys]);

    return (
        <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
            {/* Friendly hero */}
            <div className="relative overflow-hidden rounded-3xl border bg-linear-to-br from-primary/10 via-card to-accent/10 p-6 sm:p-8">
                <div className="relative z-10 max-w-xl">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-card/80 backdrop-blur px-3 py-1 text-xs text-muted-foreground border">
                        <Coffee className="h-3 w-3" />
                        Your week, gently planned
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3 leading-tight">
                        {greeting()}. <span className="text-primary">Let's eat well this week.</span>
                    </h1>
                    <p className="text-sm text-muted-foreground mt-2">
                        {weekStats.meals} of {weekStats.totalSlots} slots filled — no pressure, just a soft outline for the days ahead.
                    </p>
                    <p className="text-xs text-muted-foreground mt-4 italic flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-accent" /> {tip}
                    </p>
                </div>
                <div aria-hidden className="absolute -right-8 -bottom-8 text-[180px] opacity-10 select-none leading-none">
                    🍽️
                </div>
            </div>

            {/* Days as a soft vertical journal */}
            <div className="space-y-5">
                {week.map((w, idx) => {
                    const stats = dayStats(w.key);
                    const isToday = idx === 0;
                    return (
                        <section
                            key={w.key + w.sub}
                            className={`rounded-3xl border bg-card overflow-hidden transition-shadow ${isToday ? "shadow-elevated ring-1 ring-primary/30" : "shadow-soft"
                                }`}
                        >
                            {/* Day header */}
                            <div className="flex items-end justify-between gap-3 px-5 sm:px-6 pt-5 pb-3 border-b border-dashed">
                                <div className="flex items-baseline gap-3 flex-wrap">
                                    <h2 className="text-2xl font-heading font-bold text-foreground">
                                        {w.label}
                                    </h2>
                                    <span className="text-sm text-muted-foreground">
                                        {w.label === "Today" || w.label === "Tomorrow" ? `${w.weekday}, ${w.sub}` : w.sub}
                                    </span>
                                    {isToday && (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                            Now
                                        </span>
                                    )}
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground">
                                        {stats.count === 0
                                            ? "Open canvas"
                                            : `${stats.count} ${stats.count === 1 ? "meal" : "meals"} · ${stats.calories} kcal`}
                                    </p>
                                </div>
                            </div>

                            {/* Meal rows */}
                            <ul className="divide-y divide-dashed">
                                {MEAL_TYPES.map((meal) => {
                                    const recipeId = plan[w.key]?.[meal];
                                    const recipe = recipeId ? recipes.find((r) => r.id === recipeId) : null;
                                    const meta = MEAL_META[meal];
                                    return (
                                        <li
                                            key={meal}
                                            className={`relative flex items-center gap-4 px-5 sm:px-6 py-3.5 bg-linear-to-r ${meta.tint}`}
                                        >
                                            {/* Meal label */}
                                            <div className="flex items-center gap-2.5 w-32 sm:w-40 shrink-0">
                                                <span className="text-2xl leading-none" aria-hidden>
                                                    {meta.emoji}
                                                </span>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-medium text-foreground capitalize leading-tight">{meal}</p>
                                                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground hidden sm:block">
                                                        {meal === "breakfast" ? "Morning" : meal === "lunch" ? "Midday" : meal === "dinner" ? "Evening" : meal === "snack" ? "Anytime" : "After dinner"}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Slot content */}
                                            <div className="flex-1 min-w-0">
                                                {recipe ? (
                                                    <button
                                                        onClick={() => openPicker(w.key, meal)}
                                                        className="group/r w-full flex items-center gap-3 text-left rounded-xl p-1.5 -m-1.5 hover:bg-background/60 transition-colors"
                                                    >
                                                        <img
                                                            src={recipe.image}
                                                            alt={recipe.title}
                                                            loading="lazy"
                                                            className="h-12 w-12 rounded-lg object-cover shadow-soft shrink-0 bg-secondary"
                                                        />
                                                        <div className="min-w-0 flex-1">
                                                            <p className="text-sm font-medium text-foreground truncate">{recipe.title}</p>
                                                            <div className="flex items-center gap-3 text-[11px] text-muted-foreground mt-0.5">
                                                                <span className="inline-flex items-center gap-1"><Flame className="h-3 w-3" />{recipe.calories} kcal</span>
                                                                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{recipe.prepTime}m</span>
                                                                <span className="hidden sm:inline truncate">· {recipe.cuisine}</span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => openPicker(w.key, meal)}
                                                        className="group/empty w-full flex items-center gap-2 text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-border group-hover/empty:border-primary group-hover/empty:bg-primary/10 transition-colors">
                                                            <Plus className="h-3.5 w-3.5" />
                                                        </span>
                                                        <span className="italic">{meta.prompt}</span>
                                                    </button>
                                                )}
                                            </div>

                                            {/* Remove */}
                                            {recipe && (
                                                <button
                                                    onClick={() => requestRemove(w.key, meal)}
                                                    className="shrink-0 rounded-full p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors z-10"
                                                    aria-label="Remove meal"
                                                >
                                                    <Trash2 className="h-3.5 w-3.5" />
                                                </button>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    );
                })}
            </div>

            {/* Recipe picker dialog */}
            <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="font-heading">
                            {target && plan[target.day]?.[target.meal] ? "Change meal" : "Add a meal"}
                            {target && (
                                <span className="text-sm font-normal text-muted-foreground ml-2 capitalize">
                                    · {week.find((w) => w.key === target.day)?.label} {target.meal}
                                </span>
                            )}
                        </DialogTitle>
                        <DialogDescription>
                            {target && plan[target.day]?.[target.meal]
                                ? "Pick a different recipe for this slot."
                                : "Choose a recipe that sounds good right now."}
                        </DialogDescription>
                    </DialogHeader>
                    <Input placeholder="Search recipes..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    <div className="max-h-80 overflow-y-auto space-y-2 -mx-1 px-1">
                        {filtered.map((r) => (
                            <button
                                key={r.id}
                                onClick={() => requestAssign(r.id)}
                                className="w-full flex items-center gap-3 rounded-lg p-2 hover:bg-secondary transition-colors text-left"
                            >
                                <img src={r.image} alt={r.title} className="h-12 w-12 rounded-lg object-cover bg-secondary" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground truncate">{r.title}</p>
                                    <p className="text-xs text-muted-foreground">{r.cuisine} · {r.prepTime} min · {r.calories} kcal</p>
                                </div>
                            </button>
                        ))}
                        {filtered.length === 0 && (
                            <p className="text-sm text-muted-foreground text-center py-6">No recipes found.</p>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Confirm add */}
            <AlertDialog open={!!confirmAdd} onOpenChange={(o) => !o && setConfirmAdd(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="font-heading">Add this meal?</AlertDialogTitle>
                        <AlertDialogDescription>
                            {confirmAdd && target && (
                                <>
                                    Add <span className="font-medium text-foreground">{recipes.find((r) => r.id === confirmAdd.recipeId)?.title}</span> to{" "}
                                    <span className="capitalize">{week.find((w) => w.key === target.day)?.label} {target.meal}</span>?
                                </>
                            )}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmAssign}>Yes, Add it</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Confirm delete */}
            <AlertDialog open={!!confirmDelete} onOpenChange={(o) => !o && setConfirmDelete(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="font-heading">Delete this meal?</AlertDialogTitle>
                        <AlertDialogDescription>
                            {confirmDelete && (
                                <>
                                    Remove <span className="capitalize">{week.find((w) => w.key === confirmDelete.day)?.label} {confirmDelete.meal}</span> from your plan?
                                </>
                            )}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={confirmRemove}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Yes, Delete it
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
