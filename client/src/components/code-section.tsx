import { Github, Download, Star, GitFork, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CodeSection() {
  return (
    <section id="code" className="py-20 bg-gradient-to-b from-[var(--dark-surface)] to-[var(--darker)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--cyber-purple)] bg-clip-text text-transparent">
            Open Source
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the complete source code, documentation, and contribute to the project development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="gradient-border">
            <div className="gradient-border-content p-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                {/* GitHub Logo and Stats */}
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-2xl flex items-center justify-center">
                    <Github className="w-16 h-16" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-center lg:justify-start space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--cyber-blue)] flex items-center gap-1">
                          <Star className="w-5 h-5" />
                          1.2k
                        </div>
                        <div className="text-sm text-gray-400">Stars</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--cyber-purple)] flex items-center gap-1">
                          <GitFork className="w-5 h-5" />
                          234
                        </div>
                        <div className="text-sm text-gray-400">Forks</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--cyber-blue)] flex items-center gap-1">
                          <Bug className="w-5 h-5" />
                          45
                        </div>
                        <div className="text-sm text-gray-400">Issues</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Repository Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">FireHawk</h3>
                  <p className="text-gray-300 mb-6">
                    Complete source code for the FireHawk autonomous drone system. 
                    Includes flight control software, navigation algorithms, video streaming protocols, 
                    and hardware interface libraries.
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-[var(--cyber-blue)]">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">Python</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">C++</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">ROS2</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">OpenCV</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">MAVLink</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">React</span>
                    </div>
                  </div>

                  {/* Repository Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></div>
                      <span className="text-gray-300">Complete flight control system</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[var(--cyber-purple)] rounded-full"></div>
                      <span className="text-gray-300">Autonomous navigation algorithms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[var(--cyber-blue)] rounded-full"></div>
                      <span className="text-gray-300">Real-time video streaming</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[var(--cyber-purple)] rounded-full"></div>
                      <span className="text-gray-300">Ground control station software</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 gradient-border group hover:scale-105 transition-all duration-300">
                      <Button 
                        asChild
                        className="gradient-border-content w-full px-6 py-3 flex items-center justify-center space-x-2 group-hover:bg-gradient-to-r group-hover:from-[var(--cyber-blue)]/10 group-hover:to-[var(--cyber-purple)]/10 transition-all duration-300 bg-transparent hover:bg-transparent border-0"
                      >
                        <a href="https://github.com/username/firehawk" target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                          <span className="font-semibold">View Repository</span>
                        </a>
                      </Button>
                    </div>
                    
                    <Button className="flex-1 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span className="font-semibold">Download</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Code Preview */}
          <div className="mt-12 glass-effect p-6 rounded-xl">
            <h4 className="text-lg font-semibold mb-4 text-[var(--cyber-blue)]">Quick Code Preview</h4>
            <div className="bg-black/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500"># Flight Control System - Autonomous Navigation</div>
              <div><span className="text-[var(--cyber-blue)]">class</span> <span className="text-white">AutonomousFlightController</span><span className="text-gray-300">:</span></div>
              <div className="ml-4">
                <div><span className="text-[var(--cyber-blue)]">def</span> <span className="text-yellow-400">__init__</span><span className="text-gray-300">(self, gps_module, camera_module):</span></div>
                <div className="ml-4">
                  <div><span className="text-white">self.gps</span> <span className="text-gray-300">=</span> <span className="text-white">gps_module</span></div>
                  <div><span className="text-white">self.camera</span> <span className="text-gray-300">=</span> <span className="text-white">camera_module</span></div>
                  <div><span className="text-white">self.waypoints</span> <span className="text-gray-300">=</span> <span className="text-gray-300">[]</span></div>
                </div>
                <br />
                <div><span className="text-[var(--cyber-blue)]">def</span> <span className="text-yellow-400">navigate_to_waypoint</span><span className="text-gray-300">(self, target):</span></div>
                <div className="ml-4">
                  <div><span className="text-gray-500"># Advanced pathfinding algorithm</span></div>
                  <div><span className="text-white">current_pos</span> <span className="text-gray-300">=</span> <span className="text-white">self.gps.get_position()</span></div>
                  <div><span className="text-[var(--cyber-blue)]">return</span> <span className="text-white">self.calculate_optimal_path</span><span className="text-gray-300">(current_pos, target)</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
