import { Bell, Globe, User, Utensils } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-2xl font-heading font-bold text-foreground">Settings</h1>

            {[
                { icon: User, title: "Profile", desc: "Manage your account info" },
                { icon: Utensils, title: "Dietary Preferences", desc: "Set your default diet and allergens" },
                { icon: Bell, title: "Notifications", desc: "Meal reminders and updates" },
                { icon: Globe, title: "Language & Region", desc: "Set your preferred language and units" },
            ].map((s) => (
                <button
                    key={s.title}
                    className="w-full flex items-center gap-4 rounded-xl bg-card shadow-soft p-4 text-left hover:shadow-card transition-shadow"
                >
                    <div className="rounded-lg bg-secondary p-2.5">
                        <s.icon className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                        <p className="font-medium text-card-foreground">{s.title}</p>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                </button>
            ))}
        </div>
    );
}
