'use client';

import { motion } from 'framer-motion';

const internships = [
  {
    title: 'Software Developer Intern',
    company: 'Appraise AI',
    duration: 'Mar 2025 – Present',
    location: 'Los Angeles, CA',
    url: 'https://www.appraisecorp.com/',
  },
  {
    title: 'R&D Intern',
    company: 'Techspeak Technologies LLP',
    duration: 'May 2022 – Jul 2022',
    location: 'India',
    url: 'https://techspeak.com/',
  },
];

export default function ExperienceTimeline() {
  return (
    <div id="experience" className="w-full max-w-3xl mx-auto px-4 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>

      <div className="relative border-l-2 border-gray-700 pl-6">
        {internships.map((intern, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 relative"
          >
            <div className="absolute -left-3 top-1 w-6 h-6 bg-cyan-500 rounded-full border-2 border-white shadow" />
            <div className="bg-gray-900 p-5 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold text-white">{intern.title}</h3>
              <a
                href={intern.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 font-medium hover:underline"
              >
                {intern.company}
              </a>
              <p className="text-sm text-gray-400">{intern.duration} • {intern.location}</p>
              <p className="text-sm text-gray-300 mt-2 italic">Click to expand for more details.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
