'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiExternalLink, FiMessageCircle } from 'react-icons/fi';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { personalInfo } from '@/data/portfolio';

const Contact = () => {
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

  const contactMethods = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Address',
      info: 'Avas Vikas Colony, Khatauli, Muzaffarnagar',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Contact Number',
      info: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email Address',
      info: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: <FiExternalLink className="w-6 h-6" />,
      title: 'Website',
      info: 'https://www.linkedin.com/in/rohit-kashyap-611a201a6/',
      link: personalInfo.socialLinks.linkedin,
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: personalInfo.socialLinks.linkedin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={24} />,
      url: personalInfo.socialLinks.twitter,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50 hover:bg-sky-100'
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: personalInfo.socialLinks.github,
      color: 'text-gray-800',
      bgColor: 'bg-gray-50 hover:bg-gray-100'
    },
    {
      name: 'Upwork',
      icon: <SiUpwork size={24} />,
      url: personalInfo.socialLinks.upwork,
      color: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
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
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Contact Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Let's start a conversation
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {method.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                {method.link ? (
                  <motion.a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 break-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {method.info}
                  </motion.a>
                ) : (
                  <p className="text-gray-300 font-medium">{method.info}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Connect With Me */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Connect With Me</h3>
              <p className="text-lg text-gray-300">
                Follow me on social media for updates, insights, and behind-the-scenes content
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-gray-900/50 backdrop-blur-xl border border-gray-700/30 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:border-blue-500/50"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
              <p className="text-xl mb-8 opacity-90">
                I'm always excited to hear about new projects and opportunities. Reach out and let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail />
                  <span>Send me a message anytime</span>
                </motion.a>
                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPhone />
                  <span>Let's have a conversation</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Email</h4>
                <p className="text-blue-600">{personalInfo.email}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Phone</h4>
                <p className="text-blue-600">{personalInfo.phone}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">Based in {personalInfo.location}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 