'use client';

import { motion, easeOut } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, contactInfo } from '@/lib/data';

const Hero = () => {
  const roles = [
    'Flutter Developer',
    'Mobile Engineer',
    'Healthcare Tech Enthusiast',
    'Team Leader',
    'Backend Developer'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeOut
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-lg md:text-xl text-purple-600 font-medium">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Animated Roles */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-2">
              I'm a{' '}
              <motion.span
                key={roles[0]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              >
                {roles[0]}
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>

          {/* Healthcare Mission */}
          <motion.div
            variants={itemVariants}
            className="mb-12 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-purple-200 max-w-4xl mx-auto shadow-lg"
          >
            <p className="text-lg text-gray-700 italic">
              "{personalInfo.healthcareMission}"
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowDown className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mb-8"
          >
            <motion.a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-purple-600"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href={`mailto:${contactInfo.email}`}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-green-600"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-600"
          >
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>{contactInfo.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: easeOut }}
          className="flex flex-col items-center text-gray-600"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
