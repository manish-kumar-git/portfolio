'use client';

import { useState } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { ExternalLink, Github, Play, Store, Smartphone, Heart, Code, Lightbulb, Star } from 'lucide-react';
import { projects } from '@/lib/data';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'featured', label: 'Featured', icon: Star },
    { id: 'healthcare', label: 'Healthcare', icon: Heart },
    { id: 'personal', label: 'Personal', icon: Lightbulb }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'concept': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'featured': return Code;
      case 'healthcare': return Heart;
      case 'personal': return Lightbulb;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Innovative mobile solutions and healthcare technology concepts
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{filter.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const CategoryIcon = getCategoryIcon(project.category);
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <CategoryIcon className="w-16 h-16 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1 h-1 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.a>
                      )}
                      
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-1 px-3 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live</span>
                        </motion.a>
                      )}

                      {project.appStoreUrl && (
                        <motion.a
                          href={project.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-1 px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors text-sm"
                        >
                          <Store className="w-4 h-4" />
                          <span>App Store</span>
                        </motion.a>
                      )}

                      {project.playStoreUrl && (
                        <motion.a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-1 px-3 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors text-sm"
                        >
                          <Smartphone className="w-4 h-4" />
                          <span>Play Store</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

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
              Interested in Healthcare Technology?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              I'm passionate about creating mobile solutions that improve healthcare accessibility and patient outcomes. Let's discuss how we can work together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <Heart className="w-5 h-5 mr-2" />
              Start a Healthcare Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
