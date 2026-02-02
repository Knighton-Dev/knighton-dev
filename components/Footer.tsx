export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-forest-800/30 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Knighton Dev LLC. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/probablynotian" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-forest-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:ian@knighton.dev" 
              className="text-gray-400 hover:text-forest-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
