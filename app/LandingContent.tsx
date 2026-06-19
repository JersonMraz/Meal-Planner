"use client";

import Link from "next/link";
import { Button } from "./components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import {
  ChefHat,
  CalendarCheck,
  ShoppingCart,
  Heart,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  Leaf,
  Smartphone,
  ShieldCheck,
  Star,
  Check,
  Utensils,
  Search,
  BellRing,
} from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../public/assets/hero-recipe.jpg";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import { IntroAnimation } from "./components/IntroAnimation";
import { useState, useEffect } from "react";

const features = [
  {
    icon: Search,
    title: "Smart Recipe Finder",
    desc: "Search thousands of recipes by ingredient, cuisine, diet, or prep time.",
    tint: "primary",
  },
  {
    icon: CalendarCheck,
    title: "Weekly Meal Planner",
    desc: "Drag-and-drop a balanced Mon–Sun plan that fits your goals.",
    tint: "info",
  },
  {
    icon: ShoppingCart,
    title: "Auto Grocery Lists",
    desc: "Your meal plan instantly becomes an organized shopping list.",
    tint: "accent",
  },
  {
    icon: Heart,
    title: "Personal Favorites",
    desc: "Bookmark go-to recipes and rebuild plans in a single tap.",
    tint: "brand",
  },
  {
    icon: Leaf,
    title: "Diet & Allergen Aware",
    desc: "Filter by allergens, dietary needs, and favorite cuisines.",
    tint: "primary",
  },
  {
    icon: BellRing,
    title: "Helpful Reminders",
    desc: "Color-coded notifications keep prep, shopping & cooking on track.",
    tint: "accent",
  },
] as const;

const stats = [
  { value: "10k+", label: "Curated recipes", icon: ChefHat },
  { value: "50k+", label: "Happy home cooks", icon: Users },
  { value: "5 min", label: "To plan a full week", icon: Clock },
  { value: "30%", label: "Less food waste", icon: Leaf },
];

const benefits = [
  {
    icon: Smartphone,
    title: "Built for every device",
    desc: "Responsive layout with a sidebar on desktop and a clean bottom nav on mobile.",
  },
  {
    icon: ShieldCheck,
    title: "Your data, your control",
    desc: "Preferences, allergens and favorites are tied to your profile — easy to update anytime.",
  },
  {
    icon: Utensils,
    title: "Cook with confidence",
    desc: "Step-by-step recipes, prep times, and serving sizes designed for real kitchens.",
  },
];

const testimonials = [
  {
    name: "Maya R.",
    role: "Busy parent",
    quote:
      "MealFlow shaved hours off my Sundays. I plan the week in five minutes and the grocery list just appears.",
  },
  {
    name: "Daniel K.",
    role: "Fitness coach",
    quote:
      "Finally a planner that respects my macros and dietary preferences without feeling clinical.",
  },
  {
    name: "Sofia T.",
    role: "Student",
    quote:
      "Cheap, simple recipes I actually want to cook — and zero food waste at the end of the week.",
  },
];

const faqs = [
  {
    q: "Is MealFlow free to use?",
    a: "Yes — the core experience (recipe finder, meal planner, grocery list, favorites) is completely free.",
  },
  {
    q: "Can I set allergens and dietary preferences?",
    a: "Absolutely. From Settings → Dietary Preferences you can add custom allergens and favorite cuisines, and recipes will be filtered accordingly.",
  },
  {
    q: "Does it work on mobile?",
    a: "MealFlow is fully responsive with a dedicated bottom navigation on mobile and a collapsible sidebar on desktop.",
  },
  {
    q: "Will my meal plan generate a shopping list?",
    a: "Yes. Anything you add to your weekly plan is automatically aggregated into an organized grocery list.",
  },
];

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const tintClasses: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  accent: { bg: "bg-accent/10", text: "text-accent" },
  info: { bg: "bg-info/10", text: "text-info" },
  brand: { bg: "bg-brand/10", text: "text-brand" },
};

export default function LandingContent({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    const played = sessionStorage.getItem("mealflow-intro-played") === "1";
    if (played) {
      setIntroDone(true);
    } else {
      setIntroDone(false);
    }
  }, []);

  useEffect(() => {
    if (mounted && introDone) {
      sessionStorage.setItem("mealflow-intro-played", "1");
    }
  }, [introDone, mounted]);

  const handleSignOut = () => {
    const toastId = toast.loading("Signing out...");
    fetch("/api/auth/signout", { method: "POST" }).then(() => {
      setTimeout(() => {
        toast.success("Signed out successfully!", { id: toastId, duration: 3000 });
        window.location.reload();
      }, 1000);
    });
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <>
      {!introDone && <IntroAnimation onComplete={() => setIntroDone(true)} />}
      <motion.main
        className="min-h-screen bg-background text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone ? 1 : 0 }}
        transition={{ duration: 0.6, delay: introDone ? 0 : 0.1 }}
      >
        {/* Nav */}
        <header className="sticky top-0 z-50 border-b border-border bg-card/70 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="#hero" className="flex items-center gap-2">
              <ChefHat className="h-7 w-7 text-primary" />
              <span className="text-xl font-heading font-bold text-foreground">MealFlow</span>
            </Link>
            <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
              <a href="#why" className="hover:text-foreground transition-colors">Why MealFlow</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </nav>
            <div className="flex items-center gap-2">
              {isLoggedIn ? (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <Button size="sm" onClick={handleSignOut} variant="destructive">
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/signin">Sign In</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="hero" className="relative overflow-hidden">
          {/* Decorative gradient blobs */}
          <div className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute top-20 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto flex max-w-6xl flex-col-reverse md:flex-row items-center gap-12 px-4 py-20 md:py-28">
            <motion.div className="flex-1 space-y-6" {...fade()}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Your modern kitchen companion
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] tracking-tight text-foreground">
                Plan meals.{" "}
                <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  Cook smarter.
                </span>
                <br />
                Waste less.
              </h1>
              <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
                MealFlow helps you discover recipes you'll love, plan your week in minutes, and
                turn your plan into a ready-to-shop grocery list — all in one calm, beautiful app.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/sign-up">
                    Start free <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/recipes">Browse recipes</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span>Loved by 50k+ home cooks worldwide</span>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border">
                  <Image src={heroImg} alt="A vibrant spread of healthy, home-cooked meals" className="w-full aspect-4/3 object-cover" priority />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/40 via-transparent to-transparent" />
                </div>
                {/* Floating cards */}
                <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 pr-4 shadow-card backdrop-blur">
                  <div className="rounded-xl bg-primary/10 p-2">
                    <CalendarCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">This week's plan</p>
                    <p className="text-[11px] text-muted-foreground">7 meals · 1 list</p>
                  </div>
                </div>
                <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 pr-4 shadow-card backdrop-blur">
                  <div className="rounded-xl bg-accent/10 p-2">
                    <ShoppingCart className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Grocery list ready</p>
                    <p className="text-[11px] text-muted-foreground">Auto-generated</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section id="stats" className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border py-10 px-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} className="flex flex-col items-center gap-1 text-center px-4" {...fade(i * 0.08)}>
                <s.icon className="h-5 w-5 text-primary mb-1" />
                <p className="text-2xl md:text-3xl font-heading font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.div className="text-center mb-14 max-w-2xl mx-auto" {...fade()}>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Features</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-foreground">
              Everything you need to eat well
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From discovering new recipes to planning your entire week and shopping smart —
              MealFlow brings the whole kitchen workflow into one place.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const tint = tintClasses[f.tint];
              return (
                <motion.div
                  key={f.title}
                  className="group rounded-2xl border border-border bg-card shadow-card p-6 space-y-3 hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                  {...fade(i * 0.06)}
                >
                  <div className={`inline-flex rounded-xl p-3 ${tint.bg}`}>
                    <f.icon className={`h-5 w-5 ${tint.text}`} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-secondary/40 border-y border-border">
          <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
            <motion.div className="text-center mb-14 max-w-2xl mx-auto" {...fade()}>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">How it works</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-foreground">
                Three steps to better meals
              </h2>
              <p className="mt-4 text-muted-foreground">
                A calm, guided flow from inspiration to dinner on the table.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Find recipes", desc: "Search by ingredient, cuisine, diet, or prep time and save your favorites.", icon: Search },
                { step: "2", title: "Plan your week", desc: "Drop recipes into a Mon–Sun planner that balances your goals.", icon: CalendarCheck },
                { step: "3", title: "Shop & cook", desc: "Get an auto-generated grocery list and start cooking with confidence.", icon: Utensils },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  className="relative rounded-2xl border border-border bg-card p-6 text-center space-y-3 shadow-soft"
                  {...fade(i * 0.12)}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-base font-heading font-bold">
                    {item.step}
                  </div>
                  <item.icon className="mx-auto h-5 w-5 text-muted-foreground" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why MealFlow */}
        <section id="why" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <motion.div className="text-center mb-14 max-w-2xl mx-auto" {...fade()}>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Why MealFlow</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-foreground">
              Designed for real kitchens
            </h2>
            <p className="mt-4 text-muted-foreground">
              We focused on the small details that make meal planning a habit — not a chore.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="rounded-2xl border border-border bg-card p-6 space-y-3 shadow-card"
                {...fade(i * 0.1)}
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                <ul className="pt-2 space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Thoughtful, accessible design
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Lightning-fast interactions
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-secondary/40 border-y border-border">
          <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
            <motion.div className="text-center mb-12 max-w-2xl mx-auto" {...fade()}>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Loved by cooks</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-foreground">
                What people are saying
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.name}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col gap-4"
                  {...fade(i * 0.1)}
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-sm text-foreground leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-auto text-sm">
                    <p className="font-medium text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-4 py-20 md:py-28">
          <motion.div className="text-center mb-10" {...fade()}>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-foreground">
              Frequently asked questions
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-2 shadow-soft">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="px-4">
                <AccordionTrigger className="text-left font-medium text-foreground cursor-pointer">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-20 md:pb-28">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-primary p-10 md:p-16 text-center space-y-5"
            {...fade()}
          >
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <h2 className="relative text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Ready to simplify mealtime?
            </h2>
            <p className="relative text-primary-foreground/85 max-w-md mx-auto">
              Join thousands of home cooks who plan, shop, and eat better with MealFlow — for free.
            </p>
            <div className="relative">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/sign-up">
                  Get started — it's free <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-card">
          <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5 text-primary" />
              <span className="font-heading font-semibold text-foreground">MealFlow</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            </div>
            <p>© {new Date().getFullYear()} MealFlow. All rights reserved.</p>
          </div>
        </footer>
      </motion.main>
    </>
  );
}
