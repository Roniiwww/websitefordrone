import { Mail, MapPin, Briefcase, Linkedin, Twitter, Github } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="py-20 bg-gradient-to-t from-[var(--darker)] to-[var(--dark-surface)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--cyber-purple)] bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300">
            Interested in the project? Let's connect and discuss drone technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Alex Chen</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Aerospace Engineer & Drone Enthusiast passionate about autonomous flight systems. 
                Currently developing next-generation UAV technology for civilian and commercial applications.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Email</div>
                    <div className="text-white">alex.chen@aerodrone.dev</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--cyber-purple)] to-[var(--cyber-blue)] rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Location</div>
                    <div className="text-white">San Francisco, CA</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Available for</div>
                    <div className="text-white">Collaboration & Consulting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl text-center">
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-center space-x-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 group">
                  <Linkedin className="w-5 h-5 text-[var(--cyber-blue)] group-hover:text-white transition-colors" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
                
                <a href="#" className="flex items-center justify-center space-x-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 group">
                  <Twitter className="w-5 h-5 text-[var(--cyber-purple)] group-hover:text-white transition-colors" />
                  <span className="font-semibold">Twitter</span>
                </a>
                
                <a href="#" className="flex items-center justify-center space-x-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-105 group">
                  <Github className="w-5 h-5 text-[var(--cyber-blue)] group-hover:text-white transition-colors" />
                  <span className="font-semibold">GitHub</span>
                </a>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl text-center">
              <h4 className="text-lg font-semibold mb-3">Project Status</h4>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Active Development</span>
              </div>
              <p className="text-sm text-gray-400">Last updated: November 2024</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.254 48.254 0 0 0 12 4.5c-2.291 0-4.344.347-6.75.97m15 0c-.002 0-.006.001-.008.001A47.875 47.875 0 0 0 12 4.5c-2.291 0-4.344.347-6.75.97" />
                </svg>
              </div>
              <span className="font-semibold">FireHawk</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 Alex Chen. Open source project under MIT License.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[var(--cyber-blue)] transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-[var(--cyber-blue)] transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-[var(--cyber-blue)] transition-colors">License</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
