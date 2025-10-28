import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Environment } from '@react-three/drei';

// Fluid blob with mouse interaction
const FluidBlob = () => {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport, size } = useThree();

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / size.width) * 2 - 1;
      mouseRef.current.y = -(e.clientY / size.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;

      const targetX = mouseRef.current.x * (viewport.width / 6);
      const targetY = mouseRef.current.y * (viewport.height / 6);

      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#06b6d4"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Full-screen Canvas as background */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            alpha: true
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#06b6d4" />
          <directionalLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />

          <FluidBlob />

          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6, 182, 212, 0.2), transparent), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(168, 85, 247, 0.15), transparent)',
          zIndex: 2
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Prominent grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(31,41,55,1)_1px,transparent_1px),linear-gradient(90deg,rgba(31,41,55,1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        style={{ zIndex: 3 }}
      />

      {/* Subtle glow effects */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px]"
        style={{
          top: '10%',
          left: '20%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent 70%)',
          zIndex: 2
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px]"
        style={{
          bottom: '10%',
          right: '20%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)',
          zIndex: 2
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Content layer - CENTERED */}
      <div className="container mx-auto px-6 py-20 md:py-32 relative" style={{ zIndex: 10 }}>
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-cyan-300 text-sm font-medium">Modern Web Development Company</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="headline-final mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="lead">
                We Build Web <span className="emphasis">Solutions</span>
              </span>
              <span className="impact">That Solve</span>
              <span className="impact">
                Business <span className="emphasis">Problems</span>
              </span>
            </motion.h1>

            {/* Shortened Tagline */}
            <motion.p
              className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              High-performance web applications & SaaS platforms that accelerate business growth.
            </motion.p>

            {/* Service Tags */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {['SEO Optimization', 'SaaS Platforms', 'Web Applications', 'Custom Websites'].map((service, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  {service}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons - Your Previous Style */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                to="/services"
                className="explore-thread-btn flex items-center justify-between"
              >
                <span>Explore Our Services</span>
                <span className="explore-thread-arrow ml-2 flex items-center justify-center"></span>
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#072265" /> {/* dark blue round background */}
                  <path
                    d="M12 7l5 5m0 0l-5 5m5-5H6"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </Link>

              <Link
                to="/projects"
                className="group px-8 py-4 rounded-full text-white bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm font-semibold flex items-center justify-center demo-btn"
                style={{ position: "relative", overflow: "hidden" }}
              >
                <div className="spinner-container">
                  <div className="spinner"></div>
                </div>
                <div className="front-layer"></div>
                <span className="btn-text">View Demo</span>
              </Link>

            </motion.div>

            {/* Stats - Centered */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {[
                { number: '20+', label: 'Projects Delivered' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '<3s', label: 'Average Load Time' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
