export default function Loading() {
  return (
    <div className="min-h-screen bg-cosmic-gradient flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-cosmic-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl text-gray-300">Loading the cosmos...</p>
      </div>
    </div>
  )
}