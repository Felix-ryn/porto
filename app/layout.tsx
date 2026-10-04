import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Stack Developer & Data Engineer | Portfolio",
  description: "Professional portfolio showcasing full-stack development, data engineering, ML, SEO expertise, and database optimization. Projects, education, skills, and more.",
  keywords: "Full Stack Developer, Data Engineer, Machine Learning, SEO, Portfolio",
  authors: [{ name: "Your Name" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
