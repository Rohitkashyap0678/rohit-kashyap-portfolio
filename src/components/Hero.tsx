'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiPlay, FiSend } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { personalInfo, stats } from '@/data/portfolio';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { BackgroundGradient } from './ui/background-gradient';
import { Button } from './ui/moving-border';

const Hero = () => {
  const words = [
    {
      text: "Senior",
    },
    {
      text: "Frontend",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "&",
    },
    {
      text: "UI/UX",
      className: "text-purple-500 dark:text-purple-500",
    },
    {
      text: "Specialist",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <Spotlight
        className="left-80 top-28 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.span
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl text-blue-200 rounded-full text-sm font-semibold border border-blue-500/30 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              animate={{ 
                boxShadow: [
                  "0 10px 20px rgba(59, 130, 246, 0.1)",
                  "0 15px 30px rgba(139, 92, 246, 0.2)",
                  "0 10px 20px rgba(59, 130, 246, 0.1)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨ Welcome to my creative space
            </motion.span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur-xl -z-10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.span>
            </h1>
          </motion.div>

          {/* Typewriter Effect */}
          <div className="flex flex-col items-center justify-center mb-8">
            <TypewriterEffectSmooth words={words} />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-8 max-w-4xl"
          >
            <TextGenerateEffect 
              words={personalInfo.description}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-blue-400 font-medium text-lg">
              💼 {personalInfo.tagline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex items-center space-x-2">
                <FiPlay className="w-4 h-4" />
                <span>View My Work</span>
              </div>
            </Button>
            
            <Button
              borderRadius="1.75rem"
              className="bg-transparent border-slate-800"
            >
              <div className="flex items-center space-x-2">
                <FiSend className="w-4 h-4" />
                <span>Let's Talk</span>
              </div>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center space-x-8 mb-16"
          >
            <motion.span 
              className="text-gray-400 text-sm font-semibold tracking-wide"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Follow my journey:
            </motion.span>
            <div className="flex space-x-6">
              <motion.a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full bg-gradient-to-br from-blue-900/50 to-blue-800/50 text-blue-400 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-300 group border border-blue-500/30"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin size={20} />
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
              
              <motion.a
                href={personalInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 text-cyan-400 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 group border border-cyan-500/30"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter size={20} />
                <motion.div
                  className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.a>
              
              <motion.a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 transition-all duration-300 group border border-gray-500/30"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={20} />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gray-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl"
          >
            {stats.map((stat, index) => (
              <BackgroundGradient key={stat.label} className="rounded-[22px] max-w-sm p-1 bg-white dark:bg-zinc-900">
                <motion.div
                  className="text-center bg-black rounded-[20px] p-6 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="text-white text-sm font-semibold tracking-wide leading-tight"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              </BackgroundGradient>
            ))}
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.a
            href="/about"
            className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-medium mb-2 group-hover:text-blue-400">Learn More</span>
            <FiArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 