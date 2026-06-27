import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#2ea36b",
};

export const metadata: Metadata = {
  title: "MealFlow - Meal Planner",
  description: "MealFlow is a modern meal planning app: discover recipes, build a Mon–Sun meal plan, and auto-generate a smart grocery list in minutes.",
  authors: [{ name: "Jerson S. Sullano" }],
  creator: "Jerson S. Sullano",
  publisher: "Jerson S. Sullano",
  keywords: "meal planner, weekly meal planning, recipe finder, grocery list app, healthy meal plan, dinner ideas, MealFlow",
  alternates: {
    canonical: "https://diet-nomore.vercel.app/",
  },
  openGraph: {
    title: "MealFlow - Meal Planner",
    description: "MealFlow is a modern meal planning app: discover recipes, build a Mon–Sun meal plan, and auto-generate a smart grocery list in minutes.",
    url: "https://diet-nomore.vercel.app/",
    siteName: "MealFlow",
    images: [
      {
        url: "https://diet-nomore.vercel.app/",
        width: 1200,
        height: 630,
        alt: "MealFlow weekly meal planner preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MealFlow - Plan Meals, Cook Smarter",
    description: "Discover recipes, plan your week, and auto-generate a grocery list.",
    images: ["https://diet-nomore.vercel.app/"],
  },
  icons: {
    icon: '/favicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
