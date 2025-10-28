export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cosmic-dark/80 border-b border-cosmic-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
            <div>
              <h1 className="text-xl font-bold spotlight-text">
                Galactic Royalties
              </h1>
              <p className="text-xs text-gray-400">Friends Showcase</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-cosmic-gold transition-colors">
              Home
            </a>
            <a href="#constellation" className="text-gray-300 hover:text-cosmic-gold transition-colors">
              Friends
            </a>
            <a href="#spotlight" className="text-gray-300 hover:text-cosmic-gold transition-colors">
              Spotlight
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}