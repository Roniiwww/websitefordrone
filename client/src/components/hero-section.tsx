import { Play, Camera, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--darker)] via-[var(--dark-surface)] to-[var(--darker)]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--cyber-blue)]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--cyber-purple)]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[var(--cyber-blue)]/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
        <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[var(--cyber-blue)] via-white to-[var(--cyber-purple)] bg-clip-text text-transparent">
          FireHawk
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Life-saving autonomous drone designed for emergency response missions. Equipped with advanced GPS navigation, 
          real-time HD video streaming, and intelligent flight control systems to help save lives in critical situations.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <div className="gradient-border group hover:scale-105 transition-all duration-300">
            <Button 
              onClick={() => scrollToSection('demo')}
              className="gradient-border-content px-8 py-4 flex items-center space-x-2 group-hover:bg-gradient-to-r group-hover:from-[var(--cyber-blue)]/10 group-hover:to-[var(--cyber-purple)]/10 transition-all duration-300 bg-transparent hover:bg-transparent border-0"
            >
              <span className="font-semibold">View Demo</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('gallery')}
            className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <span className="font-semibold">Explore Gallery</span>
            <Camera className="w-5 h-5" />
          </Button>
        </div>

        {/* Technical Specs Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="glass-effect p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[var(--cyber-blue)]">HD</div>
            <div className="text-sm text-gray-400">Video Quality</div>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[var(--cyber-purple)]">45min</div>
            <div className="text-sm text-gray-400">Flight Time</div>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[var(--cyber-blue)]">2km</div>
            <div className="text-sm text-gray-400">Range</div>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[var(--cyber-purple)]">GPS</div>
            <div className="text-sm text-gray-400">Navigation</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-[var(--cyber-blue)]" />
      </div>
    </section>
  );
}
