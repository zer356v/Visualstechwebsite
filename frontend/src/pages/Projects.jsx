
import { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, Text3D, Environment } from '@react-three/drei';
import Layout from '../components/Layout';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectCard from '../components/projects/ProjectCard';

// Animated 3D text component
const AnimatedText = ({ text, position, rotation, color = "#ffffff" }) => {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text3D
        ref={textRef}
        font="/fonts/Inter_Bold.json"
        size={0.5}
        height={0.1}
        position={position}
        rotation={rotation}
      >
        {text}
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </Text3D>
    </Float>
  );
};

// Animated sphere component
const AnimatedSphere = ({ position, color, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 48, 48]} />
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0}
        metalness={0.8}
      />
    </mesh>
  );
};

// Animated particles
const ParticleField = () => {
  const particlesRef = useRef();
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <group ref={particlesRef}>
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
};

const Projects = () => {
  
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-design', name: 'Web Design' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
  ];
  
  const projects = [
    {
      id: '1',
      title: 'E-commerce Platform',
      category: 'web-development',
      description: 'A comprehensive e-commerce solution for a fashion retailer with advanced filtering, payment processing, and inventory management.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/projects/e-commerce-platform'
    },
    {
      id: '3',
      title: 'Travel Agency Website',
      category: 'web-design',
      description: 'Modern, responsive website design for a luxury travel agency with immersive visuals and intuitive user experience.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/projects/travel-agency-website'
    },
    {
      id: '4',
      title: 'SEO Optimization Campaign',
      category: 'digital-marketing',
      description: 'Comprehensive SEO strategy that increased organic traffic by 200% and improved search rankings for a local business.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/projects/seo-optimization-campaign'
    },
    {
      id: '5',
      title: 'Mobile Banking App',
      category: 'web-development',
      description: 'Secure, user-friendly mobile banking application with advanced features like biometric authentication and real-time alerts.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/projects/mobile-banking-app'
    },
    {
      id: '6',
      title: 'Product Packaging',
      category: 'graphic-design',
      description: 'Creative packaging design for a premium skincare line that increased shelf visibility and brand recognition.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/projects/product-packaging'
    },
    {
      id: '7',
      title: 'Restaurant Website',
      category: 'web-design',
      description: 'Elegant website design for a high-end restaurant featuring online reservations, menu presentation, and virtual tours.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/projects/restaurant-website'
    },
    {
      id: '8',
      title: 'Social Media Campaign',
      category: 'digital-marketing',
      description: 'Strategic social media campaign that increased engagement by 150% and drove significant traffic to a new product launch.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/projects/social-media-campaign'
    },
  ];

  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  const getFilterName = (categoryId) => {
    const filter = filters.find(f => f.id === categoryId);
    return filter ? filter.name : '';
  };

  return (
    <Layout>
      {/* Hero Section with 3D Background */}
      <section className="relative h-[60vh] overflow-hidden flex items-center">
        {/* 3D background */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <Suspense fallback={null}>
              <ParticleField />
              
              <AnimatedSphere position={[2, -0.5, 0]} color="#4299E1" scale={1.2} />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-indigo-900/80"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]">
              Our <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">Projects</span>
            </h1>
            
            <p className="text-xl text-blue-100 drop-shadow-lg">
              Explore our portfolio of successful projects across various industries and services.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>
      
      {/* Projects Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-900 to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-[300px] bg-indigo-500/20"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight,
                rotate: Math.random() * 360
              }}
              animate={{ 
                x: [null, Math.random() * window.innerWidth], 
                y: [null, Math.random() * window.innerHeight],
                rotate: [null, Math.random() * 360]
              }}
              transition={{ 
                duration: 20 + Math.random() * 10, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          {/* Filters with glowing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <ProjectFilters 
              activeFilter={activeFilter} 
              setActiveFilter={setActiveFilter} 
              filters={filters} 
            />
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard 
                  project={project} 
                  filterName={getFilterName(project.category)}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-16 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">No projects found</h3>
              <p className="text-blue-200">
                We don't have any projects in this category yet. Please check back later or explore other categories.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;