'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black/70 border-b border-gray-800 shadow-sm backdrop-blur-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-white hover:text-blue-400 transition">
          Pranav Kolhe
        </Link>
        <div className="space-x-8 text-sm font-medium">
          <Link href="/#about" className="text-white hover:text-blue-400 transition">About</Link>
          <Link href="/#experience" className="text-white hover:text-blue-400 transition">Experience</Link>
          <Link href="/project" className="text-white hover:text-blue-400 transition">Projects</Link>
          <Link href="/contact" className="text-white hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
