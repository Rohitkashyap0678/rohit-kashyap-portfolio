'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiStar, FiZap, FiTarget, FiCheckCircle } from 'react-icons/fi';
import { personalInfo, skills } from '@/data/portfolio';
import { HoverEffect } from './ui/card-hover-effect';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { BackgroundGradient } from './ui/background-gradient';

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
    <section id="about" className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
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
            <motion.span 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl text-blue-200 rounded-full text-sm font-semibold mb-8 border border-blue-500/30 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              About Me
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>{' '}
              <br className="md:hidden" />
              – Senior Front-end Developer
            </h2>
            <div className="max-w-4xl mx-auto">
              <TextGenerateEffect 
                words={personalInfo.description}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              />
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-6">🔧 My Skills & Expertise</h3>
              <p className="text-xl text-gray-300">
                Technologies and tools I use to bring your ideas to life
              </p>
            </div>

            <BentoGrid className="max-w-4xl mx-auto">
              {skillCategories.map((category, index) => (
                <BentoGridItem
                  key={category.name}
                  title={category.name}
                  description={
                    <div className="flex flex-wrap gap-2 mt-4">
                      {category.skills.slice(0, 6).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  }
                  header={
                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800 from-neutral-100 to-neutral-200 items-center justify-center">
                      <div className="text-6xl">{category.icon}</div>
                    </div>
                  }
                  className={index === 3 || index === 6 ? "md:col-span-2" : ""}
                  icon={<div className="text-2xl">{category.icon}</div>}
                />
              ))}
            </BentoGrid>
          </motion.div>

          {/* What I Deliver */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-6">✅ What I Deliver</h3>
              <p className="text-xl text-gray-300">
                Quality standards that drive exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, index) => (
                <BackgroundGradient key={index} className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
                  <motion.div
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <FiCheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </motion.div>
                </BackgroundGradient>
              ))}
            </div>
          </motion.div>

          {/* My Values */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-6">My Values</h3>
              <p className="text-xl text-gray-300">
                The principles that guide my work and approach to development
              </p>
            </div>

            <HoverEffect items={values.map(value => ({
              title: value.title,
              description: value.description,
              link: "#",
              icon: (
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {value.icon}
                </motion.div>
              )
            }))} />
          </motion.div>

          {/* My Process */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-6">My Process</h3>
              <p className="text-xl text-gray-300">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <BackgroundGradient key={index} className="rounded-[22px] max-w-sm p-6 bg-white dark:bg-zinc-900">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.step}
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                </BackgroundGradient>
              ))}
            </div>
          </motion.div>

          {/* Free Consultation CTA */}
          <motion.div variants={itemVariants}>
            <BackgroundGradient className="rounded-[22px] max-w-4xl mx-auto p-4 bg-white dark:bg-zinc-900">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center border border-blue-500/30">
                <h3 className="text-4xl font-bold mb-6 text-white">🎉 Free 15-Minute Discovery Call</h3>
                <p className="text-xl mb-8 text-gray-300">
                  Let's talk! I offer a FREE 15-minute consultation to understand your goals and how I can help. 
                  I only take on work where I know I can provide real value.
                </p>
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
                  📞 Let's connect — message me today!
                </motion.button>
                <p className="text-sm text-gray-400 mt-4">
                  I usually reply within a few hours. Looking forward to helping you build something great.
                </p>
              </div>
            </BackgroundGradient>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 