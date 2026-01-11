"use client";

import { skillsRadar, skillsRich } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { BarChart3, Code2, Database, Cloud, Workflow, FileSpreadsheet, Star } from "lucide-react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

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

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Skills Grid - takes up 3 cols */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillsRich.map((skill, idx) => {
                            const Icon = iconMap[skill.icon] || Code2;
                            return (
                                <FadeIn key={skill.name} delay={idx * 0.1}>
                                    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 text-zinc-900 dark:text-white">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 h-10">
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

                    {/* Radar Chart - takes up 2 cols */}
                    <div className="lg:col-span-2">
                        <FadeIn delay={0.4}>
                            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 aspect-square flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-900 to-zinc-900" />
                                <div className="relative w-full h-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsRadar}>
                                            <PolarGrid stroke="#3f3f46" />
                                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#a1a1aa', fontSize: 12 }} />
                                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                            <Radar
                                                name="Skills"
                                                dataKey="A"
                                                stroke="#3b82f6"
                                                strokeWidth={2}
                                                fill="#3b82f6"
                                                fillOpacity={0.3}
                                            />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
