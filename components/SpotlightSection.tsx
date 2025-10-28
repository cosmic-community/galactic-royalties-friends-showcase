import { Friend } from '@/types'

interface SpotlightSectionProps {
  friend: Friend;
}

export default function SpotlightSection({ friend }: SpotlightSectionProps) {
  const photo = friend.metadata?.photo;
  const name = friend.metadata?.name || friend.title;
  const bio = friend.metadata?.bio || '';
  const contactInfo = friend.metadata?.contact_info;
  
  return (
    <section id="spotlight" className="mb-20 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="spotlight-text">✨ Spotlight Showcase ✨</span>
        </h2>
        <p className="text-xl text-gray-300">
          One in a Million: Celebrating Exceptional Talent
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="cosmic-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo Side */}
            {photo && (
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={`${photo.imgix_url}?w=1000&h=1000&fit=crop&auto=format,compress`}
                    alt={name}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-gradient rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-4xl">⭐</span>
                </div>
              </div>
            )}
            
            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <div className="inline-block px-4 py-2 bg-gold-gradient rounded-full text-cosmic-dark font-bold text-sm mb-4">
                  FEATURED CREATIVE
                </div>
                <h3 className="text-4xl md:text-5xl font-bold spotlight-text mb-4">
                  {name}
                </h3>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                  {bio}
                </p>
              </div>
              
              {contactInfo && (
                <div className="pt-6 border-t border-cosmic-gold/30">
                  <p className="text-cosmic-gold font-medium flex items-center gap-2">
                    <span className="text-2xl">✉️</span>
                    {contactInfo}
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-cosmic-purple/50 rounded-full text-sm border border-cosmic-gold/30">
                  🎬 Director
                </span>
                <span className="px-4 py-2 bg-cosmic-purple/50 rounded-full text-sm border border-cosmic-gold/30">
                  🎨 Animator
                </span>
                <span className="px-4 py-2 bg-cosmic-purple/50 rounded-full text-sm border border-cosmic-gold/30">
                  🎮 Game Designer
                </span>
                <span className="px-4 py-2 bg-cosmic-purple/50 rounded-full text-sm border border-cosmic-gold/30">
                  ✨ Astrologer
                </span>
                <span className="px-4 py-2 bg-cosmic-purple/50 rounded-full text-sm border border-cosmic-gold/30">
                  🎭 Producer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}