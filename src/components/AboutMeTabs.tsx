'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type TabKey = 'started' | 'foundation' | 'internships' | 'masters';

type Paragraph = {
  text: string;
  style?: string;
  link?: string;
};

export default function AboutMeTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>('started');

  const tabOrder: TabKey[] = ['started', 'foundation', 'internships', 'masters'];

  const goToNextTab = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const nextTab = tabOrder[currentIndex + 1];
    if (nextTab) setActiveTab(nextTab);
  };

  const goToPreviousTab = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const prevTab = tabOrder[currentIndex - 1];
    if (prevTab) setActiveTab(prevTab);
  };

  const tabs = [
    { key: 'started', label: '🌱 Where It All Started' },
    { key: 'foundation', label: '📘 Building the Foundation' },
    { key: 'internships', label: '🛠️ Getting My Hands Dirty' },
    { key: 'masters', label: '🚀 Leveling Up in Los Angeles' }
  ];

  const content: Record<TabKey, Paragraph[]> = {
    started: [
      { text: 'CURIOSITY', style: 'text-lg font-bold text-white' },
      {
        text: 'One of the most valuable qualities one can have is curiosity. I’ve always been the kind of person who loves learning new things, no matter how strange they seem. That curiosity really came alive when I started playing Fantasy PL. As someone who loves football, I naturally got hooked. But it wasn’t just the competition that drew me in. It was the data.'
      },
      {
        text: 'I found myself analyzing player stats, building spreadsheets, making predictions, and testing logic. Without even realizing it, I was doing data analysis. Over time, I discovered that I genuinely enjoy this kind of problem solving. I love coding, building systems, and finding patterns in complexity.'
      },
      {
        text: 'What began as a passion for football unexpectedly led me into the world of tech, and I’ve loved it ever since.',
        style: 'text-lg font-bold text-white text-center italic'
      }
    ],
    foundation: [
      { text: 'CAPABILITY', style: 'text-lg font-bold text-white' },
      {
        text: 'My time during undergrad was when curiosity started turning into real capability. I came in with a strong interest in data science, but I quickly found myself exploring much more. I was naturally drawn to software development and its power to turn ideas into working products.'
      },
      {
        text: 'While I honed my data analysis skills through an honors program, my core degree taught me to build and deploy full stack systems. I learned by doing and grew with every project. With each project, I gained more confidence in solving real problems through technology.'
      },
      {
        text: 'It wasn’t just curiosity anymore. I was becoming capable.',
        style: 'text-lg font-bold text-white text-center italic'
      }
    ],
    internships: [
      { text: 'EXPOSURE', style: 'text-lg font-bold text-white' },
      {
        text: 'By building my capability through projects, it was time to enter the real world — "Corporate World".'
      },
      {
        text: 'During the summer after my third year, I joined Techspeak Technologies as a Research and Development intern. This experience felt different.'
      },
      {
        text: 'While I started as an R&D intern, I was later put on Software developer duty. I pitched an idea to the CEO for a new internal product. He liked it, asked me to document it, and present it to the board. It got approved. And just like that, I found myself moving from research into software development. That was my space. I was having a ball.'
      },
      {
        text: 'It was my first step into the real world, and I was ready for more.',
        style: 'text-lg font-bold text-white text-center italic'
      }
    ],
    masters: [
      { text: 'MASTERY', style: 'text-lg font-bold text-white' },
      {
        text: 'Coming to LA, I was ready to build on everything I had learned. USC was intense and demanding, just the kind of challenge I wanted. While subjects like Web Development and Algorithms helped me strengthen my core understanding, others like Information Retrieval and Game Development just kept things fun. Do you believe it? I have a fully functioning game in my portfolio!'
      },
      {
        text: 'With deep academic knowledge and practical skills, I am actively seeking Full Stack opportunities to refine my expertise, build impactful solutions, and contribute meaningfully to your company’s success.'
      },
      {
        text: 'Thanks for taking the time to read my journey. You deserve a reward —',
        style: 'font-bold text-white text-center'
      },
      {
        text: 'PLAY MY GAME 🎮',
        style: 'text-cyan-400 underline font-bold text-center',
        link: 'https://arivas191.github.io/GravityClimb/WebGL%20Builds/20241125.2/index.html'
      }
    ]
  };

  return (
    <div className="max-w-6xl w-full mx-auto mt-10 text-gray-300 md:flex gap-10 px-4">
      <div className="pl-4 h-[524px] flex flex-col justify-start gap-10 relative">
        <div className="absolute left-0 top-0 h-full border-l-2 border-gray-700" />
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as TabKey)}  // ✅ TypeScript-safe fix
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            className={`relative text-left text-xl transition-all duration-300 ${
              activeTab === tab.key
                ? 'text-cyan-400 font-semibold border-l-2 border-cyan-400 pl-4'
                : 'text-gray-400 pl-4 hover:text-cyan-300'
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 h-0.5 w-full bg-cyan-400 rounded"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex-1 mt-8 md:mt-0 space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {content[activeTab].map((para, idx) =>
              para.link ? (
                <a
                  key={idx}
                  href={para.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-base leading-relaxed ${para.style ?? ''}`}
                >
                  {para.text}
                </a>
              ) : (
                <p key={idx} className={`text-base leading-relaxed ${para.style ?? ''}`}>
                  {para.text}
                </p>
              )
            )}
          </motion.div>
        </AnimatePresence>

        <div className={`mt-6 flex ${
          tabOrder.indexOf(activeTab) > 0 && tabOrder.indexOf(activeTab) < tabOrder.length - 1
            ? 'justify-between'
            : 'justify-end'
        }`}>
          {tabOrder.indexOf(activeTab) > 0 && (
            <button
              onClick={goToPreviousTab}
              className="text-sm text-cyan-400 hover:text-cyan-300 underline"
            >
              ← Previous
            </button>
          )}
          {tabOrder.indexOf(activeTab) < tabOrder.length - 1 && (
            <button
              onClick={goToNextTab}
              className="text-sm text-cyan-400 hover:text-cyan-300 underline"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
