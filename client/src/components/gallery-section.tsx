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

        {/* Gallery Placeholder */}
        <div className="mb-12">
          <div className="glass-effect p-12 rounded-xl text-center">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-[var(--cyber-blue)] to-[var(--cyber-purple)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Gallery Coming Soon</h3>
              <p className="text-gray-300">
                Photos and videos of the FireHawk drone will be added here as the project develops. 
                Check back soon to see the latest progress on this life-saving technology.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-[var(--cyber-blue)] mb-2">50</div>
            <div className="text-gray-400">Flight Hours</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-[var(--cyber-purple)] mb-2">100GB</div>
            <div className="text-gray-400">Footage Captured</div>
          </div>
          <div className="glass-effect p-6 rounded-xl">
            <div className="text-3xl font-bold text-[var(--cyber-blue)] mb-2">90%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
