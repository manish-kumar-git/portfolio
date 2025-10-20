'use client';

import { motion, easeOut } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo, personalInfo } from '@/lib/data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: contactInfo.github,
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      href: contactInfo.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
      color: 'hover:text-green-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Flutter Developer & Healthcare Technology Enthusiast passionate about creating 
                innovative mobile solutions that improve patient outcomes and make healthcare more accessible.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300">{contactInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Healthcare Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 mb-8"
          >
            <div className="flex items-center space-x-4">
              <Heart className="w-8 h-8 text-white" />
              <div>
                <h4 className="text-lg font-semibold mb-2">Healthcare Technology Mission</h4>
                <p className="text-white/90 text-sm">
                  Dedicated to leveraging mobile technology to improve healthcare accessibility, 
                  patient outcomes, and healthcare delivery systems worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </div>
              
              {/* <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">
                  Made with
                </span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-gray-400 text-sm">
                  for healthcare innovation
                </span>
              </div> */}

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-300"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">Back to Top</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
