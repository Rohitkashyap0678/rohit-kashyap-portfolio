'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiStar, FiZap, FiTarget, FiCheckCircle } from 'react-icons/fi';
import { personalInfo, skills } from '@/data/portfolio';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const skillCategories = [
    { name: 'Frontend Development', skills: skills.frontend, icon: '🎨', color: 'blue' },
    { name: 'Backend & Integration', skills: skills.backend, icon: '⚙️', color: 'purple' },
    { name: 'JavaScript Frameworks', skills: skills.frameworks, icon: '⚡', color: 'green' },
    { name: 'Tools & Workflow', skills: skills.tools, icon: '🛠️', color: 'orange' },
  ];

  const values = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to solve complex problems.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working closely with clients and teams to ensure the best possible outcomes.',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Committed to delivering high-quality, well-tested, and maintainable code.',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Discovery',
      description: 'Understanding your requirements, goals, and target audience to create the perfect solution.',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Creating detailed project plans, wireframes, and technical specifications.',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      step: '3',
      title: 'Development',
      description: 'Building your project with clean, efficient code and regular progress updates.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      step: '4',
      title: 'Launch',
      description: 'Deploying your project and providing ongoing support and maintenance.',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const deliverables = [
    'Clean, reusable, and scalable code',
    'Fast and reliable development with a focus on user experience',
    'Clear and timely communication',
    'Deep attention to detail and business goals',
    'Consistent delivery, always aligned with client expectations'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* About Header */}
          <motion.div variants={itemVariants} className="text-center">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>{' '}
              – Senior Front-end Developer (5+ Years of Experience)
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">🔧 My Skills & Expertise</h3>
              <p className="text-lg text-gray-600">
                Technologies and tools I use to bring your ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl mb-4">{category.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 8).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${
                          category.color === 'blue' ? 'from-blue-100 to-blue-200 text-blue-800' :
                          category.color === 'purple' ? 'from-purple-100 to-purple-200 text-purple-800' :
                          category.color === 'green' ? 'from-green-100 to-green-200 text-green-800' :
                          'from-orange-100 to-orange-200 text-orange-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What I Deliver */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">✅ What I Deliver</h3>
              <p className="text-lg text-gray-600">
                Quality standards that drive exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <FiCheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* My Values */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">My Values</h3>
              <p className="text-lg text-gray-600">
                The principles that guide my work and approach to development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* My Process */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">My Process</h3>
              <p className="text-lg text-gray-600">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0" />
                  )}
                  
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Free Consultation CTA */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">🎉 Free 15-Minute Discovery Call</h3>
              <p className="text-xl mb-8 opacity-90">
                Let's talk! I offer a FREE 15-minute consultation to understand your goals and how I can help. 
                I only take on work where I know I can provide real value.
              </p>
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                📞 Let's connect — message me today!
              </motion.button>
              <p className="text-sm opacity-75 mt-4">
                I usually reply within a few hours. Looking forward to helping you build something great.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 