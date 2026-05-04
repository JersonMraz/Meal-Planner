import {
  Search,
  Bell,
  Clock,
  CalendarDays,
  ShoppingCart,
  Sparkles,
  CheckCheck,
  User,
  Settings,
  LogOut,
  Heart,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { SidebarTrigger } from "./ui/sidebar";
import { useEffect, useState, useMemo, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useUser } from "../contexts/UserContext";
import { Button } from "@/app/components/ui/button";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { cn } from "@/app/lib/utils";
import { navigate } from "next/dist/client/components/segment-cache/navigation";

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: typeof Bell;
  iconClass: string;
  to?: string;
  unread: boolean;
};

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    title: "Time to plan tomorrow's meals",
    description: "You have 2 empty slots for tomorrow. Fill them in?",
    time: "5m ago",
    icon: CalendarDays,
    iconClass: "bg-primary/15 text-primary",
    to: "/mealplanner",
    unread: true,
  },
  {
    id: "n2",
    title: "Grocery list updated",
    description: "6 new ingredients were added from this week's plan.",
    time: "1h ago",
    icon: ShoppingCart,
    iconClass: "bg-accent/15 text-accent",
    to: "/grocerylist",
    unread: true,
  },
  {
    id: "n3",
    title: "New recipe match for you",
    description: "Try “Lemon Herb Salmon” — fits your Mediterranean preference.",
    time: "Yesterday",
    icon: Sparkles,
    iconClass: "bg-primary/10 text-primary",
    to: "/recipes",
    unread: true,
  },
  {
    id: "n4",
    title: "Saved to favorites",
    description: "“Avocado Toast Deluxe” was added to your favorites.",
    time: "2d ago",
    icon: Heart,
    iconClass: "bg-secondary text-foreground",
    to: "/favorites",
    unread: false,
  },
];

export function TopNav() {
  const { user } = useUser();

  const [meals, setMeals] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const unreadCount = notifications.filter((n) => n.unread).length;

  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    toast.success("All notifications marked as read");
  };

  const openNotification = (n: Notification) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === n.id ? { ...item, unread: false } : item)),
    );
    if (n.to) router.push(n.to);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const modal = document.getElementById('profile-modal')
      if (modal && !modal.contains(e.target as Node)) {
        setIsProfileModalOpen(false)
      }
    }
    if (isProfileModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isProfileModalOpen])

  useEffect(() => {
    let ignore = false;
    async function fetchMeals() {
      const res = await fetch("/api/meals/search?q=" + encodeURIComponent(query));
      const json = await res.json();
      if (!ignore) {
        setMeals(Array.isArray(json.meals) ? json.meals : []);
        setTotal(json.total);
      }
    }
    const t = setTimeout(() => {
      if (query.trim()) fetchMeals();
    }, 300);
    return () => {
      ignore = true;
      clearTimeout(t);
    };
  }, [query]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return meals.slice(0, 6);
  }, [query, meals]);

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const goToRecipe = (id: string) => {
    setOpen(false);
    setQuery("");
    router.push(`/recipes/${id}`);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    if (results.length === 1) {
      goToRecipe(results[0].id);
    } else {
      setOpen(false);
      router.push(`/recipes?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleLogout = () => {
    const toastId = toast.loading("Signing out...");
    fetch("/api/auth/signout", { method: "POST" }).then(() => {
      setTimeout(() => {
        toast.success("Signed out successfully!", { id: toastId, duration: 3000 });
        router.push("/");
      }, 1000);
    });
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-card/80 backdrop-blur-md px-4">
      <SidebarTrigger className="text-muted-foreground hover:text-foreground" />

      <div ref={containerRef} className="relative flex-1 max-w-md">
        <form onSubmit={handleSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="Search recipes, ingredients..."
            className="w-full rounded-lg border border-input bg-secondary/50 py-1.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </form>

        {open && query.trim() && (
          <div className="absolute left-0 right-0 top-full mt-2 rounded-xl border border-border bg-popover shadow-lg overflow-hidden animate-fade-in z-40">
            {results.length > 0 ? (
              <ul className="max-h-80 overflow-y-auto py-1">
                {results.map((r) => (
                  <li key={r.id}>
                    <button
                      type="button"
                      onClick={() => goToRecipe(r.id)}
                      className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-secondary transition-colors"
                    >
                      <img
                        src={r.image}
                        alt={r.title}
                        className="h-10 w-10 rounded-md object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground truncate">{r.title}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {r.cuisine} · {r.diet}
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        <Clock className="h-3 w-3" />
                        {r.prepTime}m
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                No recipes match "{query}"
              </div>
            )}
            {results.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  router.push(`/recipes?q=${encodeURIComponent(query.trim())}`);
                }}
                className="block w-full border-t border-border bg-secondary/30 px-3 py-2 text-center text-xs font-medium text-primary hover:bg-secondary transition-colors"
              >
                See all results
              </button>
            )}
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <button
              className="relative rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                  {unreadCount}
                </span>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            sideOffset={8}
            className="w-[22rem] p-0 overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-foreground">Notifications</p>
                <p className="text-xs text-muted-foreground">
                  {unreadCount > 0 ? `${unreadCount} unread` : "You're all caught up"}
                </p>
              </div>
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllRead}
                  className="h-8 gap-1 text-xs"
                >
                  <CheckCheck className="h-3.5 w-3.5" />
                  Mark all read
                </Button>
              )}
            </div>
            <div className="max-h-[26rem] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="px-4 py-10 text-center text-sm text-muted-foreground">
                  No notifications yet
                </div>
              ) : (
                <ul className="divide-y divide-border">
                  {notifications.map((n) => {
                    const Icon = n.icon;
                    return (
                      <li key={n.id}>
                        <button
                          type="button"
                          onClick={() => openNotification(n)}
                          className={cn(
                            "flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-secondary/60",
                            n.unread && "bg-primary/[0.04]",
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                              n.iconClass,
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-foreground truncate">
                                {n.title}
                              </p>
                              {n.unread && (
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              )}
                            </div>
                            <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                              {n.description}
                            </p>
                            <p className="mt-1 text-[11px] text-muted-foreground/80">
                              {n.time}
                            </p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <button
              type="button"
              onClick={() => router.push("/settings")}
              className="block w-full border-t border-border bg-secondary/30 px-3 py-2 text-center text-xs font-medium text-primary hover:bg-secondary transition-colors"
            >
              Notification settings
            </button>
          </PopoverContent>
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center gap-2 rounded-full p-0.5 pr-2 hover:bg-secondary transition-colors"
              aria-label="Account menu"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-xs font-medium text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8} className="w-60 p-0">
            <div className="flex items-center gap-3 border-b border-border px-3 py-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary text-sm font-medium text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">Jamie Doe</p>
                <p className="text-xs text-muted-foreground truncate">jamie@mealflow.app</p>
              </div>
            </div>
            <div className="p-1">
              <DropdownMenuLabel className="px-2 pt-2 pb-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Account
              </DropdownMenuLabel>
              <DropdownMenuItem onClick={() => router.push("/settings")} className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/favorites")} className="gap-2">
                <Heart className="h-4 w-4" />
                Favorites
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")} className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="gap-2 text-destructive focus:text-destructive"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
