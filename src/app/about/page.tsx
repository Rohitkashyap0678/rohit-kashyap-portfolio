'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiMail, FiPhone, FiAward, FiTrendingUp, FiStar, FiDownload, FiEye, FiCode, FiHeart, FiTarget, FiZap, FiUsers } from 'react-icons/fi';
import { personalInfo, education, stats, certifications } from '@/data/portfolio';
import Header from '@/components/Header';

export default function About() {
  const achievements = [
    { icon: FiCode, label: "Lines of Code", value: "500K+", color: "from-blue-500 to-blue-600" },
    { icon: FiUsers, label: "Happy Clients", value: "50+", color: "from-green-500 to-green-600" },
    { icon: FiStar, label: "GitHub Stars", value: "200+", color: "from-yellow-500 to-yellow-600" },
    { icon: FiZap, label: "Projects Live", value: "100+", color: "from-purple-500 to-purple-600" },
  ];

  const personalValues = [
    {
      icon: FiHeart,
      title: "Passion-Driven",
      description: "I believe great work comes from genuine passion for creating exceptional digital experiences.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: FiTarget,
      title: "Result-Oriented",
      description: "Every project I work on is focused on delivering measurable results and exceeding expectations.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: FiUsers,
      title: "Collaborative",
      description: "I thrive in team environments and believe the best solutions come from collaborative thinking.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: FiZap,
      title: "Innovation-Focused",
      description: "Always exploring new technologies and methodologies to stay ahead of the curve.",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <motion.span 
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 border border-blue-500/30 rounded-full text-sm font-medium mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  About Me
                </motion.span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
                  {personalInfo.title}
                </h2>
              </div>

              <motion.p 
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {personalInfo.description}
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="/RohitUpdatedResume.pdf"
                  download="Rohit_Kashyap_Resume.pdf"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload size={20} />
                  <span>Download Resume</span>
                </motion.a>
                <motion.a
                  href="/projects"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiEye size={20} />
                  <span>View Projects</span>
                </motion.a>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <FiMapPin className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-700 font-medium">India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <FiMail className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-700 font-medium">Available</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <FiPhone className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="text-green-600 font-medium">Available</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
                  
                  <div className="relative z-10">
                    {/* Profile Image Placeholder */}
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                     
                    <img
                     src="/Profile.jpg"
                     alt="Rohit Kashyap - Full Stack Developer"
                     className="w-full h-full rounded-[8px] max-w-[300px] max-h-[300px]  object-cover "
                     style={{ objectPosition: 'center 30%', transform: 'scale(1.1)' }}
                   />
                      {/* {personalInfo.name.split(' ').map(n => n[0]).join('')} */}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                      {personalInfo.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">Senior Frontend Developer</p>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={achievement.label}
                          className="text-center p-4 bg-gray-50 rounded-xl"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg mx-auto mb-2 flex items-center justify-center text-white`}>
                            <achievement.icon size={20} />
                          </div>
                          <div className="text-lg font-bold text-gray-900">{achievement.value}</div>
                          <div className="text-xs text-gray-600">{achievement.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  🚀
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  💻
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Numbers That Matter</h2>
            <p className="text-lg text-gray-300">Achievements that reflect my commitment to excellence</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div 
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">My Core Values</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide my work and drive my passion for creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {personalValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-700/30 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Education & Learning Journey</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Continuous learning and formal education that shaped my technical expertise and professional growth
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/30 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl mb-4">
                      🎓
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                    <p className="text-gray-400 mb-4">{edu.location}</p>
                    
                    {edu.gpa && (
                      <p className="text-gray-600 mb-4">
                        <span className="font-medium">GPA:</span> {edu.gpa}
                      </p>
                    )}
                    
                    {edu.description && (
                      <p className="text-gray-700 leading-relaxed mb-4">{edu.description}</p>
                    )}
                    
                    {edu.skills && (
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Professional Certifications</h2>
            <p className="text-lg text-gray-300">
              Validated expertise through industry-recognized certifications and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-700/30 p-8 hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FiAward className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
                    <p className="text-gray-300 mb-2 font-medium">{cert.provider}</p>
                    <p className="text-gray-500 text-sm mb-2">Issued: {cert.issued}</p>
                    {cert.id && (
                      <p className="text-gray-500 text-sm">
                        <span className="font-medium">Certificate ID:</span> {cert.id}
                      </p>
                    )}
                  </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. I'm always excited to take on new challenges and deliver exceptional results.
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