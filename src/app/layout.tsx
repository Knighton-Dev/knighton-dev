import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knighton Dev LLC | Software Development & Consulting",
  description:
    "Expert software development consulting services. Custom solutions, cloud architecture, and full-stack development for businesses of all sizes.",
  keywords: [
    "software development",
    "consulting",
    "full-stack development",
    "cloud architecture",
    "contractor",
    "freelance developer",
  ],
  authors: [{ name: "Knighton Dev LLC" }],
  openGraph: {
    title: "Knighton Dev LLC | Software Development & Consulting",
    description:
      "Expert software development consulting services. Custom solutions, cloud architecture, and full-stack development.",
    url: "https://knighton.dev",
    siteName: "Knighton Dev LLC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knighton Dev LLC | Software Development & Consulting",
    description:
      "Expert software development consulting services. Custom solutions, cloud architecture, and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white min-h-screen flex flex-col`}
        style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}
      >
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
