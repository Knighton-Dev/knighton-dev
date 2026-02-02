import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knighton Dev LLC | Cloud & Platform Engineering",
  description: "Professional platform, DevOps, and site reliability engineering services. We specialize in cloud migrations, Kubernetes, CI/CD, and infrastructure as code.",
  keywords: ["DevOps", "Platform Engineering", "SRE", "Cloud Migration", "Kubernetes", "Terraform", "AWS", "GCP", "Azure"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased min-h-screen bg-slate-950`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
