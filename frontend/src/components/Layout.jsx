import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, MeshDistortMaterial, Environment } from "@react-three/drei";
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from "./BackToTop";

// Inline helper: animated spheres
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

// Inline helper: particle field
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

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Animated background for ALL pages */}
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
      {/* Page content stack (above animation) */}
      <Navbar />
      <main className="flex-grow relative z-10">{children}</main>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Layout;
