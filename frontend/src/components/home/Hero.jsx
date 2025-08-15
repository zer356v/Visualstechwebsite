import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Future', 'Innovation', 'Technology', 'Excellence'];
  const currentText = texts[Math.floor(currentIndex / 50) % texts.length];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
      const textIndex = Math.floor(currentIndex / 50) % texts.length;
      const charIndex = currentIndex % 50;
      
      if (charIndex < currentText.length) {
        setTypedText(currentText.slice(0, charIndex + 1));
      } else if (charIndex < 50) {
        setTypedText(currentText);
      } else {
        setTypedText('');
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex, currentText]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      
      {/* Animated background grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-20 m-auto relative z-10">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center md:mb-20 lg:mb-[6rem]">
          <motion.h1 
          className="mt-8 font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-white">Shaping the </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                {typedText}
              </span>
              <motion.span
              className="inline-block w-1 h-9 lg:h-11 xl:h-12 bg-cyan-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
            <br />
            <span className="text-white">of Business</span>
          </motion.h1>
            <p className="text-xl max-w-3xl mx-auto my-6 text-white lg:mb-8">
              We provide complete IT solutions designed to elevate your business. From web design and development to SEO, our services are crafted to boost your digital presence and drive real results.
            </p>
            <motion.div 
              className="flex flex-col justify-center sm:flex-row gap-16 my-8 mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link 
                to="/services" 
                className="mx-4 relative group px-8 py-4 rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-105 transition-transform duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 text-white font-semibold flex items-center justify-center">
                  Explore Services
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  animate={{
                    x: ['-100%', '100%'],
                    skewX: [0, 15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                  }}
                />
              </Link>
              
              <Link 
                to="/contact" 
                className="mx-4 group px-8 py-4 rounded-full text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm font-semibold flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Explore Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mb-4 mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { number: '20+', label: 'Projects Deployed' },
                { number: '99.9%', label: 'Up-to-date Maintenance'},
                { number: '24/7', label: 'Monitoring' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
            
          
          
           
       
        
        
      </div>
    </section>
  );
};

export default Hero;
