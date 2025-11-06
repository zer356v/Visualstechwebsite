import React, { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Environment } from "@react-three/drei";
import Layout from "../components/Layout";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../components/projects/projects";
import { Helmet } from "react-helmet";

// Animated particles only (no sphere)
const ParticleField = () => {
  const particlesRef = useRef();
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  return (
    <group ref={particlesRef}>
      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </group>
  );
};

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [page, setPage] = useState(1);

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "E-commerce", name: "E-commerce" },
    { id: "Web Designs", name: "Web Designs" },
    { id: "Saas Products", name: "Saas Product" },
    { id: "WebSites", name: "Websites" },
  ];

  // Filtering
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (page - 1) * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE
  );

  // Change page handler
  const goToPage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset page to 1 if filter changes
  // (This effect runs only on filter change)
  React.useEffect(() => { setPage(1); }, [activeFilter]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="w-screen max-w-none bg-gradient-to-br from-[#101827cc] via-[#192644ea] to-[#202665d9] rounded-b-3xl shadow-2xl pb-12 pt-24 md:pt-32 mx-auto relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={0.5} />
            <Suspense fallback={null}>
              <ParticleField />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <motion.h1
            className="headline-base headline-hero mb-2 text-white text-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="lead text-white">Showcasing</span>
            <span className="impact text-white block">
              Our <span className="emphasis text-cyan-50">Best Projects</span>
            </span>
          </motion.h1>
          <motion.p
            className="lead text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            See our top case studies and creative success stories—crafted for global brands, bootstrapped startups, and future-facing businesses.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-[#d9d4c7]/50 relative overflow-hidden">
        <div className="container-custom relative z-10">

          {/* Filters */}
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
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {paginatedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  project={project}
                  filterName={
                    filters.find((f) => f.id === project.category)?.name || ""
                  }
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
              <h3 className="text-2xl font-bold text-white mb-4">
                No projects found
              </h3>
              <p className="text-blue-200">
                We don't have any projects in this category yet. Please check
                back later or explore other categories.
              </p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-14 gap-2 select-none">
              <button
                className="px-4 py-2 rounded-full text-[#3178c6] font-bold bg-white shadow focus:ring-2 focus:ring-blue-200 transition disabled:opacity-50"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={`px-4 py-2 rounded-full mx-1 border-2 font-bold shadow transition
                    ${
                      page === i + 1
                        ? "bg-[#249edc]/90 border-[#249edc] text-white"
                        : "bg-[#d9d4c7]/70 border-white text-[#3178c6] hover:bg-white"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="px-4 py-2 rounded-full text-[#3178c6] font-bold bg-white shadow focus:ring-2 focus:ring-blue-200 transition disabled:opacity-50"
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
      {/* ...schema.org script as before */}
    </Layout>
  );
};

export default Projects;
