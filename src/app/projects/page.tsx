"use client";

import { projects } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function ProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax effect: The "image" (or card visualization) moves closer/further relative to scroll
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const springY = useSpring(y, { stiffness: 100, damping: 30 });

    return (
        <section ref={ref} className="group relative grid grid-cols-1 lg:grid-cols-2 gap-12 py-24 items-center">
            {/* Text Content - Static(ish) */}
            <div className={`flex flex-col gap-6 ${index % 2 === 1 ? 'lg:order-2' : ''} px-8`}>
                <FadeIn>
                    <span className="font-mono text-sm text-zinc-500 tracking-widest uppercase">
                        {String(index + 1).padStart(2, '0')} — {project.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                        {project.title}
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-md leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 rounded-full border border-zinc-200 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                                {t}
                            </span>
                        ))}
                    </div>
                    {project.link && (
                        <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-lg font-medium underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-all">
                            View Project <ArrowUpRight size={18} />
                        </Link>
                    )}
                </FadeIn>
            </div>

            {/* Parallax Card Visual */}
            <div className={`relative h-[400px] w-full px-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <motion.div
                    style={{ y: springY }}
                    className="absolute inset-0 mx-8 bg-zinc-100 dark:bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
                >
                    {project.image ? (
                        <div className="relative w-full h-full">
                            {/* Overlay gradient for better text contrast if needed, or just aesthetic style */}
                            <div className="absolute inset-0 bg-black/10 dark:bg-black/20 z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
                            <span className="font-mono text-9xl font-bold opacity-5 select-none text-zinc-900 dark:text-white">
                                {project.title[0]}
                            </span>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 max-w-7xl mx-auto">
            <div className="px-8 md:px-24 mb-24">
                <FadeIn>
                    <h1 className="text-6xl font-bold tracking-tighter mb-6">Selected Works</h1>
                    <p className="text-xl text-zinc-500 max-w-2xl">
                        A collection of case studies focusing on Data Analytics, BI, and Software Engineering.
                    </p>
                </FadeIn>
            </div>

            <div className="flex flex-col">
                {projects.map((project, idx) => (
                    <ProjectItem key={project.title} project={project} index={idx} />
                ))}
            </div>

            {/* Archive Section */}
            <div className="mt-32 px-8 md:px-24">
                <FadeIn>
                    <h2 className="text-3xl font-bold tracking-tight mb-12">Other Noteworthy Projects</h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Dynamic import to avoid circular dep issues if any, but standard import is fine */}
                    {require("@/lib/data").archiveProjects?.map((project: any, idx: number) => (
                        <FadeIn key={idx} delay={idx * 0.05}>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-semibold group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300" />
                                </div>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t: string) => (
                                        <span key={t} className="text-xs font-mono text-zinc-500 dark:text-zinc-500">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}

