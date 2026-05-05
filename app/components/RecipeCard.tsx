"use client";
import { Clock, Flame, Heart, HeartCrack } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useUser } from "../contexts/UserContext";
import { Toaster, toast } from "sonner";

export function RecipeCard({ recipe, onRemove }: { recipe: any, onRemove?: (id: number) => void }) {
  const [saved, setSaved] = useState(recipe.saved ?? false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  // Sync state with props if they change externally (e.g. after async favorites fetch)
  useEffect(() => {
    setSaved(recipe.saved ?? false);
  }, [recipe.saved]);

  const { user } = useUser();

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) return;

    // Optimistic update
    const previousSaved = saved;

    try {
      const res = await fetch(`/api/favorite`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mealId: recipe.id, userId: user.id })
      });

      const data = await res.json();

      if (res.status === 429) {
        toast.error(data.error || "Slow down! You're favoriting too fast.");
        return;
      }

      if (data.action === "added") {
        setSaved(true);
        setIsAnimating(true);
        toast.success(`"${recipe.name}" added to favorites`, { position: "top-center" });

        // Trigger real-time notification update
        window.dispatchEvent(new Event("notification-update"));

        setTimeout(() => setIsAnimating(false), 1000);
      } else if (data.action === "removed") {
        setSaved(false);
        setIsRemoving(true);
        toast.info(`"${recipe.name}" removed from favorites`);
        setTimeout(() => {
          setIsRemoving(false);
          if (onRemove) onRemove(recipe.id);
        }, 600);
      }
    } catch (err) {
      console.error(err);
      setSaved(previousSaved); // Revert on error
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <Link
      href={`/recipes/${recipe.id}`}
      className="group block rounded-2xl bg-card shadow-card overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        {recipe.image_url ? (
          <img
            src={recipe.image_url}
            alt={recipe.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-secondary flex flex-col items-center justify-center text-muted-foreground">
            <svg className="mx-auto h-20 w-20 mb-2 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19v-6.6l3 3l4-4l4 4l4-4l3 3V19q0 .825-.587 1.413T19 21zM5 3h14q.825 0 1.413.588T21 5v6.575l-3-3l-4 4l-4-4l-4 4l-3-3V5q0-.825.588-1.412T5 3" />
            </svg>
            <span className="text-sm px-3">Let us cook, then we will show you it.</span>
          </div>
        )}
        <button
          onClick={handleSave}
          className="absolute top-3 right-3 rounded-full bg-card/80 backdrop-blur-sm p-2 transition-all duration-500 ease-in-out hover:scale-125 hover:bg-card cursor-pointer"
        >
          <div className="relative flex items-center justify-center h-4 w-4">
            {isRemoving ? (
              <HeartCrack className="absolute h-4 w-4 text-muted-foreground animate-pulse" />
            ) : (
              <Heart
                className={`absolute h-4 w-4 transition-colors ${saved ? "fill-accent text-accent" : "text-muted-foreground"}`}
              />
            )}
            {isAnimating && (
              <Heart
                className="absolute inset-0 h-4 w-4 fill-accent text-accent animate-ping"
              />
            )}
          </div>
        </button>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-heading font-semibold text-card-foreground leading-tight">{recipe.name}</h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5" />
            {recipe.Nutrition?.calories ?? 0} cal
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {recipe.prep_time} min
          </span>
          <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">
            {recipe.cuisine}
          </span>
        </div>
      </div>
    </Link>
  );
}
