import { MapPin, Video, Eye, TrendingUp, Battery, Wifi } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[var(--darker)] to-[var(--dark-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--cyber-purple)] bg-clip-text text-transparent">
            Advanced Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge technology packed into a single autonomous aerial platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          {/* Features List */}
          <div className="space-y-8">
            <div className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced GPS Navigation</h3>
                  <p className="text-gray-400">Precision waypoint navigation with RTK-GPS for centimeter-level accuracy. Supports complex flight patterns and autonomous mission planning.</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--cyber-purple)] to-[var(--cyber-blue)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">HD Video Streaming</h3>
                  <p className="text-gray-400">High-definition video streaming with real-time transmission. Low-latency FPV for immersive flight experience and professional aerial cinematography.</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Obstacle Avoidance</h3>
                  <p className="text-gray-400">Multi-directional sensors with AI-powered collision detection. Advanced SLAM algorithms for safe autonomous navigation in complex environments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-effect p-6 rounded-xl text-center hover:bg-white/5 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-gray-400 mb-4">Maximum speed of 65 km/h with advanced motor control and aerodynamic design</p>
            <div className="text-[var(--cyber-blue)] font-mono font-semibold">65 km/h</div>
          </div>

          <div className="glass-effect p-6 rounded-xl text-center hover:bg-white/5 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--cyber-purple)] to-[var(--cyber-blue)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Battery className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Battery Life</h3>
            <p className="text-gray-400 mb-4">Extended flight time with intelligent power management and fast charging capability</p>
            <div className="text-[var(--cyber-purple)] font-mono font-semibold">45 minutes</div>
          </div>

          <div className="glass-effect p-6 rounded-xl text-center hover:bg-white/5 transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Wifi className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Range</h3>
            <p className="text-gray-400 mb-4">Extended control range with robust signal transmission and automatic return-to-home</p>
            <div className="text-[var(--cyber-blue)] font-mono font-semibold">2 kilometers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
