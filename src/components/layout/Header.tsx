"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import { MotionConfig, motion } from "framer-motion";

const links = [
    { href: "/about", label: "Skills" },  // Mapping Skills to About/Skills
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-24 py-6 bg-white/80 backdrop-blur-md dark:bg-zinc-950/80 border-b border-zinc-100 dark:border-zinc-800/50">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tight font-serif italic">
                Rodney Gitonga
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-white",
                            pathname === link.href ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}

                <div className="pl-4 border-l border-zinc-200 dark:border-zinc-800">
                    <ThemeToggle />
                </div>
            </nav>

            {/* Mobile Menu (Simplified for now) */}
            <div className="md:hidden flex items-center gap-4">
                <ThemeToggle />
            </div>
        </header>
    );
}
