"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    // Sync with system preference on mount
    useEffect(() => {
        setMounted(true);
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(isDark ? "dark" : "light");
        if (isDark) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-full opacity-0 pointer-events-none" aria-label="Toggle Theme">
                <Sun size={18} />
            </button>
        );
    }

    const toggleThemeAtPosition = (e: React.MouseEvent<HTMLButtonElement>) => {
        const x = e.clientX;
        const y = e.clientY;
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        );

        if (!document.startViewTransition) {
            const newTheme = theme === "light" ? "dark" : "light";
            setTheme(newTheme);
            if (newTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return;
        }

        const transition = document.startViewTransition(() => {
            const newTheme = theme === "light" ? "dark" : "light";
            setTheme(newTheme);
            if (newTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ];
            document.documentElement.animate(
                {
                    clipPath: theme === "light" ? clipPath : [...clipPath].reverse(),
                },
                {
                    duration: 500,
                    easing: "ease-in-out",
                    pseudoElement: theme === "light" ? "::view-transition-new(root)" : "::view-transition-old(root)",
                }
            );
        });
    };


    return (
        <button
            onClick={toggleThemeAtPosition}
            className="flex items-center justify-center p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-all dark:hover:bg-zinc-800 dark:text-zinc-400 dark:hover:text-white"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
