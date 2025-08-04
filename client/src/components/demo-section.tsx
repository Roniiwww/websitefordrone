export default function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-[var(--dark-surface)] to-[var(--darker)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--cyber-purple)] bg-clip-text text-transparent">
            Live Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch the FireHawk in action - autonomous flight, real-time streaming, and advanced maneuvers
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="gradient-border">
            <div className="gradient-border-content p-4">
              <div className="relative aspect-video rounded-lg overflow-hidden glass-effect">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="FireHawk Demo Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          
          {/* Video Description */}
          <div className="mt-8 glass-effect p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">Demo Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></div>
                  <span>Autonomous takeoff and landing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--cyber-purple)] rounded-full"></div>
                  <span>GPS waypoint navigation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></div>
                  <span>Real-time video streaming</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--cyber-purple)] rounded-full"></div>
                  <span>Obstacle avoidance system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></div>
                  <span>Emergency protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--cyber-purple)] rounded-full"></div>
                  <span>Advanced stabilization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
