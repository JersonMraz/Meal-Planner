'use client';

import { useState } from "react";
import {
    Bell,
    Globe,
    User,
    Utensils,
    Mail,
    Camera,
    Save,
    Sparkles,
    Moon,
    Smartphone,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Separator } from "@/app/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select";
import { Switch } from "@/app/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Textarea } from "@/app/components/ui/textarea";
import { toast } from "sonner";
import { cn } from "@/app/lib/utils";

const DIETS = [
    "No restrictions",
    "Vegetarian",
    "Vegan",
    "Pescatarian",
    "Keto",
    "Paleo",
    "Mediterranean",
];

const ALLERGENS = [
    "Gluten",
    "Dairy",
    "Eggs",
    "Peanuts",
    "Tree Nuts",
    "Soy",
    "Shellfish",
    "Fish",
    "Sesame",
];

const CUISINES = [
    "Italian",
    "Mexican",
    "Japanese",
    "Indian",
    "Thai",
    "Mediterranean",
    "American",
    "Chinese",
    "French",
];

export default function SettingsPage() {
    // Profile
    const [name, setName] = useState("Alex Morgan");
    const [email, setEmail] = useState("alex@example.com");
    const [bio, setBio] = useState("Home cook exploring plant-forward recipes.");

    // Dietary
    const [diet, setDiet] = useState("Mediterranean");
    const [allergens, setAllergens] = useState<string[]>(["Peanuts"]);
    const [cuisines, setCuisines] = useState<string[]>(["Italian", "Japanese"]);
    const [calorieGoal, setCalorieGoal] = useState("2000");

    // Notifications
    const [mealReminders, setMealReminders] = useState(true);
    const [groceryReminders, setGroceryReminders] = useState(true);
    const [weeklyDigest, setWeeklyDigest] = useState(false);
    const [productUpdates, setProductUpdates] = useState(false);
    const [pushEnabled, setPushEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(true);
    const [reminderTime, setReminderTime] = useState("18:00");

    // Language & Region
    const [language, setLanguage] = useState("English");
    const [region, setRegion] = useState("United States");
    const [units, setUnits] = useState("imperial");
    const [tempUnit, setTempUnit] = useState("F");
    const [weekStart, setWeekStart] = useState("monday");
    const [darkMode, setDarkMode] = useState(false);

    const toggleFromList = (
        value: string,
        list: string[],
        setList: (v: string[]) => void,
    ) => {
        setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
    };

    const handleSave = (section: string) => {
        toast.success(`${section} saved`, {
            description: "Your preferences have been updated.",
        });
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <header className="space-y-1">
                <h1 className="text-3xl font-heading font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground">
                    Customize your profile, diet, notifications, and regional preferences.
                </p>
            </header>

            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto gap-1 bg-secondary p-1">
                    <TabsTrigger value="profile" className="gap-2 py-2">
                        <User className="h-4 w-4" /> Profile
                    </TabsTrigger>
                    <TabsTrigger value="diet" className="gap-2 py-2">
                        <Utensils className="h-4 w-4" /> Diet
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="gap-2 py-2">
                        <Bell className="h-4 w-4" /> Alerts
                    </TabsTrigger>
                    <TabsTrigger value="region" className="gap-2 py-2">
                        <Globe className="h-4 w-4" /> Region
                    </TabsTrigger>
                </TabsList>

                {/* PROFILE */}
                <TabsContent value="profile" className="mt-6">
                    <Card className="shadow-soft">
                        <CardHeader>
                            <CardTitle className="font-heading text-xl">Profile</CardTitle>
                            <CardDescription>Your personal information shown across the app.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-20 w-20 border-2 border-border">
                                    <AvatarImage src="" alt={name} />
                                    <AvatarFallback className="bg-primary/10 text-primary font-heading text-xl">
                                        {name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Camera className="h-4 w-4" /> Change photo
                                </Button>
                            </div>

                            <Separator />

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full name</Label>
                                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="email"
                                            type="email"
                                            className="pl-9"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                    id="bio"
                                    rows={3}
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    placeholder="A short note about your cooking style..."
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button onClick={() => handleSave("Profile")} className="gap-2">
                                    <Save className="h-4 w-4" /> Save changes
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* DIET */}
                <TabsContent value="diet" className="mt-6">
                    <Card className="shadow-soft">
                        <CardHeader>
                            <CardTitle className="font-heading text-xl">Dietary Preferences</CardTitle>
                            <CardDescription>
                                We'll tailor recipe suggestions to match your needs.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label>Default diet</Label>
                                <Select value={diet} onValueChange={setDiet}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {DIETS.map((d) => (
                                            <SelectItem key={d} value={d}>
                                                {d}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-3">
                                <Label>Allergens to avoid</Label>
                                <div className="flex flex-wrap gap-2">
                                    {ALLERGENS.map((a) => {
                                        const active = allergens.includes(a);
                                        return (
                                            <button
                                                key={a}
                                                type="button"
                                                onClick={() => toggleFromList(a, allergens, setAllergens)}
                                                className={cn(
                                                    "px-3 py-1.5 rounded-full text-sm border transition-colors",
                                                    active
                                                        ? "bg-destructive/10 border-destructive/30 text-destructive"
                                                        : "bg-background border-border text-foreground hover:bg-secondary",
                                                )}
                                            >
                                                {a}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Favorite cuisines</Label>
                                <div className="flex flex-wrap gap-2">
                                    {CUISINES.map((c) => {
                                        const active = cuisines.includes(c);
                                        return (
                                            <button
                                                key={c}
                                                type="button"
                                                onClick={() => toggleFromList(c, cuisines, setCuisines)}
                                                className={cn(
                                                    "px-3 py-1.5 rounded-full text-sm border transition-colors",
                                                    active
                                                        ? "bg-primary/10 border-primary/30 text-primary"
                                                        : "bg-background border-border text-foreground hover:bg-secondary",
                                                )}
                                            >
                                                {c}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="calories">Daily calorie goal</Label>
                                    <Input
                                        id="calories"
                                        type="number"
                                        value={calorieGoal}
                                        onChange={(e) => setCalorieGoal(e.target.value)}
                                    />
                                </div>
                                <div className="rounded-lg bg-accent/10 border border-accent/20 p-3 flex items-start gap-2">
                                    <Sparkles className="h-4 w-4 text-accent mt-0.5" />
                                    <p className="text-sm text-muted-foreground">
                                        Recipes will be filtered to fit your diet and avoid your allergens.
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button onClick={() => handleSave("Dietary preferences")} className="gap-2">
                                    <Save className="h-4 w-4" /> Save changes
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* NOTIFICATIONS */}
                <TabsContent value="notifications" className="mt-6">
                    <Card className="shadow-soft">
                        <CardHeader>
                            <CardTitle className="font-heading text-xl">Notifications</CardTitle>
                            <CardDescription>Choose what you want to hear about and when.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-3">
                                <p className="text-sm font-medium text-foreground">Channels</p>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="flex items-center justify-between rounded-lg border border-border p-3">
                                        <div className="flex items-center gap-3">
                                            <Smartphone className="h-4 w-4 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm font-medium">Push</p>
                                                <p className="text-xs text-muted-foreground">On this device</p>
                                            </div>
                                        </div>
                                        <Switch checked={pushEnabled} onCheckedChange={setPushEnabled} />
                                    </div>
                                    <div className="flex items-center justify-between rounded-lg border border-border p-3">
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm font-medium">Email</p>
                                                <p className="text-xs text-muted-foreground">Sent to {email}</p>
                                            </div>
                                        </div>
                                        <Switch checked={emailEnabled} onCheckedChange={setEmailEnabled} />
                                    </div>
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-1">
                                <p className="text-sm font-medium text-foreground">What to notify me about</p>
                                <div className="divide-y divide-border">
                                    {[
                                        {
                                            title: "Meal reminders",
                                            desc: "Heads-up before each planned meal",
                                            checked: mealReminders,
                                            set: setMealReminders,
                                        },
                                        {
                                            title: "Grocery reminders",
                                            desc: "Alert when items are missing for tomorrow's meals",
                                            checked: groceryReminders,
                                            set: setGroceryReminders,
                                        },
                                        {
                                            title: "Weekly digest",
                                            desc: "A summary of your meal plan every Sunday",
                                            checked: weeklyDigest,
                                            set: setWeeklyDigest,
                                        },
                                        {
                                            title: "Product updates",
                                            desc: "New features and recipe collections",
                                            checked: productUpdates,
                                            set: setProductUpdates,
                                        },
                                    ].map((row) => (
                                        <div key={row.title} className="flex items-center justify-between py-3">
                                            <div className="pr-4">
                                                <p className="text-sm font-medium text-foreground">{row.title}</p>
                                                <p className="text-xs text-muted-foreground">{row.desc}</p>
                                            </div>
                                            <Switch checked={row.checked} onCheckedChange={row.set} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2 max-w-xs">
                                <Label htmlFor="reminderTime">Daily reminder time</Label>
                                <Input
                                    id="reminderTime"
                                    type="time"
                                    value={reminderTime}
                                    onChange={(e) => setReminderTime(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button onClick={() => handleSave("Notifications")} className="gap-2">
                                    <Save className="h-4 w-4" /> Save changes
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* REGION */}
                <TabsContent value="region" className="mt-6">
                    <Card className="shadow-soft">
                        <CardHeader>
                            <CardTitle className="font-heading text-xl">Language & Region</CardTitle>
                            <CardDescription>
                                Set your language, units, and how the app appears.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>Language</Label>
                                    <Select value={language} onValueChange={setLanguage}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["English", "Español", "Français", "Deutsch", "日本語", "中文"].map((l) => (
                                                <SelectItem key={l} value={l}>
                                                    {l}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Region</Label>
                                    <Select value={region} onValueChange={setRegion}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {[
                                                "United States",
                                                "United Kingdom",
                                                "Canada",
                                                "Australia",
                                                "Germany",
                                                "France",
                                                "Japan",
                                            ].map((r) => (
                                                <SelectItem key={r} value={r}>
                                                    {r}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label>Measurement units</Label>
                                <div className="grid grid-cols-2 gap-2 max-w-md">
                                    {[
                                        { v: "imperial", label: "Imperial", hint: "cups, oz, lb" },
                                        { v: "metric", label: "Metric", hint: "ml, g, kg" },
                                    ].map((u) => (
                                        <button
                                            key={u.v}
                                            type="button"
                                            onClick={() => setUnits(u.v)}
                                            className={cn(
                                                "rounded-lg border p-3 text-left transition-colors",
                                                units === u.v
                                                    ? "bg-primary/10 border-primary/40"
                                                    : "bg-background border-border hover:bg-secondary",
                                            )}
                                        >
                                            <p className="text-sm font-medium text-foreground">{u.label}</p>
                                            <p className="text-xs text-muted-foreground">{u.hint}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label>Temperature</Label>
                                    <Select value={tempUnit} onValueChange={setTempUnit}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="F">Fahrenheit (°F)</SelectItem>
                                            <SelectItem value="C">Celsius (°C)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Week starts on</Label>
                                    <Select value={weekStart} onValueChange={setWeekStart}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sunday">Sunday</SelectItem>
                                            <SelectItem value="monday">Monday</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Separator />

                            <div className="flex items-center justify-between rounded-lg border border-border p-3">
                                <div className="flex items-center gap-3">
                                    <Moon className="h-4 w-4 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Dark mode</p>
                                        <p className="text-xs text-muted-foreground">Use a darker theme</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">Beta</Badge>
                                    <Switch
                                        checked={darkMode}
                                        onCheckedChange={(v) => {
                                            setDarkMode(v);
                                            document.documentElement.classList.toggle("dark", v);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <Button onClick={() => handleSave("Language & region")} className="gap-2">
                                    <Save className="h-4 w-4" /> Save changes
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
