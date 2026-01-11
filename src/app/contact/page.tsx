"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import { FadeIn } from "@/components/ui/FadeIn";
import { Loader2 } from "lucide-react";

export default function ContactPage() {
    const [state, action, isPending] = useActionState(submitContact, {
        success: false,
        message: "",
        errors: {},
    });

    return (
        <div className="min-h-screen pt-32 pb-24 max-w-2xl mx-auto px-8">
            <FadeIn>
                <h1 className="text-6xl font-bold tracking-tighter mb-6">Get in Touch</h1>
                <p className="text-xl text-zinc-500 mb-12">
                    Interested in working together? Drop me a line.
                </p>
            </FadeIn>

            <FadeIn delay={0.2}>
                <form action={action} className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="w-full sm:w-1/2 p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                            placeholder="Rodney Gitonga"
                        />
                        {state?.errors?.name && (
                            <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                            placeholder="rodney@example.com"
                        />
                        {state?.errors?.email && (
                            <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            required
                            className="w-full p-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                        {state?.errors?.message && (
                            <p className="text-red-500 text-sm">{state.errors.message[0]}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="animate-spin" size={18} /> Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>

                    {state?.message && (
                        <p className={`text-sm mt-4 ${state.success ? 'text-green-600' : 'text-red-600'}`}>
                            {state.message}
                        </p>
                    )}
                </form>
            </FadeIn>
        </div>
    );
}
