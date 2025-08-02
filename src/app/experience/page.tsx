'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiClock, FiStar, FiTrendingUp, FiAward, FiTarget, FiZap, FiUsers, FiCode, FiDollarSign } from 'react-icons/fi';
import { experience, workHistory } from '@/data/portfolio';
import Header from '@/components/Header';

export default function Experience() {
  const experienceHighlights = [
    { icon: FiBriefcase, label: "Years Experience", value: "6+", color: "from-blue-500 to-blue-600" },
    { icon: FiUsers, label: "Teams Led", value: "5+", color: "from-green-500 to-green-600" },
    { icon: FiCode, label: "Technologies", value: "25+", color: "from-purple-500 to-purple-600" },
    { icon: FiStar, label: "Client Rating", value: "5.0", color: "from-yellow-500 to-yellow-600" },
  ];

  const keySkills = [
    { name: "Frontend Development", level: 95, color: "from-blue-500 to-blue-600" },
    { name: "React & Next.js", level: 95, color: "from-green-500 to-green-600" },
    { name: "UI/UX Design", level: 85, color: "from-purple-500 to-purple-600" },
    { name: "Team Leadership", level: 80, color: "from-orange-500 to-orange-600" },
    { name: "Project Management", level: 85, color: "from-pink-500 to-pink-600" },
    { name: "Performance Optimization", level: 90, color: "from-teal-500 to-teal-600" },
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
              Professional Journey
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A journey of growth, innovation, and delivering exceptional results across diverse projects and technologies
            </p>
          </motion.div>

          {/* Experience Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {experienceHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{highlight.value}</div>
                <div className="text-gray-600 text-sm">{highlight.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Timeline</h2>
            <p className="text-lg text-gray-600">
              Full-time positions and internships that shaped my career and expertise
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2 rounded-full"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Enhanced Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10 border-4 border-white shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1 left-1"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <motion.div 
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <FiBriefcase className="text-white" size={20} />
                          </div>
                          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">{exp.duration}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-4">{exp.company}</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <FiMapPin size={16} className="text-blue-500" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <FiCalendar size={16} className="text-green-500" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                      
                      {/* Skills */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Key Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.slice(0, 6).map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:shadow-md transition-all duration-200"
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                          {exp.skills.length > 6 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                              +{exp.skills.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Proficiency */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technical skills and expertise developed through years of hands-on experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {keySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                  <span className="text-2xl font-bold text-gray-900">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Work Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Testimonials and results from my recent freelance projects and client collaborations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workHistory.slice(0, 6).map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase tracking-wide">
                      {work.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {work.title}
                </h3>
                
                {/* Price and Type */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FiDollarSign className="text-green-600" size={20} />
                    <span className="text-2xl font-bold text-green-600">{work.price}</span>
                  </div>
                  <span className="text-gray-500 text-sm font-medium">{work.type}</span>
                </div>
                
                {/* Date */}
                <p className="text-gray-500 text-sm mb-4 flex items-center space-x-2">
                  <FiCalendar size={14} />
                  <span>{work.period}</span>
                </p>
                
                {/* Feedback */}
                <div className="bg-blue-50 rounded-xl p-4 mb-4">
                  <p className="text-gray-700 text-sm italic leading-relaxed line-clamp-4">
                    "{work.feedback}"
                  </p>
                </div>
                
                {/* Response */}
                {work.freelancerResponse && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                    <p className="text-green-800 text-sm">
                      <strong>My Response:</strong> {work.freelancerResponse}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="/projects"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Client Work
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-lg text-gray-600">
              Key domains where I deliver exceptional results and drive innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Architecture",
                description: "Designing scalable, maintainable frontend architectures using modern frameworks and best practices",
                icon: FiCode,
                color: "from-blue-500 to-blue-600",
                metrics: ["React/Next.js", "Performance Optimization", "Component Libraries"]
              },
              {
                title: "Team Leadership",
                description: "Leading development teams, mentoring junior developers, and establishing coding standards",
                icon: FiUsers,
                color: "from-green-500 to-green-600",
                metrics: ["Team Management", "Code Reviews", "Technical Mentoring"]
              },
              {
                title: "Project Delivery",
                description: "End-to-end project management from conception to deployment with focus on quality and deadlines",
                icon: FiTarget,
                color: "from-purple-500 to-purple-600",
                metrics: ["Agile/Scrum", "Quality Assurance", "Client Communication"]
              },
              {
                title: "Performance Optimization",
                description: "Improving application speed, reducing load times, and enhancing overall user experience",
                icon: FiZap,
                color: "from-orange-500 to-orange-600",
                metrics: ["Core Web Vitals", "Bundle Optimization", "Caching Strategies"]
              },
              {
                title: "Technical Innovation",
                description: "Exploring and implementing cutting-edge technologies to solve complex business problems",
                icon: FiTrendingUp,
                color: "from-pink-500 to-pink-600",
                metrics: ["Emerging Tech", "POCs", "R&D Projects"]
              },
              {
                title: "Client Success",
                description: "Building long-term relationships through exceptional service delivery and consistent results",
                icon: FiAward,
                color: "from-teal-500 to-teal-600",
                metrics: ["5.0 Rating", "100% Success Rate", "Repeat Clients"]
              }
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${expertise.color} rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <expertise.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{expertise.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{expertise.description}</p>
                <div className="space-y-2">
                  {expertise.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
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
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. I'm passionate about creating exceptional digital experiences that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/projects"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 