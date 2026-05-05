'use client';

import { useEffect, useState, useRef } from "react";
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
    Plus,
    X,
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
import { Toaster, toast } from "sonner";
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

const ALLERGEN_SUGGESTIONS = [
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

const CUISINE_SUGGESTIONS = [
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
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [profile_picture, setProfile_picture] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Dietary
    const [diet, setDiet] = useState<string>();
    const [allergens, setAllergens] = useState<string[]>([]);
    const [cuisines, setCuisines] = useState<string[]>([]);
    const [calorieGoal, setCalorieGoal] = useState<number>();
    // Notifications
    const [mealReminders, setMealReminders] = useState<boolean>();
    const [groceryReminders, setGroceryReminders] = useState<boolean>();
    const [weeklyDigest, setWeeklyDigest] = useState<boolean>();
    const [productUpdates, setProductUpdates] = useState<boolean>();
    const [pushEnabled, setPushEnabled] = useState<boolean>();
    const [emailEnabled, setEmailEnabled] = useState<boolean>();
    const [reminderTime, setReminderTime] = useState<string>();

    // Language & Region
    const [language, setLanguage] = useState("English");
    const [region, setRegion] = useState("United States");
    const [units, setUnits] = useState("imperial");
    const [tempUnit, setTempUnit] = useState("F");
    const [weekStart, setWeekStart] = useState("monday");
    const [darkMode, setDarkMode] = useState(false);

    const [allergenInput, setAllergenInput] = useState("");
    const [cuisineInput, setCuisineInput] = useState("");

    const addToList = (
        value: string,
        list: string[],
        setList: (v: string[]) => void,
        reset: () => void,
    ) => {
        const v = value.trim();
        if (!v) return;
        if (!list.some((item) => item.toLowerCase() === v.toLowerCase())) {
            setList([...list, v]);
        }
        reset();
    };

    const removeFromList = (
        value: string,
        list: string[],
        setList: (v: string[]) => void,
    ) => {
        setList(list.filter((v) => v !== value));
    };

    const handleSave = async (section: string) => {
        const toastId = toast.loading(`Updating your ${section.toLowerCase()}...`);
        try {
            let response;
            switch (section) {
                case "Profile":
                    response = await fetch("/api/auth/profile", {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            firstname,
                            lastname,
                            bio,
                            profile_picture,
                        }),
                    });
                    break;
                case "Diet":
                    response = await fetch("/api/auth/dietpreference", {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            diet,
                            allergens,
                            cuisines,
                            calorieGoal,
                        }),
                    });
                    break;
                case "Notifications":
                    response = await fetch("/api/auth/notifpreference", {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            mealReminders,
                            groceryReminders,
                            weeklyDigest,
                            productUpdates,
                            pushEnabled,
                            emailEnabled,
                            reminderTime,
                        }),
                    });
                    break;
                case "Language & Region":
                    response = await fetch("/api/auth/language", {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            language,
                            region,
                            weekStart,
                        }),
                    });
                    break;
                default:
                    throw new Error("Invalid section");
            }

            if (!response?.ok) {
                const errorData = await response?.json().catch(() => ({}));
                throw new Error(errorData?.error || `Failed to save ${section}`);
            }

            window.dispatchEvent(new Event("notification-update"));
            toast.success(`${section} updated successfully!`, { id: toastId, position: "top-center" });
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || `Could not update ${section}`, { id: toastId, position: "top-center" });
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('/api/auth/me')

                if (!response.ok) return console.error("Failed to fetch user")

                const data = await response.json();

                //Profile
                setEmail(data.user.email)
                setBio(data.user.bio)
                setFirstname(data.user.firstname)
                setLastname(data.user.lastname)
                setProfile_picture(data.user.profile_picture)

                //Diet
                setDiet(data.user.dietaryPreferences.default_diet)
                setAllergens(data.user.dietaryPreferences.allergens)
                setCuisines(data.user.dietaryPreferences.favorite_cuisines)
                setCalorieGoal(data.user.dietaryPreferences.calorieGoal)

                //Notifications
                setMealReminders(data.user.notificationSettings.meal_reminders)
                setGroceryReminders(data.user.notificationSettings.grocery_reminders)
                setWeeklyDigest(data.user.notificationSettings.weekly_digest)
                setProductUpdates(data.user.notificationSettings.product_updates)
                setPushEnabled(data.user.notificationSettings.push_enabled)
                setEmailEnabled(data.user.notificationSettings.email_enabled)
                setReminderTime(data.user.notificationSettings.reminder_time)

                //Language & Region
                setLanguage(data.user.languageAndRegion.language)
                setRegion(data.user.languageAndRegion.region)
                setWeekStart(data.user.languageAndRegion.weekStart)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUser()
    }, [])

    const handleChangeProfilePhoto = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const toastId = toast.loading("Updating profile photo...");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const uploadResponse = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!uploadResponse.ok) throw new Error("Upload failed");

            const { image_url } = await uploadResponse.json();
            setProfile_picture(image_url);

            // Update user profile with the new image URL
            const profileResponse = await fetch("/api/auth/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    bio,
                    profile_picture: image_url,
                }),
            });

            if (profileResponse.ok) {
                toast.success("Profile photo updated", { id: toastId, position: "top-center" });
            } else {
                throw new Error("Failed to update profile");
            }
        } catch (error) {
            console.error(error);
            toast.error("Error updating profile photo", { id: toastId, position: "top-center" });
        }
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
                    <TabsTrigger value="profile" className="gap-2 py-2 cursor-pointer">
                        <User className="h-4 w-4" /> Profile
                    </TabsTrigger>
                    <TabsTrigger value="diet" className="gap-2 py-2 cursor-pointer">
                        <Utensils className="h-4 w-4" /> Diet
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="gap-2 py-2 cursor-pointer">
                        <Bell className="h-4 w-4" /> Alerts
                    </TabsTrigger>
                    <TabsTrigger value="region" className="gap-2 py-2 cursor-pointer">
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
                                <Avatar className="h-30 w-30 border-2 border-border">
                                    <AvatarImage src={profile_picture} alt={firstname + " " + lastname} className="object-cover" />
                                    <AvatarFallback className="bg-primary/10 text-primary font-heading text-xl">
                                        {firstname.charAt(0) + lastname.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <Button variant="outline" size="sm" className="gap-2" onClick={handleChangeProfilePhoto}>
                                    <Camera className="h-4 w-4" /> Change photo
                                </Button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <Separator />

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="firstname">First name</Label>
                                    <Input id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastname">Last name</Label>
                                    <Input id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
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
                                    value={bio || ""}
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
                                <Select value={diet || "No restrictions"} onValueChange={(value) => setDiet(value)}>
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
                                <div className="flex gap-2">
                                    <Input
                                        id="allergen-input"
                                        placeholder="Type an allergen and press Enter"
                                        value={allergenInput}
                                        maxLength={40}
                                        onChange={(e) => setAllergenInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                addToList(allergenInput, allergens, setAllergens, () => setAllergenInput(""));
                                            }
                                        }}
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() =>
                                            addToList(allergenInput, allergens, setAllergens, () => setAllergenInput(""))
                                        }
                                        className="gap-1 shrink-0"
                                    >
                                        <Plus className="h-4 w-4" /> Add
                                    </Button>
                                </div>
                                {allergens.length > 0 ? (
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {allergens.map((a) => (
                                            <span
                                                key={a}
                                                className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-sm bg-destructive/10 border border-destructive/30 text-destructive"
                                            >
                                                {a}
                                                <button
                                                    type="button"
                                                    onClick={() => removeFromList(a, allergens, setAllergens)}
                                                    className="rounded-full hover:bg-destructive/20 p-0.5"
                                                    aria-label={`Remove ${a}`}
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-xs text-muted-foreground">No allergens added yet.</p>
                                )}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <span className="text-xs text-muted-foreground mr-1 self-center">Suggestions:</span>
                                    {ALLERGEN_SUGGESTIONS.filter(
                                        (s) => !allergens.some((a) => a.toLowerCase() === s.toLowerCase()),
                                    )
                                        .slice(0, 6)
                                        .map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => addToList(s, allergens, setAllergens, () => { })}
                                                className="text-xs px-2 py-0.5 rounded-full border border-dashed border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
                                            >
                                                + {s}
                                            </button>
                                        ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="cuisine-input">Favorite cuisines</Label>
                                <div className="flex gap-2">
                                    <Input
                                        id="cuisine-input"
                                        placeholder="Type a cuisine and press Enter"
                                        value={cuisineInput}
                                        maxLength={40}
                                        onChange={(e) => setCuisineInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                addToList(cuisineInput, cuisines, setCuisines, () => setCuisineInput(""));
                                            }
                                        }}
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() =>
                                            addToList(cuisineInput, cuisines, setCuisines, () => setCuisineInput(""))
                                        }
                                        className="gap-1 shrink-0"
                                    >
                                        <Plus className="h-4 w-4" /> Add
                                    </Button>
                                </div>
                                {cuisines.length > 0 ? (
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {cuisines.map((c) => (
                                            <span
                                                key={c}
                                                className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full text-sm bg-primary/10 border border-primary/30 text-primary"
                                            >
                                                {c}
                                                <button
                                                    type="button"
                                                    onClick={() => removeFromList(c, cuisines, setCuisines)}
                                                    className="rounded-full hover:bg-primary/20 p-0.5"
                                                    aria-label={`Remove ${c}`}
                                                >
                                                    <X className="h-3 w-3" />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-xs text-muted-foreground">No cuisines added yet.</p>
                                )}
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    <span className="text-xs text-muted-foreground mr-1 self-center">Suggestions:</span>
                                    {CUISINE_SUGGESTIONS.filter(
                                        (s) => !cuisines.some((c) => c.toLowerCase() === s.toLowerCase()),
                                    )
                                        .slice(0, 6)
                                        .map((s) => (
                                            <button
                                                key={s}
                                                type="button"
                                                onClick={() => addToList(s, cuisines, setCuisines, () => { })}
                                                className="text-xs px-2 py-0.5 rounded-full border border-dashed border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
                                            >
                                                + {s}
                                            </button>
                                        ))}
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="calories">Daily calorie goal</Label>
                                    <Input
                                        id="calories"
                                        type="number"
                                        value={calorieGoal || ""}
                                        onChange={(e) => setCalorieGoal(Number(e.target.value))}
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
                                <Button onClick={() => handleSave("Diet")} className="gap-2">
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
                                            <Switch checked={!!row.checked} onCheckedChange={row.set} />
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
                                    onChange={(e) => setReminderTime(e.target.value as string)}
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
                                    <Label>
                                        Language
                                        <Badge variant="default" className="ml-2 cursor-not-allowed">
                                            Coming soon
                                        </Badge>
                                    </Label>
                                    <Select value={language} onValueChange={setLanguage} disabled>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {["English", "Tagalog"].map((l) => (
                                                <SelectItem key={l} value={l}>
                                                    {l}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>
                                        Region
                                        <Badge variant="default" className="ml-2 cursor-not-allowed">
                                            Coming soon
                                        </Badge>
                                    </Label>
                                    <Select value={region} onValueChange={setRegion} disabled>
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
                                <div className="space-y-2">
                                    <Label>
                                        Week starts on
                                        <Badge variant="default" className="ml-2 cursor-not-allowed">
                                            Coming soon
                                        </Badge>
                                    </Label>
                                    <Select value={weekStart} onValueChange={setWeekStart} disabled>
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
                                    <Badge variant="secondary" className="cursor-not-allowed">
                                        Beta
                                    </Badge>
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
                                <Button
                                    // onClick={() => handleSave("Language & Region")}
                                    className="gap-2 cursor-not-allowed"
                                    variant="secondary"
                                >
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
