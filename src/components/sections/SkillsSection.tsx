"use client";

import { skillsRich } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { BarChart3, Code2, Database, Cloud, Workflow, FileSpreadsheet, Star } from "lucide-react";

const iconMap: any = {
    BarChart3: BarChart3,
    Code2: Code2,
    Database: Database,
    Cloud: Cloud,
    Workflow: Workflow,
    FileSpreadsheet: FileSpreadsheet,
};

export function SkillsSection() {
    return (
        <section className="py-24 bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="max-w-7xl mx-auto px-8 md:px-24">
                <FadeIn>
                    <div className="flex items-end justify-between border-b border-zinc-200 pb-4 mb-12 dark:border-zinc-800">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-2">Skills</h2>
                            <p className="text-zinc-500 max-w-xl">
                                Key skills that define my professional identity.
                            </p>
                        </div>
                        <a href="/about" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors whitespace-nowrap mb-1">
                            View All Skills &rarr;
                        </a>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsRich.map((skill, idx) => {
                        const Icon = iconMap[skill.icon] || Code2;
                        return (
                            <FadeIn key={skill.name} delay={idx * 0.1}>
                                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all h-full">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 text-zinc-900 dark:text-white">
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 min-h-[40px]">
                                        {skill.description}
                                    </p>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className={i < skill.rating ? "fill-amber-400 text-amber-400" : "text-zinc-200 dark:text-zinc-700"}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
