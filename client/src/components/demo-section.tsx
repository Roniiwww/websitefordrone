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

        {/* Demo Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-12 rounded-xl text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Demo Video Coming Soon</h3>
              <p className="text-gray-300">
                Flight demonstrations and testing footage of the FireHawk drone will be added here as development continues. 
                Check back soon to see the drone in action!
              </p>
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
