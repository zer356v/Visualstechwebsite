
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const About = () => {
  const teamMembers = [
    {
      name: 'Sai',
      position: 'Team Leader',
      bio: '15+ years of experience in web development and digital strategy.',
      image: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?uid=R181922310&ga=GA1.1.449060106.1736238587&semt=ais_hybrid&w=740'
    },
    {
      name: 'Seran',
      position: 'Full Stack Developer',
      bio: 'Award-winning designer with expertise in brand identity and UX/UI design.',
      image: 'https://img.freepik.com/premium-photo/funny-illustration-3d-cartoon-backpacker_183364-78903.jpg?uid=R181922310&ga=GA1.1.449060106.1736238587&semt=ais_hybrid&w=740'
    },
    {
      name: 'Ananthakrishnan',
      position: 'Backend Developer',
      bio: 'Full-stack developer with a passion for creating robust, scalable web applications.',
      image: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174401.jpg?uid=R181922310&ga=GA1.1.449060106.1736238587&semt=ais_hybrid&w=740'
    },
    {
      name: 'Praveen',
      position: 'Designer',
      bio: 'Digital marketing expert with a focus on SEO, content strategy, and analytics.',
      image: 'https://img.freepik.com/free-vector/smiling-young-man-glasses_1308-174702.jpg?uid=R181922310&ga=GA1.1.449060106.1736238587&semt=ais_hybrid&w=740'
    },
    {
      name: 'Nayan Anand',
      position: 'Full Stack Specilist',
      bio: 'Digital marketing expert with a focus on SEO, content strategy, and analytics.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Us</span>
            </h1>
            <p className="text-xl text-blue-100">
              Get to know the passionate team behind 'Visuals Tech' and our mission to deliver exceptional IT services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mb-8"></div>
              
              <p className="text-blue-100 mb-6">
                We are Startup's And Created in 2025, VisualsTech began with a simple mission: to help businesses succeed in the digital world through innovative technology solutions and exceptional service.
              </p>
              
              <p className="text-blue-100 mb-6">
                What started as a small web design studio has grown into a full-service IT company offering a comprehensive range of services including web design, web development, graphic design, and digital marketing.
              </p>
              
              <p className="text-blue-100">
                Today, we're proud to have served over 20 clients across various industries, from startups to established enterprises. Our commitment to quality, innovation, and client satisfaction remains at the core of everything we do.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-75"></div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Our Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-800">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
            <p className="text-xl text-blue-200">The talented individuals behind our success</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.position}</p>
                <p className="text-blue-100 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;