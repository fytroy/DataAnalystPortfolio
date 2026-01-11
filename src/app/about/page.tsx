"use client";

import { experience, personalInfo, skills } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { Download, Briefcase, GraduationCap } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 max-w-7xl mx-auto px-8 md:px-24">
            {/* Bio Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                <FadeIn>
                    <h1 className="text-6xl font-bold tracking-tighter mb-8">About Me</h1>
                    <div className="prose dark:prose-invert text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
                        {personalInfo.about.split('\n').map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                    <div className="mt-8 flex gap-4">
                        <a
                            href="/Rodney_Gitonga_CV.pdf"
                            download="Rodney_Gitonga_CV.pdf"
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors dark:bg-white dark:text-zinc-900"
                        >
                            <Download size={18} /> Download CV
                        </a>
                    </div>
                </FadeIn>

                {/* Soft Skills & Interests (Storytelling) */}
                <FadeIn delay={0.2} className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-2xl font-bold mb-6">Beyond Code</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-4 items-start">
                            <span className="w-2 h-2 mt-2 rounded-full bg-zinc-400 shrink-0" />
                            <div>
                                <strong className="block text-zinc-900 dark:text-white">Mentorship</strong>
                                <p className="text-zinc-500">I actively mentor junior developers, helping them bridge the gap between theory and real-world application.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="w-2 h-2 mt-2 rounded-full bg-zinc-400 shrink-0" />
                            <div>
                                <strong className="block text-zinc-900 dark:text-white">Photography</strong>
                                <p className="text-zinc-500">Capturing moments helps me appreciate composition and detail—skills I translate into UI design.</p>
                            </div>
                        </li>
                    </ul>
                </FadeIn>
            </section>

            {/* Experience Timeline */}
            <section className="mb-24">
                <FadeIn>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <Briefcase className="text-zinc-400" /> Professional Experience
                    </h2>
                </FadeIn>

                <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 space-y-12 pl-8 pb-4">
                    {experience.map((job, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950" />
                                <span className="block text-sm font-mono text-zinc-500 uppercase tracking-widest mb-1">{job.period}</span>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{job.role}</h3>
                                {
                                    (job as any).link ? (
                                        <a
                                            href={(job as any).link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-500 font-medium mb-4 block hover:text-zinc-900 dark:hover:text-white transition-colors hover:underline"
                                        >
                                            {job.company}
                                        </a>
                                    ) : (
                                        <span className="text-zinc-500 font-medium mb-4 block">{job.company}</span>
                                    )
                                }
                                <ul className="list-disc list-outside ml-4 space-y-1 text-zinc-600 dark:text-zinc-400">
                                    {job.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Skills Grid */}
            <section>
                <FadeIn>
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <GraduationCap className="text-zinc-400" /> Technical Arsenal
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(skills).map(([category, items], idx) => (
                        <FadeIn key={category} delay={idx * 0.1}>
                            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 transition-colors">
                                <h3 className="text-lg font-bold capitalize mb-4 text-zinc-900 dark:text-white">{category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map(skill => (
                                        <span key={skill} className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
