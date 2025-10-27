import Layout from '../components/Layout';
import ServiceDetail from '../components/services/Services';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet'; // ✅ SEO import

const Services = () => {
  const services = [
    {
      id: 'SASS-applications',
      title: 'SaaS Applications',
      description: 'We build powerful SaaS platforms that streamline operations and deliver seamless digital experiences for your business.',
      features: [
        'Custom SaaS platform development',
        'Secure cloud-based architecture',
        'Scalable infrastructure for growth',
        'User-friendly dashboards',
        'Third-party API integrations',
        'Ongoing support and optimization'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      reversed: false
    },
      {
    id: 'web-development',
    title: 'Website Development',
    description:
      'We design and develop responsive, high-performance websites that reflect your brand identity and convert visitors into customers.',
    features: [
      'Custom business websites and landing pages',
      'Responsive design for all devices',
      'SEO-friendly website architecture',
      'CMS integration (WordPress, Strapi, etc.)',
      'Fast loading and optimized performance',
      'Maintenance and content updates'
    ],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    reversed: false
  },
  {
    id: 'web-applications',
    title: 'Web Application Development',
    description:
      'We build powerful, scalable, and user-friendly web applications using the latest technologies to enhance your business efficiency and customer engagement.',
    features: [
      'Custom web application design and development',
      'MERN, MEAN, and Next.js frameworks',
      'Secure authentication and user management',
      'Real-time data and analytics dashboards',
      'API integration and backend development',
      'Performance monitoring and ongoing support'
    ],
    image:
      'https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=800&q=80',
    reversed: true
  },
  {
    id: 'android-app-development',
    title: 'Android App Development',
    description:
      'We create modern, high-performing Android applications that help businesses engage users and expand their digital reach effectively.',
    features: [
      'Custom Android app design and development',
      'Cross-platform support with React Native or Flutter',
      'API integration and backend connectivity',
      'Smooth UI/UX with modern material design',
      'Play Store deployment and optimization',
      'App maintenance and updates'
    ],
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    reversed: false
  },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Boost your online presence and connect with your target audience through our data-driven digital marketing services.',
      features: [
        'SEO optimization and keyword strategy',
        'PPC campaign management',
        'Social media marketing and analytics',
        'Content creation and brand storytelling',
        'Email marketing automation',
        'Conversion rate optimization'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      reversed: true
    }
  ];

  const starsVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: { duration: 4, repeat: Infinity, repeatType: "reverse" }
    }
  };

  return (
    <Layout>
      {/* ✅ SEO Helmet Section */}
      <Helmet>
        <title>Our Services | Visuals Tech – Web Development, SaaS, and Digital Marketing</title>
        <meta
          name="description"
          content="Explore Visuals Tech’s professional IT services including web development, SaaS solutions, software tools, and digital marketing designed to help your business grow online."
        />
        <meta
          name="keywords"
          content="web development services, SaaS applications, software tools, digital marketing agency, SEO marketing, Visuals Tech"
        />
        <meta property="og:title" content="Our Services | Visuals Tech" />
        <meta property="og:description" content="Visuals Tech offers SaaS, software tools, and digital marketing services to help businesses thrive online." />
        <meta property="og:image" content="https://www.viunix.com/visualsbrowser.png" />
        <meta property="og:url" content="https://www.viunix.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.viunix.com/services" />

        {/* ✅ Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Development and Digital Marketing",
            "provider": {
              "@type": "Organization",
              "name": "Visuals Tech",
              "url": "https://www.viunix.com"
            },
            "serviceType": "IT Solutions, SaaS Development, Marketing Services",
            "areaServed": "Global",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.viunix.com/contact"
            }
          })}
        </script>
      </Helmet>

      {/* ✨ Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>

        <div className="absolute inset-0 z-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              variants={starsVariants}
              animate="animate"
              initial={{ opacity: Math.random() * 0.7 + 0.3 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 4
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We offer a comprehensive range of IT solutions designed to help your business thrive in the digital world.
          </motion.p>
        </div>
      </section>

      {/* 💼 Services List */}
      <div className="bg-gray-900">
        {services.map((service) => (
          <ServiceDetail key={service.id} {...service} />
        ))}
      </div>

      {/* 📞 CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            className="max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 p-12 rounded-2xl shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your project requirements and discover how we can help your business grow.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
            >
              Request a Quote
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
