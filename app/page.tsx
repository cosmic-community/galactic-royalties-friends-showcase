import { getAllFriends } from '@/lib/cosmic'
import { Friend } from '@/types'
import Header from '@/components/Header'
import FriendCard from '@/components/FriendCard'
import SpotlightSection from '@/components/SpotlightSection'
import SearchBar from '@/components/SearchBar'

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const friends = await getAllFriends() as Friend[];
  
  // Find Ashirwad Mule for the spotlight section
  const ashirwadMule = friends.find(friend => 
    friend.slug === 'ashirwad-mule' || 
    friend.metadata.name.toLowerCase().includes('ashirwad')
  );
  
  return (
    <main className="min-h-screen bg-cosmic-gradient">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="spotlight-text">Galactic Royalties</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Celebrating extraordinary individuals who shine like stars in their own unique ways
          </p>
        </section>
        
        {/* Search Bar */}
        <SearchBar />
        
        {/* Friends Grid */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="spotlight-text">Our Constellation</span>
          </h2>
          
          {friends.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              <p className="text-xl">No friends found in the cosmos yet...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {friends.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))}
            </div>
          )}
        </section>
        
        {/* Spotlight Section */}
        {ashirwadMule && (
          <SpotlightSection friend={ashirwadMule} />
        )}
        
        {/* Footer */}
        <footer className="text-center py-12 border-t border-cosmic-gold/20">
          <p className="text-gray-400">
            ✨ Powered by cosmic energy and creative passion ✨
          </p>
        </footer>
      </div>
    </main>
  )
}