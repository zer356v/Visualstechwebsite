
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Happy Clients" },
    { number: "500+", label: "Projects Completed" },
    { number: "20+", label: "Team Members" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About TechSolutions</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over a decade of experience in the digital industry, we've helped businesses 
              of all sizes achieve their goals through innovative technology solutions.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experts combines creativity, technical expertise, and strategic thinking 
              to deliver results that exceed expectations and drive business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;