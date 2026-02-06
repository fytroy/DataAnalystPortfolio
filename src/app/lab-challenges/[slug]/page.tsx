"use client";

import { labChallenges } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowLeft, Calendar, Tag, Wrench } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export default function LabChallengeDetail() {
    const params = useParams();
    const slug = params.slug as string;

    const challenge = labChallenges.find(c => c.slug === slug);

    if (!challenge) {
        return notFound();
    }

    return (
        <div className="min-h-screen pt-32 pb-24 max-w-7xl mx-auto px-8 md:px-12">
            <FadeIn>
                <Link
                    href="/lab-challenges"
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors mb-8"
                >
                    <ArrowLeft size={16} /> Back to Challenges
                </Link>

                <div className="mb-16">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300 text-xs font-semibold tracking-wide uppercase">
                            {challenge.category}
                        </span>
                        <div className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                            {challenge.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8 max-w-4xl">
                        {challenge.title}
                    </h1>

                    <div className="flex flex-wrap gap-3">
                        {challenge.tools.map((tool) => (
                            <span key={tool} className="inline-flex items-center px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar / Top Metadata */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
                            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">
                                Challenge Overview
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-semibold text-zinc-500 uppercase mb-2">The Problem</h4>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                        {challenge.problem}
                                    </p>
                                </div>
                                <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
                                <div>
                                    <h4 className="text-xs font-semibold text-zinc-500 uppercase mb-2">My Approach</h4>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                        {challenge.approach}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-3 text-indigo-700 dark:text-indigo-400 font-semibold">
                                <span className="text-xl">💡</span>
                                <h3>Key Lesson</h3>
                            </div>
                            <p className="text-indigo-900 dark:text-indigo-200 italic leading-relaxed">
                                "{challenge.lessons}"
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-lg dark:prose-invert max-w-none 
                            prose-headings:font-bold prose-headings:tracking-tight 
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                            prose-p:leading-relaxed prose-p:text-zinc-600 dark:prose-p:text-zinc-400
                            prose-li:text-zinc-600 dark:prose-li:text-zinc-400
                            prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
                            prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-semibold prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:before:content-none prose-code:after:content-none
                         ">
                            <div dangerouslySetInnerHTML={{ __html: challenge.fullContent || "" }} />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
