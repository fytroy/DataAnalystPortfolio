import { personalInfo, projects } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import Link from "next/link";

import { ArrowRight, Github, ExternalLink, Linkedin, Instagram, Mail } from "lucide-react";

// Custom Dev.to Icon since it's not in Lucide
const DevToIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.74-.03c-.63.07-1.43-.07-1.43-1.03V8.53h-1.3v5.75c0 .76.1.99.6 1.25.46.24 1.22.24 1.7.01.52-.25.59-.44.59-1.39V8.53h-1.3v5.67c0 .54-.03.73-.13.82-.12.11-.34.16-.62.11l-.11-.03zM20 15v-1.1h-2.35v-1.32H20v-1.1h-2.35v-1.11H20V9.25h-3.76v6.1H20z" />
  </svg>
);

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] px-8 md:px-24 max-w-7xl mx-auto w-full gap-12">
        <div className="flex-1 flex flex-col justify-center">
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-6">
              {personalInfo.name}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-xl md:text-2xl font-normal text-zinc-600 dark:text-zinc-400 max-w-xl mb-10 leading-relaxed">
              {personalInfo.shortBio}
            </h2>
          </FadeIn>

          <FadeIn delay={0.3} className="flex gap-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View Case Studies <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 text-zinc-600 font-medium hover:bg-zinc-50 transition-colors dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
            >
              Contact Me
            </Link>
          </FadeIn>

          <FadeIn delay={0.4} className="flex gap-6 mt-12">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href={personalInfo.social.email} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Mail size={24} />
            </a>
            <a href={personalInfo.social.devto} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <DevToIcon size={24} />
            </a>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="flex-1 w-full max-w-md md:max-w-xl relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
          {/* Using standard img for simplicity with local file, Next/Image could also be used but requires sizing */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile-pic.jpg"
            alt="Rodney Gitonga"
            className="object-cover w-full h-full"
          />
        </FadeIn>
      </section>

      {/* Featured Projects Grid */}
      <section className="px-8 md:px-24 pb-24 max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="flex items-end justify-between mb-12 border-b border-zinc-200 pb-4 dark:border-zinc-800">
            <h3 className="text-xl font-medium tracking-tight">Selected Work</h3>
            <Link href="/projects" className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              View All Projects &rarr;
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <FadeIn key={project.title} delay={idx * 0.1}>
              <div className="group relative flex flex-col h-full bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">{project.category}</span>
                    <div className="flex gap-2">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="text-2xl font-semibold mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 text-xs rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      < ExperienceSection />

      {/* Skills Section */}
      < SkillsSection />
    </div >
  );
}
