'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiStar, FiExternalLink } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { personalInfo, workHistory } from '@/data/portfolio';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm here to help you build exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upwork Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hire Me on Upwork</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join 30+ satisfied clients who have trusted me with their projects on Upwork
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <SiUpwork className="text-green-600" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Rated Freelancer</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">5.0</span>
                  <span className="text-gray-600">(30+ reviews)</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$25+</div>
                    <div className="text-sm text-gray-600">Hourly Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Job Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">6+</div>
                    <div className="text-sm text-gray-600">Years</div>
                  </div>
                </div>
                
                <motion.a
                  href={personalInfo.socialLinks.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SiUpwork size={20} />
                  <span>Hire Me on Upwork</span>
                  <FiExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/upwork.png"
                  alt="Upwork Profile"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Recent Upwork Reviews */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Recent Client Reviews</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {workHistory.slice(0, 4).map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <span className="text-lg font-bold text-green-600">{work.price}</span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{work.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">"{work.feedback}"</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{work.category}</span>
                    <span>{work.period.split(' - ')[1]}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FiMail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:text-blue-800">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <FiPhone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <a href={`tel:${personalInfo.phone}`} className="text-blue-600 hover:text-blue-800">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <FiMapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Location</h4>
                      <p className="text-gray-600">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect with Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaLinkedin className="text-blue-600" size={24} />
                    <span className="font-medium text-gray-900">LinkedIn</span>
                  </motion.a>
                  
                  <motion.a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaGithub className="text-gray-900" size={24} />
                    <span className="font-medium text-gray-900">GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    href={personalInfo.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaTwitter className="text-blue-400" size={24} />
                    <span className="font-medium text-gray-900">Twitter</span>
                  </motion.a>
                  
                  <motion.a
                    href={personalInfo.socialLinks.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <SiUpwork className="text-green-600" size={24} />
                    <span className="font-medium text-gray-900">Upwork</span>
                  </motion.a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <motion.a
                    href={`https://wa.me/${personalInfo.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <FaWhatsapp size={20} />
                    <span>Message on WhatsApp</span>
                  </motion.a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Response Time</span>
                    <span className="font-medium text-green-600">Within 2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Working Hours</span>
                    <span className="font-medium text-gray-900">12+ hours/day</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Timezone</span>
                    <span className="font-medium text-gray-900">IST (UTC+5:30)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">New Projects</span>
                    <span className="font-medium text-green-600">Available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 