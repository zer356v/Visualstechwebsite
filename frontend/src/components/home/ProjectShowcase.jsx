import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../projects/projects';

// Show only 3 most recent (top of array)
const recentProjects = [...projects].reverse().slice(0, 3);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const ProjectShowcase = () => (
  <section className="section-padding bg-[#d9d4c7]/50">
    <div className="container-custom">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-center headline-base headline-section mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="lead">
            Our Latest <span className="emphasis">Projects</span>
          </span>
          <span className="impact">
            <span className="emphasis">Ideas </span>
            That
            <span className="emphasis"> Spark </span>.
            <br className="sm:hidden" />
            <span>
              <span className="emphasis"> Success</span> That Stays
            </span>
          </span>
        </motion.h2>
      </motion.div>

      {/* Project Grid - ONLY latest 3 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {recentProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Link to={project.link} className="group block h-full">
              <div className="rounded-2xl card-shadow border border-[#e3f2fd] bg-white/80 flex flex-col overflow-hidden shadow-xl transition-shadow duration-500 hover:shadow-2xl backdrop-blur-lg">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] object-cover flex-shrink-0"
                  whileHover={{ scale: 1.045 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="flex-1 flex flex-col p-8">
                  <span className="services-card-emphasis mb-1">{project.category}</span>
                  <h3 className="services-card-lead">{project.title}</h3>
                  <p className="text-gray-500 mt-2">{project.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/projects" className="btn-primary text-lg px-8 py-3 font-semibold flex items-center gap-2 bg-gradient-to-r from-blue-500 to-[#144678] text-white shadow-lg rounded-full hover:scale-[1.04] transition-all duration-200">
            <span className="relative z-10">View All Projects</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProjectShowcase;
