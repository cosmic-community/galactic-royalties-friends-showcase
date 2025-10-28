'use client'

import { useState } from 'react'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Search functionality can be implemented here
    console.log('Searching for:', searchTerm)
  }
  
  return (
    <div className="max-w-2xl mx-auto mb-16">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search for friends in the cosmos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 bg-cosmic-navy/50 border border-cosmic-gold/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cosmic-gold transition-colors"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold-gradient text-cosmic-dark font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
        >
          Search
        </button>
      </form>
    </div>
  )
}