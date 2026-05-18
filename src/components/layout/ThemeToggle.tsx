"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme") as "light" | "dark" | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const resolved = saved ?? (prefersDark ? "dark" : "light");

        setTheme(resolved);
        document.documentElement.classList.toggle("dark", resolved === "dark");
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-full opacity-0 pointer-events-none"
                aria-label="Toggle Theme"
            >
                <Sun size={18} />
            </button>
        );
    }

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");

        if (!document.startViewTransition) return;

        const x = e.clientX;
        const y = e.clientY;
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            document.documentElement.classList.toggle("dark", newTheme === "dark");
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];
            document.documentElement.animate(
                {
                    clipPath: newTheme === "dark" ? clipPath : [...clipPath].reverse(),
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement:
                        newTheme === "dark"
                            ? "::view-transition-new(root)"
                            : "::view-transition-old(root)",
                }
            );
        });
    };

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-all dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-white"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
