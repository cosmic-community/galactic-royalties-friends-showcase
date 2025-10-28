import { Friend } from '@/types'

interface FriendCardProps {
  friend: Friend;
}

export default function FriendCard({ friend }: FriendCardProps) {
  const photo = friend.metadata?.photo;
  const name = friend.metadata?.name || friend.title;
  const bio = friend.metadata?.bio || '';
  const contactInfo = friend.metadata?.contact_info;
  
  return (
    <article className="cosmic-card group">
      {/* Photo */}
      {photo && (
        <div className="relative w-full h-64 mb-4 rounded-xl overflow-hidden">
          <img
            src={`${photo.imgix_url}?w=600&h=512&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={300}
            height={256}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/80 to-transparent" />
        </div>
      )}
      
      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold spotlight-text">
          {name}
        </h3>
        
        <p className="text-gray-300 line-clamp-4 leading-relaxed">
          {bio}
        </p>
        
        {contactInfo && (
          <div className="pt-4 border-t border-cosmic-gold/20">
            <p className="text-sm text-cosmic-gold">
              📧 {contactInfo}
            </p>
          </div>
        )}
      </div>
    </article>
  )
}