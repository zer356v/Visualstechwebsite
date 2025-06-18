
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // This would ideally come from an API or context
  // Projects data with unique content for each project
  const projects = [
    {
      id: '1',
      title: 'E-commerce Platform',
      category: 'web-development',
      description: 'A comprehensive e-commerce solution for a fashion retailer with advanced filtering, payment processing, and inventory management.',
      fullDescription: 'This project involved creating a fully-featured e-commerce platform from the ground up. The client needed a robust solution that could handle their growing product catalog, provide customers with a seamless shopping experience, and integrate with their existing inventory management system. We implemented advanced filtering options, a secure payment gateway, and a user-friendly admin dashboard for managing products, orders, and customer data.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'AWS'],
      duration: '4 months',
      client: 'FashionRetailer Inc.',
      link: '/projects/e-commerce-platform',
      gallery: [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      challenges: [
        'Integrating with legacy inventory systems',
        'Developing a scalable product filtering system',
        'Creating a secure payment processing workflow'
      ],
      solutions: [
        'Created custom API adapters for legacy system integration',
        'Implemented ElasticSearch for advanced product filtering',
        'Built a PCI-compliant payment processing system with tokenization'
      ],
      testimonial: {
        quote: "The e-commerce platform transformed our online presence and increased our sales by 45% in the first quarter after launch.",
        author: "Sarah Johnson, CEO of FashionRetailer Inc."
      }
    },
    {
      id: '2',
      title: 'Corporate Identity',
      category: 'graphic-design',
      description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines for a finance company.',
      fullDescription: 'We worked closely with this finance company to revitalize their brand identity. The project began with extensive market research and competitor analysis to position the brand effectively in the financial sector. We created a modern yet trustworthy visual identity that included a distinctive logo, a sophisticated color palette, custom typography selections, and comprehensive brand guidelines to ensure consistent application across all touchpoints.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop'],
      duration: '2 months',
      client: 'Finance Solutions Ltd.',
      link: '/projects/corporate-identity',
      gallery: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1629429407759-01cd3d7cfb38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      challenges: [
        'Modernizing a traditional financial brand without losing trust',
        'Creating consistency across digital and print materials',
        'Developing a flexible system for different business divisions'
      ],
      solutions: [
        'Created a hybrid design approach combining modern and traditional elements',
        'Developed comprehensive guidelines for all media types',
        'Designed a modular brand system with divisional variations'
      ],
      testimonial: {
        quote: "The new branding has significantly improved our market perception and helped us attract a younger demographic while maintaining our core clients' trust.",
        author: "Michael Chen, Marketing Director at Finance Solutions Ltd."
      }
    },
    {
      id: '3',
      title: 'Travel Agency Website',
      category: 'web-design',
      description: 'Modern, responsive website design for a luxury travel agency with immersive visuals and intuitive user experience.',
      fullDescription: 'This luxury travel agency required a website that would showcase their exclusive destinations and create an immersive experience for potential clients. We designed a visually stunning, responsive website that highlights breathtaking destination photography and provides an intuitive booking process. The design incorporates subtle animations and interactive elements that engage users and encourage them to explore the various travel packages offered.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Figma', 'HTML5', 'CSS3', 'JavaScript', 'WordPress'],
      duration: '3 months',
      client: 'Elite Voyages',
      link: '/projects/travel-agency-website',
      gallery: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      challenges: [
        'Showcasing vast catalog of destinations in an engaging way',
        'Creating an intuitive booking process for complex itineraries',
        'Balancing high-quality imagery with fast load times'
      ],
      solutions: [
        'Developed an interactive destination explorer with filtering options',
        'Created a multi-step booking wizard with visual progress indicators',
        'Implemented advanced image optimization and lazy loading techniques'
      ],
      testimonial: {
        quote: "Our website now truly reflects the luxury experience we offer. Bookings have increased by 60% since the redesign.",
        author: "Elena Rodriguez, Founder of Elite Voyages"
      }
    },
    {
      id: '4',
      title: 'SEO Optimization Campaign',
      category: 'digital-marketing',
      description: 'Comprehensive SEO strategy that increased organic traffic by 200% and improved search rankings for a local business.',
      fullDescription: 'A local business was struggling with online visibility and approached us to improve their search engine rankings. We conducted a thorough SEO audit, identified key issues, and developed a comprehensive optimization strategy. This included on-page SEO improvements, content strategy development, local SEO optimization, and technical SEO fixes. Within six months, organic traffic increased by 200%, and the client achieved first-page rankings for multiple high-value keywords in their local market.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console'],
      duration: '6 months',
      client: 'Local Business Solutions',
      link: '/projects/seo-optimization-campaign',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      challenges: [
        'Overcoming strong local competition in a saturated market',
        'Fixing technical SEO issues without disrupting the site',
        'Creating quality content with limited client resources'
      ],
      solutions: [
        'Developed a hyper-local targeting strategy for niche audiences',
        'Implemented progressive technical fixes with minimal downtime',
        'Created a content calendar and templates for clients team'
      ],
      testimonial: {
        quote: "The SEO campaign transformed our business. We've gone from page 3 to the top 3 results for our main keywords, and the phone hasn't stopped ringing.",
        author: "David Miller, Owner of Local Business Solutions"
      }
    },
    {
      id: '5',
      title: 'Mobile Banking App',
      category: 'web-development',
      description: 'Secure, user-friendly mobile banking application with advanced features like biometric authentication and real-time alerts.',
      fullDescription: 'We developed a secure and user-friendly mobile banking application that allows customers to manage their accounts, make transactions, and access financial services on the go. The app features biometric authentication for enhanced security, real-time transaction alerts, expense tracking with visual analytics, and seamless integration with the banks core systems. Special attention was paid to creating an intuitive user interface that caters to users of all ages and technical abilities.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT Authentication', 'Firebase'],
      duration: '7 months',
      client: 'Secure Banking Ltd.',
      link: '/projects/mobile-banking-app',
      gallery: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      challenges: [
        'Meeting strict financial security regulations',
        'Ensuring seamless performance across diverse devices',
        'Integrating with legacy banking infrastructure'
      ],
      solutions: [
        'Implemented military-grade encryption and security protocols',
        'Created a device-adaptive responsive design system',
        'Developed custom middleware for legacy system integration'
      ],
      testimonial: {
        quote: "Our customers love the new banking app. It's intuitive, fast, and secure - everything we wanted. Customer satisfaction scores have increased by 35%.",
        author: "Amanda Patel, Digital Innovation Officer at Secure Banking"
      }
    },
    {
      id: '6',
      title: 'Product Packaging',
      category: 'graphic-design',
      description: 'Creative packaging design for a premium skincare line that increased shelf visibility and brand recognition.',
      fullDescription: 'A premium skincare brand approached us to redesign their product packaging to better reflect their high-end positioning and stand out in a crowded retail environment. We created elegant, distinctive packaging designs that embodied the brands natural, luxury ethos while ensuring practical functionality. The new packaging significantly increased shelf visibility and brand recognition, contributing to a 35% increase in sales within the first quarter after launch.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', '3D Modeling', 'Packaging Production'],
      duration: '3 months',
      client: 'Pure Luxury Skincare',
      link: '/projects/product-packaging',
      gallery: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556386470-bcdc6a9e9192?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578763363224-2ddd2fc3834e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      challenges: [
        'Creating luxury visual appeal while maintaining sustainability',
        'Ensuring packaging functionality for various product types',
        'Meeting strict production timelines for seasonal launch'
      ],
      solutions: [
        'Used eco-friendly materials with premium finishing techniques',
        'Designed modular packaging system adaptable to different products',
        'Created production-ready files and supervised manufacturing'
      ],
      testimonial: {
        quote: "The packaging redesign transformed our brand perception. Retailers are now eager to display our products prominently, and customers frequently mention the packaging in reviews.",
        author: "Victoria Lin, Creative Director at Pure Luxury Skincare"
      }
    },
    {
      id: '7',
      title: 'Restaurant Website',
      category: 'web-design',
      description: 'Elegant website design for a high-end restaurant featuring online reservations, menu presentation, and virtual tours.',
      fullDescription: 'This high-end restaurant needed a website that would reflect their sophisticated dining experience and streamline their reservation process. We created an elegant, visually rich website that showcases their culinary creations through high-quality photography. The site features an intuitive online reservation system, beautifully presented digital menus, virtual tours of the dining spaces, and integration with social media platforms. The design emphasizes the restaurants ambiance and exceptional food presentation.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'Tailwind CSS', 'Reservation API', 'CMS Integration'],
      duration: '2 months',
      client: 'Gourmet Dining Experience',
      link: '/projects/restaurant-website',
      gallery: [
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      challenges: [
        'Creating a digital experience that matches the physical restaurant ambiance',
        'Building a reservation system that integrates with their existing software',
        'Designing a solution for frequently changing seasonal menus'
      ],
      solutions: [
        'Used immersive imagery and subtle animations to recreate ambiance',
        'Developed a custom API connector for their reservation software',
        'Created an easy-to-update menu management system'
      ],
      testimonial: {
        quote: "Our website now perfectly captures the essence of our dining experience. Reservations have increased by 40%, and customers arrive with higher expectations - which we love to exceed.",
        author: "Chef Jean-Pierre, Owner of Gourmet Dining Experience"
      }
    },
    {
      id: '8',
      title: 'Social Media Campaign',
      category: 'digital-marketing',
      description: 'Strategic social media campaign that increased engagement by 150% and drove significant traffic to a new product launch.',
      fullDescription: 'For the launch of a new product line, our client needed a comprehensive social media campaign to generate buzz and drive sales. We developed a multi-platform strategy that included creative content creation, influencer partnerships, paid advertising, and community engagement initiatives. The campaign successfully increased social media engagement by 150%, generated substantial website traffic, and contributed to exceeding the clients first-month sales targets by 30%.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      technologies: ['Facebook Ads', 'Instagram', 'TikTok', 'Influencer Marketing', 'Content Creation'],
      duration: '3 months',
      client: 'Modern Products Inc.',
      link: '/projects/social-media-campaign',
      gallery: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      challenges: [
        'Standing out in a saturated market with many competitors',
        'Coordinating campaigns across multiple platforms and timezones',
        'Tracking ROI and attributing sales to specific campaigns'
      ],
      solutions: [
        'Created a distinctive visual style and storytelling approach',
        'Implemented a centralized content calendar with global scheduling',
        'Developed custom tracking pixels and attribution modeling'
      ],
      testimonial: {
        quote: "The campaign exceeded all expectations. Not only did we hit our sales targets early, but we also built an engaged community that continues to advocate for our products.",
        author: "Ryan Zhang, Marketing Manager at Modern Products Inc."
      }
    }
  ];

  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold text-red-500">Project Not Found</h1>
          <p className="mt-4 text-gray-600">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md">
            Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section with parallax effect */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Background image with parallax effect */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url(${project.image})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">{project.title}</h1>
              <div className="inline-block bg-indigo-600 px-4 py-2 rounded-full text-white">
                {project.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Project Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                <div className="text-blue-100 space-y-6">
                  <p>{project.fullDescription}</p>
                </div>
              </div>
              
              {/* Challenges and Solutions */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Challenges</h2>
                    <ul className="list-disc list-inside text-blue-100 space-y-2">
                      {project.challenges?.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Solutions</h2>
                    <ul className="list-disc list-inside text-blue-100 space-y-2">
                      {project.solutions?.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Testimonial */}
              {project.testimonial && (
                <motion.div 
                  className="mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="bg-indigo-900/50 backdrop-blur-md border border-indigo-700 rounded-2xl p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <svg className="w-10 h-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391C14.017 10.257 16.748 8 20.322 8v2c-1.927 0-3.306 1.504-3.306 3.609V21h-2.999zm-8 0v-7.391C6.017 10.257 8.748 8 12.322 8v2c-1.927 0-3.306 1.504-3.306 3.609V21H6.017z" />
                      </svg>
                      <h2 className="text-2xl font-bold text-white">Client Testimonial</h2>
                    </div>
                    <p className="text-xl text-blue-100 italic mb-6">{project.testimonial.quote}</p>
                    <p className="text-indigo-300 font-medium">{project.testimonial.author}</p>
                  </div>
                </motion.div>
              )}
              
              {/* Project Gallery */}
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <motion.div 
                      key={index} 
                      className="rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - image ${index+1}`} 
                        className="w-full h-[250px] object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 sticky top-20">
                <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-indigo-400 font-medium">Client</h3>
                    <p className="text-white mt-1">{project.client}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-indigo-400 font-medium">Duration</h3>
                    <p className="text-white mt-1">{project.duration}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-indigo-400 font-medium">Technologies</h3>
                    <div className="flex flex-wrap mt-2 gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Back to projects button */}
                <motion.div 
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/projects" 
                    className="block text-center py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all"
                  >
                    <div className="flex items-center justify-center">
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path>
                      </svg>
                      Back to Projects
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
