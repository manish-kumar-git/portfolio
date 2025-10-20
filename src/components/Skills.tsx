'use client';

import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Server, 
  Heart, 
  Wrench, 
  Code, 
  Database, 
  Shield, 
  Zap,
  Globe,
  Lock,
  Activity,
  Video,
  Accessibility,
  Cloud
} from 'lucide-react';
import { skills } from '@/lib/data';

const Skills = () => {
  const skillCategories = [
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      textColor: 'text-blue-700 dark:text-blue-300'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      textColor: 'text-green-700 dark:text-green-300'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Technologies',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      textColor: 'text-red-700 dark:text-red-300'
    },
    {
      id: 'tools',
      title: 'Tools & Infrastructure',
      icon: Wrench,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      textColor: 'text-purple-700 dark:text-purple-300'
    }
  ];

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: any } = {
      'Flutter': Smartphone,
      'Dart': Code,
      'Android Native': Smartphone,
      'iOS Native': Smartphone,
      'React Native': Smartphone,
      'Go (Golang)': Server,
      'Node.js': Server,
      'Python': Code,
      'RESTful APIs': Globe,
      'gRPC': Server,
      'Microservices': Server,
      'HL7 FHIR': Heart,
      'HIPAA Compliance': Shield,
      'EHR Integration': Database,
      'Telemedicine': Video,
      'Health Data Analytics': Activity,
      'Docker': Wrench,
      'Kubernetes': Server,
      'Firebase': Zap,
      'AWS': Cloud,
      'Git': Code,
      'CI/CD': Zap
    };
    return iconMap[skillName] || Code;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              Technical Skills
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive expertise in mobile development, backend systems, and healthcare technologies
          </motion.p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-16">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category.id);
            const CategoryIcon = category.icon;
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color}`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {categorySkills.length} technologies mastered
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => {
                    const SkillIcon = getSkillIcon(skill.name);
                    
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`p-6 rounded-xl ${category.bgColor} border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300`}
                      >
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                            <SkillIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className={`font-semibold ${category.textColor}`}>
                              {skill.name}
                            </h4>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {skill.level}% proficiency
                            </div>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Healthcare Specialization */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-xl">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Healthcare Technology Specialization
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Dedicated to creating secure, compliant, and user-friendly healthcare applications that improve patient outcomes and streamline healthcare delivery.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-white/10 rounded-xl">
                <Shield className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Security & Compliance</h4>
                <p className="text-sm opacity-90">HIPAA, HL7 FHIR, and data protection expertise</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <Video className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Telemedicine</h4>
                <p className="text-sm opacity-90">Remote care and virtual consultation platforms</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <Activity className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Health Analytics</h4>
                <p className="text-sm opacity-90">Data-driven insights and patient monitoring</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              With expertise spanning mobile development, backend systems, and healthcare technologies, I'm ready to tackle your next project.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              <Code className="w-5 h-5 mr-2" />
              Let's Build Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
