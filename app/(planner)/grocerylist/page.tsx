'use client'

import { useEffect, useMemo, useState, useRef } from "react";
import {
    ShoppingCart,
    Check,
    Plus,
    Trash2,
    Sparkles,
    ListChecks,
    CircleCheck,
    Search,
    X,
    CalendarDays,
    UtensilsCrossed,
    ChefHat,
} from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
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
import { useUser } from "@/app/contexts/UserContext";

type Item = { id: number; name: string; checked: boolean };
type PlannedMeal = { id: number; title: string };

const ENCOURAGEMENTS = [
    "Nice — one less thing to grab.",
    "Cart looking healthier already.",
    "Tick! Keep that momentum going.",
    "You're shopping like a pro.",
];

export default function GroceryList() {
    const { user } = useUser();
    const [items, setItems] = useState<Item[]>([]);
    const [planSummary, setPlanSummary] = useState<{ planned: PlannedMeal[], mealCount: number, dayCount: number }>({
        planned: [], mealCount: 0, dayCount: 0
    });
    const [query, setQuery] = useState("");
    const [hideChecked, setHideChecked] = useState(false);
    const [newItem, setNewItem] = useState("");
    const [confirmClear, setConfirmClear] = useState(false);
    const [lastTickMsg, setLastTickMsg] = useState<string | null>(null);
    const syncProcessed = useRef(false);

    useEffect(() => {
        if (!user || syncProcessed.current) return;
        syncProcessed.current = true;

        // Sync missing ingredients then fetch grocery items
        fetch("/api/grocerylist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: user.id, action: "sync_mealplan" })
        })
            .then(() => fetch(`/api/grocerylist?userId=${user.id}`))
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    // Flatten items from db
                    setItems(data.items.map((it: any) => ({
                        id: it.id,
                        name: it.name,
                        checked: it.checked
                    })));
                }
            })
            .catch(console.error);

        // Fetch meal plans for summary
        fetch(`/api/mealplan?userId=${user.id}`)
            .then(res => res.json())
            .then(data => {
                if (data.mealPlans) {
                    const uniqueDates = new Set(data.mealPlans.map((mp: any) => mp.date));
                    const uniqueMeals = new Map<number, PlannedMeal>();

                    data.mealPlans.forEach((mp: any) => {
                        if (mp.Meal && !uniqueMeals.has(mp.Meal.id)) {
                            uniqueMeals.set(mp.Meal.id, { id: mp.Meal.id, title: mp.Meal.name });
                        }
                    });

                    setPlanSummary({
                        planned: Array.from(uniqueMeals.values()),
                        mealCount: data.mealPlans.length,
                        dayCount: uniqueDates.size
                    });
                }
            })
            .catch(console.error);
    }, [user]);

    const stats = useMemo(() => {
        const total = items.length;
        const purchased = items.filter((i) => i.checked).length;
        const remaining = total - purchased;
        const pct = total === 0 ? 0 : Math.round((purchased / total) * 100);
        return { total, purchased, remaining, pct };
    }, [items]);

    const mealReadiness = useMemo(() => {
        return planSummary.planned.map(recipe => {
            const mealName = recipe.title;
            const suffix = `(For ${mealName})`;

            // Find all items in the grocery list that belong to this recipe type
            const mealItems = items.filter(it => it.name.endsWith(suffix));

            const matched = mealItems.length;
            const got = mealItems.filter(it => it.checked).length;
            // A meal is ready if it has tracked ingredients and all of them are checked
            const ready = matched > 0 && got === matched;

            return {
                recipe,
                ready,
                got,
                matched
            };
        });
    }, [items, planSummary.planned]);

    const readyMeals = useMemo(() => mealReadiness.filter(m => m.ready), [mealReadiness]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return items.filter((it) => {
            if (hideChecked && it.checked) return false;
            if (q && !it.name.toLowerCase().includes(q)) return false;
            return true;
        });
    }, [items, query, hideChecked]);

    const toggleItem = async (id: number) => {
        if (!user) return;
        let nowChecked = false;

        setItems((prev) =>
            prev.map((it) => {
                if (it.id === id) {
                    nowChecked = !it.checked;
                    return { ...it, checked: nowChecked };
                }
                return it;
            }),
        );

        if (nowChecked) {
            setLastTickMsg(
                ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)],
            );
            window.setTimeout(() => setLastTickMsg(null), 1800);
        }

        try {
            await fetch("/api/grocerylist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id,
                    action: "toggle",
                    payload: { id, checked: nowChecked }
                })
            });
        } catch (err) {
            console.error(err);
        }
    };

    const removeItem = async (id: number) => {
        if (!user) return;
        setItems((prev) => prev.filter((it) => it.id !== id));

        try {
            await fetch("/api/grocerylist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id,
                    action: "delete",
                    payload: { id }
                })
            });
        } catch (err) {
            console.error(err);
        }
    };

    const addItem = async () => {
        if (!user) return;
        const name = newItem.trim();
        if (!name) return;
        if (items.some((i) => i.name.toLowerCase() === name.toLowerCase())) {
            setNewItem("");
            return;
        }

        setNewItem("");

        try {
            const res = await fetch("/api/grocerylist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id,
                    action: "add",
                    // Passing 'Other' as default category since DB requires it, but UI ignores it
                    payload: { category: "Other", name }
                })
            });
            const data = await res.json();
            if (data.item) {
                setItems((prev) => [...prev, { id: data.item.id, name: data.item.name, checked: data.item.checked }]);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const clearChecked = async () => {
        if (!user) return;
        setItems((prev) => prev.filter((i) => !i.checked));
        setConfirmClear(false);

        try {
            await fetch("/api/grocerylist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id,
                    action: "clear_checked"
                })
            });
        } catch (err) {
            console.error(err);
        }
    };

    const greeting = (() => {
        const h = new Date().getHours();
        if (stats.remaining === 0 && stats.total > 0) return "All done — enjoy the cooking!";
        if (h < 12) return "Morning shop ahead";
        if (h < 17) return "Quick run to the store?";
        return "Evening pickup";
    })();

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in pb-12">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/10 via-card to-card p-6 sm:p-8 shadow-soft">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground border">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            Everything you need for the week ahead
                        </div>
                        <h1 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
                            {greeting}
                        </h1>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {stats.remaining > 0
                                ? `${stats.remaining} item${stats.remaining === 1 ? "" : "s"} left to grab for your upcoming meals.`
                                : "Your basket is fully ticked off. Time to cook!"}
                        </p>
                    </div>

                    {/* Progress ring */}
                    <div className="flex items-center gap-4">
                        <div className="relative h-20 w-20 shrink-0">
                            <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15.915"
                                    fill="none"
                                    className="stroke-secondary"
                                    strokeWidth="3"
                                />
                                <circle
                                    cx="18"
                                    cy="18"
                                    r="15.915"
                                    fill="none"
                                    className="stroke-primary transition-all duration-500"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray={`${stats.pct}, 100`}
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-lg font-semibold text-foreground leading-none">
                                    {stats.pct}%
                                </span>
                                <span className="text-[10px] text-muted-foreground mt-0.5">done</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5 text-sm">
                            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                                <ShoppingCart className="h-4 w-4 text-primary" />
                                <strong className="text-foreground">{stats.purchased}</strong>/{stats.total} picked
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                                <ListChecks className="h-4 w-4 text-primary" />
                                <strong className="text-foreground">{stats.remaining}</strong> remaining
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meal plan context */}
            <section className="rounded-2xl border bg-card shadow-soft p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span>
                        For{" "}
                        <strong className="text-foreground">{planSummary.mealCount} meals</strong>{" "}
                        across{" "}
                        <strong className="text-foreground">{planSummary.dayCount} days</strong>
                    </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    {mealReadiness.map(({ recipe: r, ready, got, matched }) => (
                        <span
                            key={r.id}
                            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-colors ${ready
                                    ? "bg-primary/10 border-primary/30 text-foreground"
                                    : "bg-secondary/60 text-foreground"
                                }`}
                            title={
                                matched > 0
                                    ? `${got}/${matched} ingredients ready`
                                    : "No tracked ingredients"
                            }
                        >
                            {ready ? (
                                <CircleCheck className="h-3 w-3 text-primary" />
                            ) : (
                                <UtensilsCrossed className="h-3 w-3 text-primary" />
                            )}
                            {r.title}
                            {ready && (
                                <span className="ml-0.5 text-[10px] font-semibold text-primary uppercase tracking-wide">
                                    Ready
                                </span>
                            )}
                        </span>
                    ))}
                </div>

                {/* Ready-to-cook callout */}
                {readyMeals.length > 0 && (
                    <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-4">
                        <div className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20 shrink-0">
                                <ChefHat className="h-4 w-4" />
                            </span>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-foreground">
                                    {readyMeals.length === 1
                                        ? "You've got everything for 1 meal!"
                                        : `You've got everything for ${readyMeals.length} meals!`}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    All ingredients are ticked off — ready to cook whenever you are.
                                </p>
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                    {readyMeals.map(({ recipe: r }) => (
                                        <span
                                            key={r.id}
                                            className="inline-flex items-center gap-1 rounded-full bg-background border px-2.5 py-0.5 text-[11px] text-foreground"
                                        >
                                            <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                                            {r.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Toolbar */}
            <section className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search your list…"
                        className="pl-9 pr-9"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:bg-secondary"
                            aria-label="Clear search"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant={hideChecked ? "default" : "outline"}
                        size="sm"
                        onClick={() => setHideChecked((v) => !v)}
                        className="gap-1.5"
                    >
                        <CircleCheck className="h-4 w-4" />
                        {hideChecked ? "Showing remaining" : "Hide checked"}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setConfirmClear(true)}
                        disabled={stats.purchased === 0}
                        className="gap-1.5"
                    >
                        <Trash2 className="h-4 w-4" />
                        Clear ticked
                    </Button>
                </div>
            </section>

            {/* Encouragement toast */}
            {lastTickMsg && (
                <div className="fixed bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 animate-fade-in">
                    <div className="rounded-full bg-foreground text-background text-sm px-4 py-2 shadow-lg flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        {lastTickMsg}
                    </div>
                </div>
            )}

            {/* Single unified list */}
            <section className="rounded-2xl border bg-card shadow-soft overflow-hidden">
                <div className="flex items-center justify-between gap-3 p-4 sm:p-5 border-b bg-gradient-to-r from-secondary/40 to-transparent">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                            <ShoppingCart className="h-4 w-4" />
                        </span>
                        <div>
                            <h3 className="font-heading font-semibold text-card-foreground leading-tight">
                                Your shopping list
                            </h3>
                            <p className="text-xs text-muted-foreground">
                                {stats.purchased}/{stats.total} picked
                            </p>
                        </div>
                    </div>
                    {stats.total > 0 && stats.purchased === stats.total && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                            <CircleCheck className="h-4 w-4" />
                            Complete
                        </span>
                    )}
                </div>

                {filtered.length === 0 ? (
                    <div className="p-10 text-center text-muted-foreground text-sm">
                        {query
                            ? `Nothing matches "${query}". Try a different word.`
                            : hideChecked
                                ? "Everything is ticked off — nice work!"
                                : "Your list is empty. Add an item below."}
                    </div>
                ) : (
                    <ul className="divide-y">
                        {filtered.map((item) => (
                            <li
                                key={item.id}
                                className="group flex items-center gap-3 px-4 sm:px-5 py-3 hover:bg-secondary/40 transition-colors"
                            >
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    aria-pressed={item.checked}
                                    className={`relative h-6 w-6 shrink-0 rounded-md border-2 transition-all flex items-center justify-center ${item.checked
                                        ? "bg-primary border-primary text-primary-foreground"
                                        : "border-input hover:border-primary"
                                        }`}
                                >
                                    {item.checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                                </button>
                                <button
                                    onClick={() => toggleItem(item.id)}
                                    className={`flex-1 text-left text-sm transition-all ${item.checked
                                        ? "line-through text-muted-foreground"
                                        : "text-card-foreground"
                                        }`}
                                >
                                    {(item.name).charAt(0).toUpperCase() + (item.name).slice(1)}
                                </button>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                    aria-label={`Remove ${item.name}`}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Add item */}
                <div className="p-3 sm:p-4 bg-secondary/20 border-t">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            addItem();
                        }}
                        className="flex items-center gap-2"
                    >
                        <Input
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            placeholder="Add something to the list…"
                            className="h-9 bg-background"
                        />
                        <Button type="submit" size="sm" className="gap-1.5 shrink-0">
                            <Plus className="h-4 w-4" />
                            Add
                        </Button>
                    </form>
                </div>
            </section>

            {/* Footer tip */}
            <p className="text-center text-xs text-muted-foreground pt-2">
                Tip: tap an item — or its label — to tick it off. Hover to remove.
            </p>

            <AlertDialog open={confirmClear} onOpenChange={setConfirmClear}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Clear ticked items?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will remove all {stats.purchased} ticked item
                            {stats.purchased === 1 ? "" : "s"} from your list. You can always
                            add them back.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={clearChecked}>
                            Yes, clear them
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
