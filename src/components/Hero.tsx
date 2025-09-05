'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Sidebars from './Sidebar'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white bg-[#0b0f1a] overflow-hidden">
      <Sidebars />

      <div className="absolute inset-0 z-0">
        <motion.img
          src="/react.png"
          alt="React"
          className="absolute top-10 left-12 w-32 opacity-40 pointer-events-none"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
        />
        <motion.img
          src="/react.png"
          alt="React"
          className="absolute bottom-[10%] right-[24%] w-32 opacity-40 pointer-events-none"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
        />
        <motion.img
          src="/js.png"
          alt="JavaScript"
          className="absolute top-[10%] right-[30%] w-32 opacity-40 pointer-events-none"
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
        />
        <motion.img
          src="/js.png"
          alt="JavaScript"
          className="absolute bottom-10 left-[30%] w-32 opacity-40 pointer-events-none"
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
        />
        <motion.img
          src="/ts.png"
          alt="TypeScript"
          className="absolute top-[20%] left-[18%] w-32 opacity-40 pointer-events-none"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
        />
        <motion.img
          src="/ts.png"
          alt="TypeScript"
          className="absolute bottom-[25%] right-24 w-32 opacity-40 pointer-events-none"
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
        />
        <motion.img
          src="/python.png"
          alt="Python"
          className="absolute top-[22%] right-[5%] w-32 opacity-40 pointer-events-none"
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
        />
        <motion.img
          src="/python.png"
          alt="Python"
          className="absolute bottom-[25%] left-[5%] w-32 opacity-40 pointer-events-none"
          initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <p className="text-xl text-green-400 font-mono tracking-widest uppercase">
          hi 👋, my name is
        </p>
        <h1 className="text-6xl font-extrabold mt-2 text-white leading-tight">
          Pranav Kolhe.
        </h1>
        <h2 className="text-2xl text-gray-400 mt-3 font-medium">
          Full Stack Developer • AI Engineer • Data Analyst
        </h2>
        <p className="mt-6 text-gray-100 text-lg leading-relaxed">
          I’m a software engineer based in Los Angeles, focused on building scalable products, automating workflows, and applying AI to real-world problems. 
          I specialize in full stack development and cloud infrastructure.        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => window.location.href = 'mailto:pranavko12@gmail.com'}
            className="px-8 py-3 border-2 border-green-400 text-green-400 font-semibold rounded hover:bg-green-400 hover:text-black transition duration-300"
          >
            Get In Touch 👋
          </button>
          <Link
            href="/images/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition duration-300"
          >
            RESUME 📄
          </Link>
        </div>
      </div>
    </section>
  )
}
