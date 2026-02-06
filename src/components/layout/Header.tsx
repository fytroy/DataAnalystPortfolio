"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
    { href: "/about", label: "Skills" },  // Mapping Skills to About/Skills
    { href: "/projects", label: "Projects" },
    { href: "/lab-challenges", label: "Lab Challenges" },
    { href: "/about", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-24 py-6 bg-white/80 backdrop-blur-md dark:bg-zinc-950/80 border-b border-zinc-100 dark:border-zinc-800/50">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tight font-serif italic z-50 relative">
                Rodney Gitonga
            </Link>

            {/* Desktop Navigation */}
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

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-4 z-50 relative">
                <ThemeToggle />
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 -mr-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-zinc-50 dark:bg-zinc-950 flex flex-col pt-32 px-8 overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-8">
                            {links.map((link, idx) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-3xl font-bold tracking-tight transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 block",
                                            pathname === link.href ? "text-zinc-900 dark:text-white" : "text-zinc-400 dark:text-zinc-500"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="mt-auto pb-12 opacity-50 text-sm font-medium text-zinc-400">
                            &copy; {new Date().getFullYear()} Rodney Gitonga.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
