"use client";

import { useState } from "react";
import { groceryItems } from "../../data/recipes";
import { ShoppingCart } from "lucide-react";

export default function GroceryList() {
    const [items, setItems] = useState(groceryItems);

    const toggleItem = (catIdx: number, itemIdx: number) => {
        const next = items.map((cat, ci) =>
            ci === catIdx
                ? {
                    ...cat,
                    items: cat.items.map((it, ii) =>
                        ii === itemIdx ? { ...it, checked: !it.checked } : it
                    ),
                }
                : cat
        );
        setItems(next);
    };

    const total = items.reduce((acc, c) => acc + c.items.length, 0);
    const purchased = items.reduce((acc, c) => acc + c.items.filter((i) => i.checked).length, 0);

    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-foreground">Grocery List</h1>
                    <p className="text-sm text-muted-foreground mt-1">Auto-generated from your meal plan</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{purchased}/{total}</span>
                </div>
            </div>

            {/* Progress bar */}
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${(purchased / total) * 100}%` }}
                />
            </div>

            {items.map((cat, ci) => (
                <div key={cat.category} className="rounded-xl bg-card shadow-soft p-4">
                    <h3 className="font-heading font-semibold text-card-foreground mb-3">{cat.category}</h3>
                    <ul className="space-y-2">
                        {cat.items.map((item, ii) => (
                            <li key={item.name}>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() => toggleItem(ci, ii)}
                                        className="rounded border-input text-primary focus:ring-ring h-4 w-4"
                                    />
                                    <span className={`text-sm transition-colors ${item.checked ? "line-through text-muted-foreground" : "text-card-foreground"}`}>
                                        {item.name}
                                    </span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
