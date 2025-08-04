export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[var(--darker)] to-[var(--dark-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--cyber-purple)] bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the FireHawk from every angle - from construction details to flight captures
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Main Featured Image */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="group relative overflow-hidden rounded-xl glass-effect h-96 lg:h-full">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="FireHawk in flight" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">Flight Mode</h3>
                  <p className="text-gray-300">Autonomous navigation in action</p>
                </div>
              </div>
            </div>
          </div>

          {/* Close-up of drone components */}
          <div className="group relative overflow-hidden rounded-xl glass-effect h-48">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Drone components closeup" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold">Hardware</h3>
              </div>
            </div>
          </div>

          {/* Aerial photography sample */}
          <div className="group relative overflow-hidden rounded-xl glass-effect h-48">
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Aerial view captured by drone" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold">Aerial Shot</h3>
              </div>
            </div>
          </div>

          {/* Drone with controller setup */}
          <div className="group relative overflow-hidden rounded-xl glass-effect h-48">
            <img 
              src="https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Drone controller and setup" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold">Control System</h3>
              </div>
            </div>
          </div>

          {/* Technology components */}
          <div className="group relative overflow-hidden rounded-xl glass-effect h-48">
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Advanced technology components" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold">Tech Components</h3>
              </div>
            </div>
          </div>

          {/* Night flight capabilities */}
          <div className="group relative overflow-hidden rounded-xl glass-effect h-48">
            <img 
              src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Drone night flight with LED lights" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold">Night Mode</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-[var(--cyber-blue)] mb-2">500+</div>
            <div className="text-gray-400">Flight Hours</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-[var(--cyber-purple)] mb-2">1TB</div>
            <div className="text-gray-400">Footage Captured</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-[var(--cyber-blue)] mb-2">100+</div>
            <div className="text-gray-400">Missions</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-[var(--cyber-purple)] mb-2">99.9%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
