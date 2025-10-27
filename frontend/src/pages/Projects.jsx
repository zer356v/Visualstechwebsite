
import { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, Text3D, Environment } from '@react-three/drei';
import Layout from '../components/Layout';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectCard from '../components/projects/ProjectCard';
import { assets } from '../assets/assets';

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
    { id: 'E-commerce', name: 'E-commerce' },
    { id: 'Web Applications', name: 'Web Applications' },
    { id: 'Web Designs', name: 'Web Designs' },
    { id: 'Saas Product', name: 'Saas Product' },
    { id: 'WebSites', name: 'Websites' },
  ];
  
  const projects = [
    {
      id: '1',
      title: 'South Spice',
      category: 'E-commerce',
      description: 'A fast, eco-friendly food delivery platform bringing South India’s authentic flavors to your doorstep.',
      image: (assets.South_spice),
      link: '/projects/south-spice'
    },
    {
      id: '2',
      title: 'Tomato',
      category: 'E-commerce',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for a finance company.',
      image: (assets.Tomato1),
      link: '/projects/Tomato'
    },
    {
      id: '3',
      title: 'Estate',
      category: 'Web Designs',
      description: 'A modern and elegant real estate website that simplifies property discovery and boosts brand presence.',
      image: (assets.Estate1),
      link: '/projects/Estate'
    },
    {
      id: '4',
      title: 'Quasar Mobiles',
      category: 'WebSites',
      description: 'A fast, modern website built for Quasar Mobiles to showcase the latest smartphones effortlessly',
      image: (assets.Quasar1),
      link: '/projects/Quasar'
    },
    {
      id: '5',
      title: 'Meteor',
      category: 'WebSites',
      description: 'A sleek showcase of Meteor’s next-gen processors, graphics cards, and AI platforms highlighting performance and innovation.',
      image: (assets.Meteor1),
      link: '/projects/Meteor'
    },
    {
      id: '6',
      title: 'Reactron',
      category: 'Saas Product',
      description: 'A futuristic virtual chemistry lab that lets students perform and visualize experiments through interactive digital simulations.',
      image: (assets.Lab1),
      link: '/projects/reactron'
    },
    {
      id: '7',
      title: 'Voice Agent',
      category: 'Saas Product',
      description: ' An voice platform offering multiple personas — from friendly companion to expert teacher — for natural and engaging audio experiences.',
      image: (assets.Voiceagent1),
      link: '/projects/voice-agent'
    },
    {
      id: '8',
      title: 'Viunix',
      category: 'WebSites',
      description: 'A modern web platform for Viunix highlighting Interactive Flat Panels and commercial display solutions in the UAE',
      image: (assets.Viunix1),
      link: '/projects/Viunix'
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
        <Helmet>
      <title>VisualsTech Projects | Web Development Company in Chennai</title>
      <meta
        name="description"
        content="Explore VisualsTech's portfolio — top web development company in Chennai, delivering custom e-commerce websites, SaaS products, and SEO-driven digital experiences across India."
      />
      <meta
        name="keywords"
        content="web development company in Chennai, SEO agency in India, eCommerce website developers India, IT solutions for small business, website design services near me, software development Chennai, SaaS product design India"
      />
      <link rel="canonical" href="https://www.visualstech.in/projects" />
    </Helmet>

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
            Web Development Projects in <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">India</span>
          </h1>
          
          <h2 className="text-2xl text-blue-100 font-semibold mb-3">
            Professional SEO & IT Solutions Company in Chennai
          </h2>

          <p className="text-xl text-blue-100 drop-shadow-lg">
            Explore our portfolio of eCommerce websites, SaaS platforms, and web applications built for growing businesses.
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
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "VisualsTech Projects",
        "description": "Portfolio of web development, SEO, and IT projects completed by VisualsTech — a leading web development company in Chennai, India.",
        "url": "https://www.visualstech.in/projects",
        "itemListElement": projects.map((p, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `https://www.visualstech.in${p.link}`,
          "name": p.title
        }))
      })}
      </script>

    </Layout>
  );
};

export default Projects;