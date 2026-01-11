"use client";

import { skillsRadar, skillsRich } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { BarChart3, Code2, Database, Cloud, Workflow, FileSpreadsheet, Star } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Skills Grid - takes up 1 col */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    {/* Bar Chart - takes up 1 col */}
                    <div>
                        <FadeIn delay={0.4}>
                            <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-center h-full min-h-[400px]">
                                <h3 className="text-xl font-bold text-white mb-6 px-4">Proficiency Levels</h3>
                                <div className="w-full h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            layout="vertical"
                                            data={skillsRadar}
                                            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                                        >
                                            <XAxis type="number" domain={[0, 100]} hide />
                                            <YAxis
                                                dataKey="subject"
                                                type="category"
                                                tick={{ fill: '#e4e4e7', fontSize: 13, fontWeight: 500 }}
                                                width={100}
                                                axisLine={false}
                                                tickLine={false}
                                            />
                                            <Tooltip
                                                cursor={{ fill: '#27272a' }}
                                                contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }}
                                            />
                                            <Bar dataKey="A" fill="#3b82f6" radius={4} barSize={20} background={{ fill: '#27272a', radius: 4 }} />
                                        </BarChart>
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
