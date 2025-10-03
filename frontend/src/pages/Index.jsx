
import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Text3D, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import ProjectsShowcase from '../components/home/ProjectShowcase';
import AboutPreview from '../components/home/AboutPreview';
import ContactCta from '../components/home/ContactCta';

// Animated 3D spheres for background
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

// Animated particle field
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

const Index = () => {
  return (
    <Layout>
      {/* Background 3D elements wrapper */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          <Suspense fallback={null}>
            <ParticleField />
            <AnimatedSphere position={[-5, 3, -2]} color="#4F46E5" scale={1.5} />
            <AnimatedSphere position={[5, -3, -1]} color="#4299E1" scale={1.2} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Main content with relative z-index to appear above 3D background */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <ProjectsShowcase />
        <AboutPreview />
        <ContactCta />
      </div>
    </Layout>
  );
};

export default Index;

// idhu nama wesite