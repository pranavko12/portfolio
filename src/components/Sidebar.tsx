'use client'

import Link from 'next/link'
import { Github, Linkedin, Instagram } from 'lucide-react'

export default function Sidebars() {
  return (
    <>
      {/* Left Sidebar – Social Icons */}
      <div className="fixed left-4 bottom-0 flex flex-col items-center z-50 text-white">
        <div className="mb-6 flex flex-col items-center gap-6">
          <Link href="https://github.com/pranavko12" target="_blank">
            <Github className="w-5 h-5 hover:text-blue-400 transition" />
          </Link>
          <Link href="https://linkedin.com/in/pranavkolhee" target="_blank">
            <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
          </Link>
          <Link href="https://www.instagram.com/pranav.1211/" target="_blank">
            <Instagram className="w-5 h-5 hover:text-pink-400 transition" />
          </Link>
        </div>
        <div className="h-32 w-px bg-gray-600" />
      </div>

      {/* Right Sidebar – Email */}
      <div className="fixed right-6 bottom-0 flex flex-col items-center z-50 text-gray-400">
        <div className="mb-6">
          <Link
            href="mailto:pranavko12@gmail.com"
            className="text-xs tracking-widest hover:text-blue-400"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            pranavko12@gmail.com
          </Link>
        </div>
        <div className="h-32 w-px bg-gray-600" />
      </div>
    </>
  )
}
