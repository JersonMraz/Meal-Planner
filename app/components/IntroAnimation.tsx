"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChefHat } from "lucide-react";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
    onComplete?: () => void;
    duration?: number;
}

export const IntroAnimation = ({ onComplete, duration = 2600 }: IntroAnimationProps) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => {
            setShow(false);
            setTimeout(() => onComplete?.(), 600);
        }, duration);
        return () => clearTimeout(t);
    }, [duration, onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="intro"
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {/* Soft animated background blobs */}
                    <motion.div
                        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
                        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className="relative flex flex-col items-center gap-6">
                        {/* Logo with pulse ring */}
                        <div className="relative flex items-center justify-center">
                            <motion.span
                                className="absolute inline-flex h-24 w-24 rounded-full bg-primary/30"
                                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                                transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                            />
                            <motion.div
                                className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-primary shadow-elevated"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
                            >
                                <ChefHat className="h-12 w-12 text-primary-foreground" />
                            </motion.div>
                        </div>

                        {/* Brand name with letter stagger */}
                        <div className="overflow-hidden">
                            <motion.h1
                                className="text-4xl md:text-5xl font-heading font-bold text-foreground flex gap-0.5"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } },
                                }}
                            >
                                {"MealFlow".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { y: 40, opacity: 0 },
                                            visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 18 } },
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </div>

                        {/* Tagline */}
                        <motion.p
                            className="text-sm text-muted-foreground tracking-wide"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            Plan meals. Cook smarter.
                        </motion.p>

                        {/* Loading bar */}
                        <motion.div
                            className="mt-2 h-1 w-40 overflow-hidden rounded-full bg-secondary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.4 }}
                        >
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.1, delay: 1.4, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
