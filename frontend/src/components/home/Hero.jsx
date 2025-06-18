
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Digital 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"> Presence</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We create stunning websites, powerful applications, and comprehensive digital solutions 
            that drive business growth and exceed expectations.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="btn-primary bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg"
            >
              Get Started Today
            </Link>
            <Link 
              to="/projects" 
              className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;