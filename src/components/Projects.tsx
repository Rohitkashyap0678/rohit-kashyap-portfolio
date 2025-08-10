'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiEye, FiCode } from 'react-icons/fi';
import { projects } from '@/data/portfolio';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { BackgroundGradient } from './ui/background-gradient';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  return (
    <section id="projects" className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl text-blue-200 rounded-full text-sm font-semibold mb-8 border border-blue-500/30 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Featured Work
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              A showcase of my latest{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                projects
              </span>{' '}
              <br className="md:hidden" />
              and creative solutions
            </h2>
            <div className="max-w-3xl mx-auto">
              <TextGenerateEffect 
                words="Here's a sample of my work showcasing fully responsive, modern web applications built with cutting-edge technologies."
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              />
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 border ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg border-blue-500/30'
                    : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800/60 border-gray-600/30 backdrop-blur-xl'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                
                <motion.div
                  className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 h-full"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 backdrop-blur-xl text-blue-200 text-xs font-semibold rounded-full border border-blue-500/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Price Badge */}
                    {project.price && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full">
                          {project.price}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features && (
                      <div>
                        <h4 className="text-white text-xs font-semibold mb-2 uppercase tracking-wide">Key Features</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {project.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-1 text-xs text-gray-400">
                              <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-white text-xs font-semibold mb-2 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                        {project.skills.length > 4 && (
                          <span className="text-xs px-3 py-1 rounded-full bg-gray-800/50 text-gray-400 border border-gray-600/30">
                            +{project.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      {project.liveUrl && (
                        <motion.button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiExternalLink size={14} />
                          <span>Live Demo</span>
                        </motion.button>
                      )}
                      {project.githubUrl && (
                        <motion.button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex-1 flex items-center justify-center space-x-2 border border-gray-600 text-gray-300 px-4 py-2 rounded-xl font-semibold text-sm hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiGithub size={14} />
                          <span>Code</span>
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={itemVariants} 
            className="text-center mt-20"
          >
            <BackgroundGradient className="rounded-[22px] max-w-4xl mx-auto p-4 bg-white dark:bg-zinc-900">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center border border-blue-500/30">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your Project?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's collaborate to bring your ideas to life. I'm here to help you create something amazing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 border border-blue-400/30"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    🚀 Get Started
                  </motion.button>
                  <motion.button
                    className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-400 hover:shadow-lg transition-all duration-300 bg-gray-900/50 backdrop-blur-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector('#about');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    👋 Learn More
                  </motion.button>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 