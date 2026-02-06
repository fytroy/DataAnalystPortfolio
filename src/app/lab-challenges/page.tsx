"use client";

import { labChallenges } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight, Beaker, Wrench, Lightbulb, Puzzle } from "lucide-react";
import Link from "next/link";

export default function LabChallengesPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 max-w-5xl mx-auto px-8 md:px-12">
            <FadeIn>
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-2xl">
                        <Beaker className="w-8 h-8 text-indigo-500" />
                    </div>
                    <h1 className="text-5xl font-bold tracking-tighter">Lab Challenges</h1>
                </div>
                <p className="text-xl text-zinc-500 max-w-2xl mb-16">
                    A log of technical problems solved, CTFs completed, and practical experiments in data engineering and analytics.
                </p>
            </FadeIn>

            <div className="space-y-12">
                {labChallenges.map((challenge, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                        <div className="group relative bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm hover:shadow-md">

                            {/* Header Section */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 border-b border-zinc-100 dark:border-zinc-800 pb-6">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-3">
                                        {challenge.category}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                                        {challenge.title}
                                    </h3>
                                </div>
                                {challenge.slug && (
                                    <Link
                                        href={`/lab-challenges/${challenge.slug}`}
                                        className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        View Write-up <ArrowUpRight size={16} />
                                    </Link>
                                )}
                            </div>

                            {/* Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                                <div className="space-y-6">
                                    <div className="prose dark:prose-invert">
                                        <div className="flex items-center gap-2 mb-2 text-red-500 dark:text-red-400 font-semibold">
                                            <Puzzle size={18} />
                                            <span>The Problem</span>
                                        </div>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {challenge.problem}
                                        </p>
                                    </div>

                                    <div className="prose dark:prose-invert">
                                        <div className="flex items-center gap-2 mb-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                                            <Wrench size={18} />
                                            <span>The Approach</span>
                                        </div>
                                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {challenge.approach}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-6">
                                        <div className="flex items-center gap-2 mb-4 text-amber-600 dark:text-amber-500 font-semibold">
                                            <Lightbulb size={18} />
                                            <span>Key Lessons</span>
                                        </div>
                                        <p className="text-zinc-600 dark:text-zinc-400 italic">
                                            "{challenge.lessons}"
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">Tools Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {challenge.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="px-3 py-1.5 rounded-md text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
