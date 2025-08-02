'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiPlay, FiSend, FiDownload } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { personalInfo, stats } from '@/data/portfolio';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Senior Frontend Developer',
    'UI/UX Specialist', 
    'Full Stack Developer',
    'React Expert',
    'Next.js Developer'
  ];

  useEffect(() => {
    const type = () => {
      const current = titles[currentIndex];
      const shouldDelete = isDeleting;

      if (shouldDelete) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!shouldDelete && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (shouldDelete && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, titles]);

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
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          ]
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated Mesh Overlay */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

             {/* Smooth Gradient Animation */}
       <motion.div 
         className="absolute inset-0 opacity-30"
         animate={{
           background: [
             "linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 25%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 75%, rgba(99, 102, 241, 0.1) 100%)",
             "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 25%, rgba(59, 130, 246, 0.1) 50%, rgba(99, 102, 241, 0.1) 75%, rgba(168, 85, 247, 0.1) 100%)",
             "linear-gradient(45deg, rgba(236, 72, 153, 0.1) 0%, rgba(59, 130, 246, 0.1) 25%, rgba(99, 102, 241, 0.1) 50%, rgba(168, 85, 247, 0.1) 75%, rgba(236, 72, 153, 0.1) 100%)",
             "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 25%, rgba(168, 85, 247, 0.1) 50%, rgba(236, 72, 153, 0.1) 75%, rgba(59, 130, 246, 0.1) 100%)"
           ]
         }}
         transition={{
           duration: 20,
           repeat: Infinity,
           ease: "linear"
         }}
       />

       {/* Subtle Light Rays */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div
           className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-blue-200/20 via-transparent to-transparent"
           animate={{
             opacity: [0.2, 0.6, 0.2],
             scaleY: [0.8, 1.2, 0.8],
           }}
           transition={{
             duration: 8,
             repeat: Infinity,
             ease: "easeInOut"
           }}
         />
         <motion.div
           className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-purple-200/20 via-transparent to-transparent"
           animate={{
             opacity: [0.2, 0.6, 0.2],
             scaleY: [0.8, 1.2, 0.8],
           }}
           transition={{
             duration: 10,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 2
           }}
         />
         <motion.div
           className="absolute top-0 left-2/3 w-0.5 h-full bg-gradient-to-b from-pink-200/20 via-transparent to-transparent"
           animate={{
             opacity: [0.2, 0.6, 0.2],
             scaleY: [0.8, 1.2, 0.8],
           }}
           transition={{
             duration: 12,
             repeat: Infinity,
             ease: "easeInOut",
             delay: 4
           }}
         />
       </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="inline-block px-6 py-3 bg-gradient-to-r mt-6 from-blue-500/20 to-purple-500/20 backdrop-blur-xl text-blue-800 rounded-full text-sm font-semibold mb-6 border border-blue-200/50 shadow-lg"
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
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{' '}
                <motion.span 
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
              </motion.h1>
              
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 h-16 flex items-center justify-center lg:justify-start">
                <motion.span 
                  className="relative"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 0px rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {currentText}
                  </span>
                  <motion.span
                    className="inline-block w-1 h-10 bg-gradient-to-b from-blue-600 to-purple-600 ml-2 rounded-full"
                    animate={{ 
                      opacity: [0, 1, 0],
                      scaleY: [1, 1.2, 1]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              {personalInfo.description}
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-blue-600 font-medium mb-6">
                💼 {personalInfo.tagline}
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10">
              <motion.a
                href="/projects"
                className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center space-x-3 overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
                <FiPlay className="group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 z-10" />
                <span className="z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur-lg -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
              
              <motion.a
                href="/contact"
                className="relative group bg-white/90 backdrop-blur-xl border-2 border-purple-200 text-gray-800 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center space-x-3 overflow-hidden shadow-lg"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  borderColor: "rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-pink-500/10"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <FiSend className="group-hover:translate-x-1 group-hover:scale-110 group-hover:text-purple-600 transition-all duration-300 z-10" />
                <span className="z-10 group-hover:text-purple-700">Let's Talk</span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-8">
              <motion.span 
                className="text-gray-600 text-sm font-semibold tracking-wide"
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
                  className="relative p-3 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 transition-all duration-300 group"
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
                  className="relative p-3 rounded-full bg-gradient-to-br from-cyan-50 to-cyan-100 text-cyan-600 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 group"
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
                  className="relative p-3 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 hover:text-white hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 transition-all duration-300 group"
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
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group"
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Main card */}
                  <motion.div
                    className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 overflow-hidden"
                    whileHover={{ 
                      scale: 1.08, 
                      y: -8,
                      boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.2)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50"
                      animate={{
                        background: [
                          'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
                          'linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(59, 130, 246, 0.05) 100%)',
                          'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)'
                        ]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div 
                        className="text-4xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {stat.icon}
                      </motion.div>
                      <motion.div 
                        className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {stat.value}
                      </motion.div>
                      <motion.div 
                        className="text-gray-700 text-sm font-semibold tracking-wide"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.7 }}
                      >
                        {stat.label}
                      </motion.div>
                    </div>
                    
                    {/* Decorative corner elements */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-40"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Floating Avatar */}
            <motion.div
              className="absolute -top-8 -right-8 w-36 h-36 rounded-full flex items-center justify-center text-white text-5xl font-black shadow-2xl overflow-hidden group cursor-pointer"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              whileHover={{ scale: 1.15, rotate: 0 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500"
                animate={{
                  background: [
                    "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
                    "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)",
                    "linear-gradient(135deg, #EC4899 0%, #3B82F6 50%, #8B5CF6 100%)",
                    "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Glowing border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(59, 130, 246, 0.4), 0 0 30px rgba(139, 92, 246, 0.3)",
                    "0 0 0 8px rgba(139, 92, 246, 0.4), 0 0 40px rgba(236, 72, 153, 0.3)",
                    "0 0 0 0px rgba(236, 72, 153, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent"
                animate={{
                  rotate: [0, 360],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Text content */}
              <motion.span
                className="relative z-10 drop-shadow-lg"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
                }}
              >
               <img
                     src="/Profile.jpg"
                     alt="Rohit Kashyap - Full Stack Developer"
                     className="w-full h-full max-w-[300px] max-h-[300px]  object-cover "
                     style={{ objectPosition: 'center 30%', transform: 'scale(1.1)' }}
                   />
              </motion.span>
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.a
            href="/about"
            className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-medium mb-2 group-hover:text-blue-600">Learn More</span>
            <FiArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 