import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: '1',
      title: 'Reactron',
      category: 'Saas Product',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      title: 'Corporate Branding',
      category: 'graphic-design',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '3',
      title: 'Mobile App Design',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '4',
      title: 'SEO Campaign',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];
  
   const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'E-commerce', name: 'E-commerce' },
    { id: 'Web Applications', name: 'Web Applications' },
    { id: 'Web Designs', name: 'Web Designs' },
    { id: 'Saas Product', name: 'Saas Product' },
    { id: 'WebSites', name: 'Websites' },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Recent Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Take a look at some of our impressive work
          </motion.p>
        </motion.div>
        
        {/* Filter Buttons with interactive animations */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              variants={itemVariants}
              className={`px-5 py-2 rounded-full transition-all duration-300 relative overflow-hidden ${
                activeFilter === filter.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active filter indicator */}
              {activeFilter === filter.id && (
                <motion.div 
                  className="absolute inset-0 bg-primary -z-10"
                  layoutId="activeFilterHome"
                  initial={{ borderRadius: 20 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <span className="relative z-10">{filter.name}</span>
              
              {/* Subtle shine effect on hover */}
              <motion.div 
                className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-0"
                initial={{ opacity: 0, x: '-100%' }}
                whileHover={{ opacity: 0.2, x: '200%' }}
                transition={{ duration: 1 }}
              />
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid with animations */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/projects/${project.id}`} className="group block">
                  <div className="overflow-hidden rounded-lg shadow-lg card-shadow">
                    <div className="relative overflow-hidden">
                      {/* Image with zoom effect */}
                      <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Content reveal on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6">
                          <motion.h3 
                            className="text-white text-xl font-bold"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.p 
                            className="text-white/80 text-sm"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                          >
                            {filters.find(f => f.id === project.category)?.name}
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/projects" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10">View All Projects</span>
              {/* Arrow animation */}
              <motion.svg 
                className="ml-2 h-5 w-5 inline-block" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </motion.svg>
              
              {/* Shine effect */}
              <motion.span 
                className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-20"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 1.5,
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;