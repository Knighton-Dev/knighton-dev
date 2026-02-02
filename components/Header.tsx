"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-forest-800/30 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-forest-400">
            Knighton Dev
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-300 hover:text-forest-400 transition-colors">
              Services
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-forest-400 transition-colors">
              Our Approach
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-forest-400 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="px-4 py-2 bg-forest-600 hover:bg-forest-500 text-white rounded-lg transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
