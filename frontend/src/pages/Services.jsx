

import Layout from '../components/Layout';
import ServiceDetail from '../components/services/Services';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

const Services = () => {
  const services = [
    {
      id: 'SASS-applications',
      title: 'sass Applications',
      description: 'We build powerful SaaS platforms that help businesses streamline operations, improve collaboration, and deliver seamless experiences to their users. Our solutions are designed to be secure, scalable, and adaptable to your growth needs.',
      features: [
        'Custom SaaS platform development for diverse industries',
        'Secure cloud-based architecture with high availability',
        'Scalable infrastructure to support business growth',
        'User-friendly dashboards and intuitive interfaces',
        'Third-party API integration for extended functionality',
        'Ongoing support, updates, and performance optimization'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reversed: false
    },
    {
      id: 'software-tools',
      title: 'Software Tools',
      description: 'Our development team builds robust, scalable applications using the latest technologies and best practices. We create tools that solve real business challenges, enhance efficiency, and adapt to your growing needs.',
      features: [
        'Custom web and desktop application development',
        'Content management systems (WordPress, Shopify, etc.)',
        'E-commerce platforms with secure payment gateways',
        'Progressive Web Applications (PWAs)',
        'API design, integration, and automation',
        'Database design, migration, and optimization',
        'Long-term support, updates, and maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reversed: true
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Boost your online presence and reach your target audience with our comprehensive digital marketing strategies. We help you navigate the digital landscape and achieve measurable results.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) advertising',
        'Social media marketing and management',
        'Content marketing and creation',
        'Email marketing campaigns',
        'Analytics and performance tracking',
        'Conversion rate optimization'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      reversed: true
    }
  ];

  // Animation variants for smoother performance
  const starsVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section with animated background */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        
        {/* Animated stars background (CSS-based rather than Three.js) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 3 + 1 + "px",
                  height: Math.random() * 3 + 1 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
                variants={starsVariants}
                animate="animate"
                initial={{ opacity: Math.random() * 0.7 + 0.3 }}
                custom={i}
                transition={{
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 4
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] w-[100px] md:w-[200px] bg-blue-400 opacity-20"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                rotate: Math.random() * 360
              }}
              animate={{ 
                x: [null, Math.random() * 100 + "%"], 
                y: [null, Math.random() * 100 + "%"],
                rotate: [null, Math.random() * 360]
              }}
              transition={{ 
                duration: 15 + Math.random() * 20, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Services</span>
            </motion.h1>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "6rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-xl text-blue-100 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We offer a comprehensive range of IT solutions designed to help your business 
              thrive in the digital world.
            </motion.p>
            
            <motion.div
              className="relative w-full max-w-lg mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-full p-1"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex justify-between">
                {['Design', 'Develop', 'Market', 'Scale'].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="px-4 py-2 text-white text-sm md:text-base font-medium"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 8px rgb(59, 130, 246)"
                    }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <div className="bg-gray-900">
        {services.map((service) => (
          <ServiceDetail 
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            features={service.features}
            image={service.image}
            reversed={service.reversed}
          />
        ))}
      </div>
      
      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-12 rounded-2xl shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your project requirements and discover how we can help your business grow.
            </p>
            <motion.a 
              href="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" 
              }}
            >
              Request a Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
