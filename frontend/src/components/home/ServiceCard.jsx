
import React from 'react';
import { motion } from 'framer-motion';

const ServiceDetail = ({ id, title, description, features, image, reversed }) => {
  return (
    <section id={id} className="py-16 overflow-hidden relative">
      {/* Dynamic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900 opacity-70"></div>
      
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-32 bg-blue-400 opacity-20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: Math.random() * 1.5 + 0.5,
              opacity: 0.1 + Math.random() * 0.3
            }}
            animate={{ 
              x: [null, Math.random() * 100 + "%"], 
              y: [null, Math.random() * 100 + "%"],
              opacity: [null, 0.1 + Math.random() * 0.3]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={`${reversed ? 'lg:pl-12' : 'lg:pr-12'}`}>
            <div className="flex items-center mb-6">
              {/* Simple icon instead of complex 3D wireframe */}
              <div className="w-[60px] h-[60px] mr-4 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">{title}</h2>
            </div>
            
            <motion.p 
              className="text-lg text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>
            
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-900/50 p-1 rounded-full text-blue-300 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <motion.div 
            className={`${reversed ? 'lg:order-first' : ''} h-[400px] lg:h-[500px]`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative h-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative h-full">
                {/* Service image with overlay effects */}
                <div className="relative z-10 h-full">
                  <img 
                    src={image} 
                    alt={title} 
                    className="rounded-2xl w-full h-full object-cover border border-white/10 shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent rounded-2xl"></div>
                  
                  {/* Floating geometric shapes for visual interest */}
                  <div className="absolute inset-0 pointer-events-none">
                    <motion.div 
                      className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-400 rounded-full opacity-30"
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-purple-400 opacity-20"
                      animate={{ 
                        rotate: -360,
                        y: [-10, 10, -10]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetail;
