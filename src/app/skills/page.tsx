'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiTrendingUp, FiAward, FiZap, FiCode, FiLayers, FiDatabase, FiTool, FiMonitor, FiSmartphone, FiGlobe, FiShield } from 'react-icons/fi';
import { skills, services } from '@/data/portfolio';
import Header from '@/components/Header';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      key: 'frontend',
      title: 'Frontend Development',
      icon: FiMonitor,
      description: 'Modern UI/UX development with cutting-edge frameworks and libraries',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      key: 'backend',
      title: 'Backend Development',
      icon: FiDatabase,
      description: 'Server-side development, APIs, and database integration',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      key: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: FiLayers,
      description: 'Popular frameworks and libraries for rapid development',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-violet-50'
    },
    {
      key: 'tools',
      title: 'Tools & Technologies',
      icon: FiTool,
      description: 'Development tools, version control, and deployment platforms',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-amber-50'
    },
    {
      key: 'databases',
      title: 'Databases',
      icon: FiDatabase,
      description: 'Database design, management, and optimization',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-cyan-50'
    }
  ];

  const skillProficiency: { [key: string]: number } = {
    // Frontend
    'HTML5': 95,
    'CSS3': 95,
    'JavaScript (ES6+)': 95,
    'TypeScript': 90,
    'React.js': 95,
    'Next.js': 90,
    'Vue.js': 85,
    'Angular': 80,
    'Tailwind CSS': 95,
    'Bootstrap': 90,
    'Material UI': 85,
    'Chakra UI': 80,
    'SCSS': 90,
    'SASS': 90,
    'Radix UI': 75,
    
    // Backend
    'Node.js': 85,
    'Express.js': 85,
    'Supabase': 80,
    'Firebase': 85,
    'RESTful APIs': 90,
    'GraphQL': 75,
    'Stripe': 80,
    
    // Frameworks
    'React-Bootstrap': 85,
    'Vue-Bootstrap': 80,
    
    // Tools
    'Git': 95,
    'GitHub': 95,
    'Jira': 85,
    'Asana': 80,
    'Linear': 75,
    'Jest': 80,
    'Vercel': 90,
    'Netlify': 85,
    
    // Databases
    'MongoDB': 85,
    'PostgreSQL': 80,
    'MySQL': 80
  };

  const getSkillProficiency = (skill: string): number => {
    return skillProficiency[skill] ?? 75;
  };

  const skillStats = [
    { icon: FiCode, label: "Programming Languages", value: "10+", color: "from-blue-500 to-blue-600" },
    { icon: FiLayers, label: "Frameworks & Libraries", value: "15+", color: "from-green-500 to-green-600" },
    { icon: FiTool, label: "Development Tools", value: "20+", color: "from-purple-500 to-purple-600" },
    { icon: FiStar, label: "Years of Experience", value: "6+", color: "from-yellow-500 to-yellow-600" },
  ];

  const specializations = [
    {
      title: "Modern Web Development",
      description: "Building responsive, fast, and scalable web applications using the latest technologies",
      icon: FiGlobe,
      color: "from-blue-500 to-blue-600",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Mobile-First Design",
      description: "Creating mobile-optimized experiences that work seamlessly across all devices",
      icon: FiSmartphone,
      color: "from-green-500 to-green-600",
      skills: ["Responsive Design", "PWA", "Mobile UX", "Performance"]
    },
    {
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and superior user experience",
      icon: FiZap,
      color: "from-purple-500 to-purple-600",
      skills: ["Core Web Vitals", "Code Splitting", "Lazy Loading", "Caching"]
    },
    {
      title: "Security & Best Practices",
      description: "Implementing security measures and following industry best practices",
      icon: FiShield,
      color: "from-orange-500 to-orange-600",
      skills: ["Authentication", "Data Protection", "Code Quality", "Testing"]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-200/20 to-blue-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Technical Expertise
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Skills &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical skills spanning modern web development technologies, frameworks, and industry best practices
            </p>
          </motion.div>

          {/* Skill Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {skillStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Proficiency</h2>
            <p className="text-lg text-gray-600">
              Explore my expertise across different technology domains and frameworks
            </p>
          </motion.div>

          {/* Enhanced Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 min-w-[200px] ${
                  activeCategory === category.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:shadow-md'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={20} />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>

          {/* Enhanced Active Category Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`bg-gradient-to-br ${skillCategories.find(c => c.key === activeCategory)?.bgColor} rounded-3xl p-8 md:p-12 border border-gray-200 relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${skillCategories.find(c => c.key === activeCategory)?.color} rounded-2xl text-white text-3xl mb-6 shadow-lg`}>
                    {React.createElement(skillCategories.find(c => c.key === activeCategory)?.icon!)}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {skillCategories.find(c => c.key === activeCategory)?.title}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {skillCategories.find(c => c.key === activeCategory)?.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills[activeCategory as keyof typeof skills]?.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{skill}</h4>
                        <motion.span 
                          className="text-sm font-bold text-gray-500 group-hover:text-blue-600 transition-colors duration-300"
                          animate={{ scale: hoveredSkill === skill ? 1.1 : 1 }}
                        >
                          {getSkillProficiency(skill)}%
                        </motion.span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${getSkillProficiency(skill)}%`,
                            backgroundColor: hoveredSkill === skill ? '#3B82F6' : '#10B981'
                          }}
                          transition={{ duration: 1, delay: index * 0.05 }}
                          className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        />
                      </div>
                      
                      <motion.div 
                        className="mt-4 text-xs text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredSkill === skill ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {getSkillProficiency(skill) >= 90 && "Expert Level"}
                        {getSkillProficiency(skill) >= 80 && getSkillProficiency(skill) < 90 && "Advanced Level"}
                        {getSkillProficiency(skill) >= 70 && getSkillProficiency(skill) < 80 && "Intermediate Level"}
                        {getSkillProficiency(skill) < 70 && "Beginner Level"}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Specializations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key areas where I excel and deliver exceptional results for clients and projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${spec.color} rounded-xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <spec.icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {spec.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{spec.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {spec.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Services I Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leveraging my technical expertise to deliver comprehensive solutions for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-start space-x-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  href="/contact"
                  className="mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Highlights */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose My Technical Skills</h2>
            <p className="text-lg text-gray-600">
              What sets my expertise apart and makes me the right choice for your projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cutting-Edge Technologies",
                description: "Always staying current with the latest frameworks, tools, and industry best practices",
                icon: FiTrendingUp,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Performance Excellence",
                description: "Delivering optimized solutions that provide exceptional speed and user experience",
                icon: FiZap,
                color: "from-green-500 to-green-600"
              },
              {
                title: "Scalable Solutions",
                description: "Building applications with architecture that grows seamlessly with your business",
                icon: FiLayers,
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Quality Assurance",
                description: "Implementing comprehensive testing and code review processes for reliable delivery",
                icon: FiAward,
                color: "from-orange-500 to-orange-600"
              }
            ].map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-lg`}>
                  <highlight.icon className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Leverage These Skills?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how my technical expertise can help solve your challenges and drive your project's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
              <motion.a
                href="/projects"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 