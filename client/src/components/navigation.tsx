import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl">FireHawk</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-[var(--cyber-blue)] transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-[var(--cyber-blue)] transition-colors duration-300">Gallery</button>
            <button onClick={() => scrollToSection('demo')} className="hover:text-[var(--cyber-blue)] transition-colors duration-300">Demo</button>
            <button onClick={() => scrollToSection('features')} className="hover:text-[var(--cyber-blue)] transition-colors duration-300">Features</button>
            <button onClick={() => scrollToSection('code')} className="hover:text-[var(--cyber-blue)] transition-colors duration-300">Code</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[var(--cyber-blue)] transition-colors duration-300">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-[var(--cyber-blue)] transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left hover:text-[var(--cyber-blue)] transition-colors duration-300">Gallery</button>
            <button onClick={() => scrollToSection('demo')} className="block w-full text-left hover:text-[var(--cyber-blue)] transition-colors duration-300">Demo</button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left hover:text-[var(--cyber-blue)] transition-colors duration-300">Features</button>
            <button onClick={() => scrollToSection('code')} className="block w-full text-left hover:text-[var(--cyber-blue)] transition-colors duration-300">Code</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-[var(--cyber-blue)] transition-colors duration-300">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}
