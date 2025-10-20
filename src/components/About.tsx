'use client';

import { motion, easeOut } from 'framer-motion';
import { Heart, Shield, Database, Video, Accessibility, Code, Users, Award, Target } from 'lucide-react';
import { personalInfo, healthcareFocus } from '@/lib/data';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '3+', icon: Code },
    { label: 'Team Members Led', value: '12', icon: Users },
    { label: 'Projects Delivered', value: '15+', icon: Award },
    { label: 'Healthcare Focus', value: '100%', icon: Heart }
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

  const iconMap = {
    video: Video,
    database: Database,
    heart: Heart,
    shield: Shield,
    accessibility: Accessibility
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Passionate about transforming healthcare through innovative mobile technology
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 text-white mb-4">
                Professional Journey
              </h3>
              <p className="text-lg text-gray-600 text-gray-300 leading-relaxed mb-6">
                {personalInfo.description}
              </p>
              <p className="text-lg text-gray-600 text-gray-300 leading-relaxed">
                {personalInfo.healthcareMission}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 from-gray-800 to-gray-700 rounded-xl text-center"
                >
                  <stat.icon className="w-8 h-8 text-purple-600 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Healthcare Focus */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 text-white mb-4">
                Healthcare Impact Statement
              </h3>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 from-gray-800 to-gray-700 rounded-xl border-l-4 border-purple-500">
                <p className="text-lg text-gray-700 text-gray-300 italic">
                  "{healthcareFocus.statement}"
                </p>
              </div>
            </motion.div>

            {/* Healthcare Focus Areas */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-gray-900 text-white mb-6">
                Focus Areas
              </h4>
              <div className="space-y-4">
                {healthcareFocus.areas.map((area, index) => {
                  const IconComponent = iconMap[area.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-start space-x-4 p-4 bg-white bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 p-2 bg-purple-100 bg-purple-900 rounded-lg">
                        <IconComponent className="w-6 h-6 text-purple-600 text-purple-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 text-white mb-1">
                          {area.title}
                        </h5>
                        <p className="text-gray-600 text-gray-300 text-sm">
                          {area.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Healthcare Together?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's collaborate on innovative mobile solutions that improve patient outcomes and make healthcare more accessible.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <Target className="w-5 h-5 mr-2" />
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
