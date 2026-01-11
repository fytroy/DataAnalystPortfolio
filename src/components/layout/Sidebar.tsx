"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, FolderOpen, User, Mail, ChevronRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Overview", icon: LayoutGrid },
    { href: "/projects", label: "Case Studies", icon: FolderOpen },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
];

export function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const pathname = usePathname();

    return (
        <motion.aside
            initial={{ width: "64px" }}
            animate={{ width: isExpanded ? "256px" : "64px" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onHoverStart={() => setIsExpanded(true)}
            onHoverEnd={() => setIsExpanded(false)}
            className="fixed left-0 top-0 z-50 h-screen border-r border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80"
        >
            <div className="flex h-full flex-col justify-between py-8">
                {/* Top Section */}
                <div className="flex flex-col gap-8">
                    {/* Logo / Brand */}
                    <div className="flex items-center justify-center h-12">
                        <div className="flex items-center justify-center size-10 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                            <Zap size={20} fill="currentColor" />
                        </div>
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="ml-3 text-lg font-bold tracking-tight whitespace-nowrap"
                                >
                                    R.Gitonga
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-2 px-2">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "group flex items-center h-12 rounded-xl px-3 transition-colors relative",
                                        isActive
                                            ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white"
                                            : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                                    )}
                                >
                                    <link.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="ml-3 text-sm font-medium whitespace-nowrap"
                                            >
                                                {link.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>

                                    {isActive && !isExpanded && (
                                        <motion.div
                                            layoutId="active-indicator"
                                            className="absolute left-0 w-1 h-6 bg-zinc-900 dark:bg-white rounded-r-full"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom Section (Theme Toggle will go here generally, but we might place it separately) */}
                <div className="px-2 flex justify-center">
                    {/* Can add footer items or small details here */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-xs text-zinc-400 text-center"
                            >
                                © 2026
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.aside>
    );
}
