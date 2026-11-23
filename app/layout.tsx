import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Felix Ryan",
  description: "Backend Developer and Data Engineer passionate about building reliable systems, transforming data, and developing practical technology solutions. Explore my projects, skills, and experience.",
  keywords: "Backend Developer, Data Engineer, Machine Learning, Python, Node.js, Portfolio",
  authors: [{ name: "Felix Ryan" }],
    robots: "index, follow",
  openGraph: {
    title: "Felix Ryan | Backend Developer & Data Engineer",
    description: "Backend Developer and Data Engineer passionate about building reliable systems and transforming data.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[#0a192f]">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
