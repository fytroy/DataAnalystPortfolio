import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodney Gitonga | Data Analytics Portfolio",
  description: "Senior Data Analytics Officer & BI Specialist Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          "min-h-screen bg-background text-foreground font-sans transition-colors duration-300"
        )}
      >
        <Header />
        <main className="min-h-screen w-full relative pt-24">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
