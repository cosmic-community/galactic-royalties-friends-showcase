import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cosmic-gradient flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl mb-6">🌌</div>
        <h2 className="text-3xl font-bold spotlight-text mb-4">
          Lost in Space
        </h2>
        <p className="text-gray-300 mb-8">
          The page you're looking for doesn't exist in this galaxy
        </p>
        <Link href="/" className="cosmic-button inline-block">
          Return Home
        </Link>
      </div>
    </div>
  )
}