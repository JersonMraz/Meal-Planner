import { Search, Bell, User, LogOut, Clock } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { useEffect, useState, useMemo, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { useUser } from "../contexts/UserContext";

export function TopNav() {
  const { user } = useUser();

  const [meals, setMeals] = useState<any[]>([]);
  const [total, setTotal] = useState(0);

  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

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

      <Toaster position="top-right" richColors expand />

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
                {results.map((r: any) => (
                  <li key={r.id}>
                    <button
                      type="button"
                      onClick={() => goToRecipe(r.id)}
                      className="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-secondary transition-colors"
                    >
                      <img
                        src={r.image_url}
                        alt={r.name}
                        className="h-10 w-10 rounded-md object-cover flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground truncate">{r.name}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {r.cuisine} · {r.diet_type}
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                        <Clock className="h-3 w-3" />
                        {r.prep_time}m
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

      <div className="ml-auto flex items-center gap-3">
        <button className="relative rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
        </button>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground cursor-pointer"
          onClick={() => setIsProfileModalOpen(!isProfileModalOpen)}
        >
          {user?.firstname?.charAt(0) || ""}{user?.lastname?.charAt(0) || ""}
        </div>

        {/* Profile Modal */}
        {isProfileModalOpen && (
          <div
            id="profile-modal"
            className="absolute right-4 top-16 w-64 rounded-lg border border-border bg-card shadow-lg z-50"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {user?.firstname?.charAt(0) || ""}{user?.lastname?.charAt(0) || ""}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {user?.firstname} {user?.lastname}
                  </p>
                  <p className="text-xs text-muted-foreground">{user?.email}</p>
                </div>
              </div>

              <button
                onClick={() => router.push('/settings')}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-secondary rounded-md transition-colors mb-2 cursor-pointer"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
