"use client";

import { education, certifications } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export default function EducationPage() {
    return (
        <div className="min-h-screen pt-32 pb-24 max-w-7xl mx-auto px-8 md:px-24">
            {/* Education Section */}
            <section className="mb-24">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-12 flex items-center gap-4">
                        <GraduationCap className="text-zinc-900 dark:text-white" size={40} /> Education
                    </h1>
                </FadeIn>

                <div className="space-y-8 max-w-4xl border-l border-zinc-200 dark:border-zinc-800 ml-4 pl-8">
                    {education.map((edu, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-white dark:border-zinc-950" />
                                <span className="block text-sm font-mono text-zinc-500 uppercase tracking-widest mb-1">{edu.period}</span>
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{edu.degree}</h3>
                                <div className="text-xl text-zinc-600 dark:text-zinc-400 mt-1">{edu.school}</div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Certifications Section */}
            <section>
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 flex items-center gap-4">
                        <Award className="text-zinc-900 dark:text-white" size={32} /> Licenses & Certifications
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <FadeIn key={idx} delay={idx * 0.05}>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-sm transition-all relative overflow-hidden"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 shadow-sm text-zinc-900 dark:text-white">
                                        <Award size={20} />
                                    </div>
                                    <ExternalLink size={16} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 leading-snug group-hover:underline decoration-zinc-400 underline-offset-4">
                                    {cert.name}
                                </h3>

                                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                                    {cert.issuer}
                                </p>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
