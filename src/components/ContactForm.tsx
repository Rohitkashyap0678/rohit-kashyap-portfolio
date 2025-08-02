'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageCircle, FiSend, FiCheck, FiLoader } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      setIsSubmitted(true);
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#10B981',
          color: 'white',
          fontSize: '16px',
          padding: '12px 24px',
          borderRadius: '12px',
          fontWeight: '500'
        }
      });

      // Reset form
      setFormData({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact me directly.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#EF4444',
          color: 'white',
          fontSize: '16px',
          padding: '12px 24px',
          borderRadius: '12px',
          fontWeight: '500'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Toaster />
      
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
          <FiSend className="text-blue-600" />
          <span>Send a Message</span>
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email in a row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>
          
          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              placeholder="Project inquiry"
            />
          </div>
          
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <div className="relative">
              <FiMessageCircle className="absolute left-3 top-3 text-gray-400" size={18} />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>
          
          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
              isSubmitted
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <>
                <FiLoader className="animate-spin" size={18} />
                <span>Sending...</span>
              </>
            ) : isSubmitted ? (
              <>
                <FiCheck size={18} />
                <span>Message Sent!</span>
              </>
            ) : (
              <>
                <FiSend size={18} />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 