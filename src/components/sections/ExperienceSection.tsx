"use client";

import { useRef } from "react";
import { experience } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section className="py-24 overflow-hidden" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-8 md:px-24 mb-12">
                <FadeIn>
                    <div className="flex items-end justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-2">Experience</h2>
                            <p className="text-zinc-500 max-w-xl">
                                Professional journey and career timeline.
                            </p>
                        </div>
                        <Link href="/about" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors whitespace-nowrap mb-1">
                            View Full Timeline &rarr;
                        </Link>
                    </div>
                </FadeIn>
            </div>

            {/* Horizontal Scroll / Grid Layout */}
            <div className="max-w-7xl mx-auto px-8 md:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experience.map((job, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="group h-full p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-lg relative overflow-hidden">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white">
                                        <Briefcase size={24} />
                                    </div>
                                    <Link href="/about" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{job.role}</h3>
                                    <div className="flex items-center gap-2 text-sm text-zinc-500 mb-4">
                                        {(job as any).link ? (
                                            <a
                                                href={(job as any).link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors hover:underline"
                                            >
                                                {job.company}
                                            </a>
                                        ) : (
                                            <span className="font-semibold text-zinc-700 dark:text-zinc-300">{job.company}</span>
                                        )}
                                        <span>•</span>
                                        <span className="px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs">
                                            {job.period}
                                        </span>
                                    </div>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                                        {job.description[0]} {/* Showing first point as summary, or join them */}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 mt-auto">
                                    <Link href="/about" className="flex justify-between items-center w-full group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                        <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">View Details</span>
                                        <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>


            </div>
        </section>
    );
}
