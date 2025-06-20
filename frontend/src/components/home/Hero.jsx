
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sphere, Text3D, Environment } from '@react-three/drei';

// Floating geometric shapes with holographic effect
const HolographicShape = ({ position, type = 'sphere', color, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {type === 'sphere' ? (
          <sphereGeometry args={[1, 32, 32]} />
        ) : (
          <octahedronGeometry args={[1, 0]} />
        )}
        <MeshDistortMaterial 
          color={color} 
          attach="material" 
          distort={0.6} 
          speed={3} 
          roughness={0}
          metalness={1}
          transparent
          opacity={0.7}
          wireframe
        />
      </mesh>
    </Float>
  );
};

// Animated neural network lines
const NeuralNetwork = () => {
  const linesRef = useRef();
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });
  
  return (
    <group ref={linesRef}>
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[Math.cos(i) * 3, Math.sin(i) * 3, -2]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#00ffff" />
        </mesh>
      ))}
    </group>
  );
};

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
      
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 z-1"></div>
      
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
      
      <div className="container-custom py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Futuristic badge */}
            <motion.div 
              className="inline-flex items-center gap-2 mt-12 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium">Next-Gen Technology</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
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
                  className="inline-block w-1 h-16 bg-cyan-400 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
              <br />
              <span className="text-white">of Business</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-gray-300 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              "We provide complete IT solutions designed to elevate your business.
               From web design and development to SEO and graphic design, our services are 
               crafted to boost your digital presence and drive real results."
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link 
                to="/services" 
                className="relative group px-8 py-4 rounded-full overflow-hidden"
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
                className="group px-8 py-4 rounded-full text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm font-semibold flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Explore Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { number: '20+', label: 'Projects Deployed' },
                { number: '99.9%', label: 'uptodate Maintanance' },
                { number: '24/7', label: 'Monitering' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block h-[500px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
              <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} color="#00ffff" />
                <directionalLight position={[-5, -5, 5]} intensity={0.5} color="#ff00ff" />
                
                <HolographicShape position={[-2, 1, 0]} color="#00ffff" type="sphere" scale={0.8} />
                <HolographicShape position={[2, -1, -1]} color="#ff00ff" type="octahedron" scale={1.2} />
                <HolographicShape position={[0, 2, -2]} color="#ffff00" type="sphere" scale={0.6} />
                
                <NeuralNetwork />
                
                <Environment preset="night" />
              </Canvas>
            </div>
            
            {/* Holographic UI overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute top-4 right-4 bg-cyan-500/20 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-cyan-300">SYSTEM ONLINE</span>
                </div>
                <div className="text-xs text-gray-400">Performance: 98.7%</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-purple-500/20 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
                <div className="text-xs text-purple-300 mb-1">Neural Network</div>
                <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-6 bg-purple-400"
                      animate={{ scaleY: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan-500/30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-purple-500/30" />
    </section>
  );
};

export default Hero;
