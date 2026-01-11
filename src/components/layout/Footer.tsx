// "use cache";

import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

// Custom Dev.to Icon since it's not in Lucide
const DevToIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 448 512"
        fill="currentColor"
        className={className}
    >
        <path d="M120.12 208.29c-3.88-2.9-7.77-4.35-13.2-4.35H51.6v114.2c0 6.3 4.4 11.6 10.1 12.3 1.2.2 3.6.2 5.2.2 12.7 0 24.9-3.84 33.9-9.8 8.9-6.3 14.5-17.5 14.5-33.8v-72.3c-.9-9.2-8.3-25.2-15.18-6.45zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.8-11.6 37.3-30.7 48.6-18.4 10.9-40.8 13.9-65.7 13.9-10 0-16.1-2.2-22.6-5.4V196.4c6.6-3.2 12.6-5.4 22.6-5.4 24.9 0 47.3 3 65.7 13.9 19.1 11.3 30.7 29.8 30.7 48.6v37.69zM240.2 191h45.2v105h-45.2V191zm157.8 82c2.4 15.6-7.8 31.8-23.8 37.7-6 2.2-12.7 3.3-19.6 3.3-17.7 0-33.9-10.4-42.3-27.1-4.8-9.6-7.3-20.7-7.3-32.3s2.5-22.8 7.3-32.3c8.4-16.8 24.6-27.2 42.3-27.2 6.9 0 13.6 1.1 19.6 3.3 16 5.9 26.2 22.1 23.8 37.7l-42 12.9c-2.4-7.4-8.8-12.5-16.5-12.5-11.8 0-21.4 14.9-21.4 33.3 0 18.3 9.6 33.3 21.4 33.3 7.7 0 14.1-5.1 16.5-12.5l42 12.9zM250.2 148h-65.2v192h65.2v-192z" />
    </svg>
);

export async function Footer() {
    return (
        <footer className="py-12 px-8 md:px-24">
            <div className="max-w-7xl mx-auto flex justify-end items-center">
                <div className="flex gap-8 items-center">
                    <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href={personalInfo.social.email} className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                    <a href={personalInfo.social.devto} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <DevToIcon size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
