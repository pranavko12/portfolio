'use client';

import { useState, useEffect } from 'react';
import ImageModal from '@/components/ImageModal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMeTabs from '@/components/AboutMeTabs';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    const hideTimer = setTimeout(() => {
      setShowLoader(false);
      document.body.style.overflow = 'auto';
    }, 2600);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (showLoader) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <motion.img
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
            initial={{ scale: 0.95, opacity: 1 }}
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [1, 0.7, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
          <p className="text-lg tracking-wide">Loading My Portfolio...</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      {/* overflow-x-hidden prevents small horizontal scroll on mobile */}
      <main className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-24 bg-[#0b0f1a] text-white overflow-x-hidden">
        {/* About Me Section */}
        <div id="about" className="w-full mt-16 scroll-mt-24">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="max-w-6xl w-full px-2 sm:px-4 flex flex-col md:flex-row items-center gap-10 md:gap-12"
          >
            <div className="flex-1 text-gray-300">
              <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-white">About Me</h2>
              <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10">
                Know more about my journey in the tech world:
              </p>
              <AboutMeTabs />
            </div>

            <div
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <img
                src="/images/dp.jpg"
                alt="Pranav Kolhe"
                className="w-full h-full object-cover relative z-10 rounded-xl"
              />
              <div className="absolute top-2 left-2 w-full h-full border-2 border-cyan-400 z-0 rounded-xl shadow-[0_0_35px_rgba(34,211,238,0.7)]" />
            </div>
            <ImageModal isOpen={showModal} onClose={() => setShowModal(false)} />
          </motion.section>
        </div>

        {/* Experience Section */}
        <motion.div
          id="experience"
          className="mt-24 w-full flex justify-center scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <ExperienceTimeline />
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-20 max-w-4xl w-full"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center text-white">Featured Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full stack app with authentication, checkout, and session tracking.',
              },
              {
                title: 'Weather App',
                description: 'Real-time weather via Tomorrow.io + Google Maps, built with MERN.',
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 border border-gray-700 rounded p-4 shadow"
              >
                <h3 className="text-lg font-bold mb-1">{proj.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{proj.description}</p>
                <Link
                  href="https://github.com/pranavko12"
                  className="text-blue-400 text-sm hover:underline"
                >
                  GitHub →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-20 mb-24 text-center max-w-xl"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Contact Me</h2>
          <p className="mb-4 text-gray-300">
            Want to connect or collaborate? Reach out via email or LinkedIn.
          </p>
          <div className="flex justify-center gap-6 text-blue-400 text-lg">
            <Link href="mailto:pranavko12@gmail.com" className="hover:underline">
              Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/pranavkolhee/"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </Link>
            <Link href="https://github.com/pranavko12" target="_blank" className="hover:underline">
              GitHub
            </Link>
          </div>
        </motion.section>
      </main>
    </>
  );
}
 