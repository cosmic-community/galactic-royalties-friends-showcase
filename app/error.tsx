'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-cosmic-gradient flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-6xl mb-6">⚠️</div>
        <h2 className="text-3xl font-bold spotlight-text mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-300 mb-8">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className="cosmic-button"
        >
          Try again
        </button>
      </div>
    </div>
  )
}