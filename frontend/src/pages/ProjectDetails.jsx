import { useParams, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import { assets } from "../assets/assets";
import { useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  // This would ideally come from an API or context
  // Projects data with unique content for each project
  const projects = [
    {
      id: "1",
      title: "South Spice",
      category: "E-commerce",
      description:
        "A fast and modern food delivery platform built for authentic South Indian cuisine, featuring real-time order tracking, eco-friendly delivery options, and a seamless user experience.",
      fullDescription:
        "South Spice is a complete food delivery web application developed for a regional restaurant brand specializing in South Indian cuisine. The goal was to create a platform that makes online ordering simple, fast, and engaging. Users can browse a dynamic menu, customize their dishes, and place orders with real-time tracking. The system supports eco-friendly packaging options, smart delivery time estimates, and referral rewards. A powerful admin dashboard enables restaurant owners to manage menus, orders, and delivery logistics efficiently — all within a secure and scalable environment.",
      image: assets.South_spice,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      duration: "1 months",
      client: "Romeo South spice.",
      link: "/projects/south-spice",
      gallery: [assets.South_spice, assets.South_spice2, assets.South_spice3, assets.South_spice4, assets.South_spice5],
      challenges: [
        "Optimizing real-time order updates and delivery tracking",
        "Ensuring smooth user experience during high-traffic meal hours",
        "Implementing secure online payment and referral systems",
      ],
      solutions: [
        "Integrated WebSocket-based live order tracking for instant status updates",
        "Used caching and optimized APIs to maintain speed during heavy traffic",
        "Developed a secure payment gateway with referral code functionality and encryption",
      ],
      testimonial: {
        quote:
          "South Spice helped us take our food delivery business online with an intuitive and fast platform. Our customer engagement and repeat orders increased significantly within the first month!",
        author: "Arun Kumar, Founder of South Spice",
      },
    },
    {
      id: "2",
      title: "Tomato",
      category: "E-commerce",
      description:
         'A sleek and responsive food delivery platform offering users a smooth browsing and ordering experience with real-time updates and secure online payments.',
      fullDescription:
        "Tomato is a next-generation food delivery web application built to provide users with an effortless ordering experience. It allows customers to explore menus, filter dishes, and place secure orders with just a few clicks. The clean design, optimized performance, and scalable backend make it perfect for modern restaurants and cloud kitchens aiming to digitize their business.",
      image:
        (assets.Tomato1),
      technologies: ["React", "MERN Stack", "Stripe API", "MongoDB"],
      duration: "16 Days",
      client: "Tomato Pvt limited.",
      link: "/projects/Tomato",
      gallery: [
        (assets.Tomato1),
        (assets.Tomato2),
        (assets.Tomato3),
        (assets.Tomato4)
      ],
      challenges: [
        'Designing a clean and user-friendly ordering interface',
        'Managing real-time order tracking and delivery updates',
        'Ensuring secure and reliable payment transactions'
      ],

      solutions: [
        'Developed a minimal and responsive UI focused on food visuals and easy navigation',
        'Integrated live order status updates using WebSockets for instant tracking',
        'Implemented a secure payment gateway with end-to-end encryption for safe transactions'
      ],
      testimonial: {
        quote: "Tomato’s interface and speed exceeded our expectations. Customers loved how easy it was to browse, order, and track deliveries — it really boosted our online engagement!",
        author: "Priya Menon, Operations Head at Tomato Foods"
      }
    },
    {
      id: "3",
      title: "Estate",
      category: "Web Designs",
      description:
        "A modern real estate web design that helps property buyers and sellers connect through an elegant, fast, and mobile-friendly interface.",
      fullDescription:
        "This real estate web design project was built to provide a seamless property browsing experience for users looking to buy, rent, or list homes. The focus was on crafting a clean, elegant interface with high-quality visuals, property filtering options, and easy navigation. The platform ensures quick load times, responsive layouts, and a professional appeal — perfect for real estate agencies aiming to boost their online presence.",
      image:
        (assets.Estate1),
      technologies: ["Figma", "HTML5", "CSS3", "JavaScript", "WordPress"],
      duration: "2 Days",
      client: "Elite Estate",
      link: "/projects/Estate",
      gallery: [
        (assets.Estate1),
        (assets.Estate2),
        (assets.Estate3)
      ],
      challenges: [
        "Showcasing vast catalog of destinations in an engaging way",
        "Creating an intuitive booking process for complex itineraries",
        "Balancing high-quality imagery with fast load times",
      ],
      solutions: [
        "Developed an interactive destination explorer with filtering options",
        "Created a multi-step booking wizard with visual progress indicators",
        "Implemented advanced image optimization and lazy loading techniques",
      ],
      testimonial: {
        quote:
          "Our website now truly reflects the luxury experience we offer. Bookings have increased by 60% since the redesign.",
        author: "Elena Rodriguez, Founder of Elite Voyages",
      },
    },
    {
      id: "4",
      title: "Quasar Mobiles",
      category: "WebSites",
      description:
        "A sleek and modern website designed for Quasar Mobiles, highlighting the brand’s products, features, and offerings with an engaging interface.",
      fullDescription:
        "Quasar Mobiles is a visually-driven web platform built to showcase the latest smartphones, accessories, and brand innovations. The website focuses on presenting detailed product specifications, comparisons, and promotional highlights in a responsive and interactive layout. Designed for clarity, speed, and user engagement, it serves as a premium digital presence for the brand without e-commerce functionality.",
      image:
        (assets.Quasar1),
      technologies: [
        "Figma",
        "React",
        "Animate.css",
        "GSAP",
      ],
      duration: "8 Days",
      client: "Quasar Solutions",
      link: "/projects/quasar",
      gallery: [
        (assets.Quasar1),
        (assets.Quasar2),
        (assets.Quasar3)
      ],
      challenges: [
        'Presenting extensive product information in an organized and visually appealing manner',
        'Creating a responsive interface that adapts smoothly across all devices',
        'Ensuring fast load times despite high-resolution product images and multimedia content'
      ],

      solutions: [
        'Implemented optimized image loading and lazy-loading techniques for performance',
        'Designed a structured, mobile-first layout with easy navigation',
        'Developed interactive product showcase components for better user engagement'
      ],

      testimonial: {
        quote: "The new Quasar Mobiles website beautifully represents our products and brand. Visitors can easily explore our offerings, and the feedback has been overwhelmingly positive!",
        author: "Karthik Raj, Marketing Head at Quasar Mobiles"
      }
    },
    {
      id: "5",
      title: "Meteor ",
      category: "WebSites",
      description:
        "A cutting-edge showcase website for Meteor, highlighting next-gen processors, graphics cards, and AI platforms designed for ultimate performance.",
      fullDescription:
        "Meteor’s web application presents the forefront of computing technology, featuring high-performance processors, graphics cards, and AI solutions. The platform emphasizes innovation, speed, and future-ready technology, offering visitors an engaging way to explore product specifications, features, and performance benchmarks. Designed to communicate technical excellence while maintaining a smooth and interactive browsing experience.",
      image:
        (assets.Meteor1),
      technologies: [
        "React Native",
        "Node.js",
        "PostgreSQL",
        "JWT Authentication",
        "Firebase",
      ],
      duration: "4 Days",
      client: "Secure Banking Ltd.",
      link: "/projects/Meteor",
      gallery: [
        (assets.Meteor1),
        (assets.Meteor2),
        (assets.Meteor3),
        (assets.Meteor4),
        (assets.Meteor5)
      ],
      challenges: [
        'Displaying complex technical specifications in a clear and engaging way',
        'Balancing high-quality visuals with fast website performance',
        'Creating an interactive experience for tech-savvy audiences'
      ],

      solutions: [
        'Implemented dynamic product showcases and interactive comparisons',
        'Optimized visuals and 3D assets for smooth performance',
        'Designed a modern, responsive layout suitable for all devices'
      ],

      testimonial: {
        quote: "Meteor’s website captures the essence of our technology — sleek, fast, and inspiring. It’s an effective showcase for our products and innovations.",
        author: "Ananya Sharma, Product Lead at Meteor Computing"
      }
    },
    {
      id: "6",
      title: "Reactron",
      category: "Saas Product",
      description:
        "An interactive virtual chemistry lab platform enabling students to perform experiments and explore molecular concepts digitally.",
      fullDescription:
        "Reactron Chemistry Lab is an advanced web-based simulation platform that brings the power of virtual experimentation to students and educators. Designed with a futuristic interface, it allows users to conduct chemistry experiments safely, visualize molecular interactions, and learn complex reactions through interactive modules. The platform bridges education and innovation, making science learning engaging and accessible anytime, anywhere.",
      image:
        (assets.Lab1),
      technologies: [
        "Advance Mern Stack",
        "Three js",
        "3D Modeling",
        "Blender",
        "WebGL",
        "GSAP",
      ],
      duration: "3 months",
      client: "Visuals Technologies",
      link: "/projects/reactron",
      gallery: [
        (assets.Lab1),
        (assets.Lab2),
        (assets.Lab3)
      ],
      challenges: [
        'Developing real-time interactive simulations within browser limits',
        'Ensuring accurate visualization of molecular structures and reactions',
        'Designing an intuitive interface for both students and educators'
      ],

      solutions: [
        'Integrated WebGL-based 3D visualization for realistic experiment interactions',
        'Built modular simulation components for various chemistry topics',
        'Designed a futuristic, responsive interface with smooth animations'
      ],

      testimonial: {
        quote: "Reactron Chemistry Lab revolutionizes how students experience science. The interactive design and simulations make complex chemistry simple and fun to learn.",
        author: "Dr. Priya Nair, Head of Science Education Initiative"
      }
    },
    {
      id: "7",
      title: "Voice Agent",
      category: "Saas Product",
      description:
        "An AI-powered voice platform offering multiple personas like Friendly Companion, Expert Teacher, Motivational Coach, Story Narrator, and Technical Expert.",
      fullDescription:
        "Voice Agent is an advanced SaaS solution that brings lifelike AI voices to various use cases — from friendly companionship to professional training. Users can choose from multiple personas such as Friendly Companion, Expert Teacher, Motivational Coach, Story Narrator, and Technical Expert, each designed with distinct tones and personalities. The platform is built for creators, educators, and businesses seeking to deliver natural, human-like audio experiences powered by cutting-edge AI voice synthesis.",
      image:
        (assets.Voiceagent1),
      technologies: [
        "React",
        "Mern Stack",
        "Reservation API",
        "CMS Integration",
        "Cloud Deployment",
        "AI Voice Synthesis"
      ],
      duration: "2 months",
      client: "Gourmet Dining Experience",
      link: "/projects/voice-agent",
      gallery: [
        (assets.Voiceagent1),
        (assets.Voiceagent2),
        (assets.Voiceagent3)
      ],
      challenges: [
        'Creating distinct and natural-sounding voice personas',
        'Ensuring real-time audio generation with minimal latency',
        'Building a scalable cloud-based SaaS architecture for global users'
      ],

      solutions: [
        'Integrated advanced AI voice models for emotion-rich speech synthesis',
        'Implemented efficient streaming and caching for real-time audio playback',
        'Developed a modular SaaS backend supporting multi-voice configuration and user management'
      ],

      testimonial: {
        quote: "Voice Agent transformed how we create and deliver voice content. The range of realistic personas makes it perfect for education, storytelling, and productivity tools.",
        author: "Rahul Menon, Product Manager at Voice Agent"
      }
    },
    {
      id: "8",
      title: "Viunix",
      category: "WebSites",
      description:
        "A professional showcase website for Viunix, featuring Interactive Flat Panels, commercial displays, and advanced digital solutions for modern workplaces and classrooms.",
      fullDescription:
        "Viunix is a technology-driven web platform built to highlight innovative display and collaboration solutions, including Interactive Flat Panels (IFPs), commercial displays, wireless presentation systems, and digital classroom technologies. The website emphasizes product quality, functionality, and brand partnerships with leading display manufacturers. Designed for clarity and SEO performance, it positions Viunix as a trusted supplier in the UAE’s digital display market.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "Mern Stack",
        "WebGL",
        "Three js",
        "TypeScript",
        "AWS",
      ],
      duration: "1.2 months",
      client: "Viunix smart technologies.",
      link: "/projects/Viunix",
      gallery: [
        (assets.Viunix1),
        (assets.Viunix2),
        (assets.Viunix3),
        (assets.Viunix4)
      ],
      challenges: [
      'Presenting a wide range of IFP and commercial display products with clarity',
      'Optimizing the site for strong SEO performance in the UAE market',
      'Creating a professional yet visually engaging design to appeal to corporate and educational buyers'
    ],

    solutions: [
      'Developed structured product pages with clear specifications and visuals',
      'Implemented SEO-focused content using keywords like “interactive panels in Dubai” and “IFP suppliers in UAE”',
      'Designed a sleek, responsive interface that enhances user trust and brand credibility'
    ],

    testimonial: {
      quote: "The Viunix website has elevated our brand presence in the UAE. Our inbound inquiries and visibility for IFP products have grown significantly since launch.",
      author: "Vasantha Kumar, Sales Head at Viunix"
    }
    },
      {
        id: "9",
        title: "Le Doux",
        category: "webSites",
        description:
          "A premium online bakery web application for Le Doux, featuring handcrafted cakes, desserts, and pastries with seamless ordering, customization, and delivery tracking.",
        fullDescription:
          "Le Doux is a luxury bakery web platform designed to provide customers with a delightful digital experience that mirrors the charm of a real artisan bakery. The website allows users to explore beautifully presented cakes, pastries, and desserts, customize their orders, make secure online payments, and schedule deliveries with ease. Built with scalability and design precision, Le Doux focuses on blending aesthetics with functionality — offering a smooth, responsive interface and elegant animations. The admin panel enables efficient order management, product updates, and promotional campaigns for the brand.",
        image:
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        technologies: [
          "MERN Stack",
          "Firebase",
          "Stripe API",
          "Tailwind CSS",
          "Framer Motion"
        ],
        duration: "1 months",
        client: "Le Doux Bakery Pvt. Ltd.",
        link: "/projects/LeDoux",
        gallery: [
          (assets.LeDoux1),
          (assets.LeDoux2),
          (assets.LeDoux3),
          (assets.LeDoux4)
        ],
        challenges: [
          "Creating a luxury bakery experience through digital design and storytelling",
          "Integrating product customization options for cakes and desserts",
          "Optimizing site speed while maintaining high-quality product visuals"
        ],
        solutions: [
          "Developed a visually rich and responsive UI using React and Tailwind CSS",
          "Implemented secure payment flow and order scheduling through Stripe and Firebase",
          "Optimized high-resolution images and SEO metadata for improved visibility and performance"
        ],
        testimonial: {
          quote:
            "Our new Le Doux bakery website perfectly reflects our brand’s elegance and craftsmanship. Online orders and customer engagement have grown tremendously since launch.",
          author: "Rohit Sharma, Founder of Le Doux Bakery"
        }
      },
    {
      id: "10",
      title: "Sweet Dreems",
      category: "websites",
      description:
        "An elegant online bakery ordering platform for Sweet Dreems Bakery, featuring handcrafted desserts, real-time ordering, and a seamless digital shopping experience.",
      fullDescription:
        "Sweet Dreems Bakery is a beautifully designed web application built to bring the charm of a local bakery into the digital world. It allows customers to browse a curated selection of cakes, pastries, and desserts, customize orders, and schedule deliveries with ease. The platform emphasizes user experience with smooth animations, responsive design, and intuitive navigation. Optimized for performance and SEO, the website enhances the brand’s online visibility while maintaining its handcrafted identity. It also includes an admin dashboard for managing orders, inventory, and promotions efficiently.",
      image:
      (assets.sd1),
      technologies: [
        "MERN Stack",
        "Firebase",
        "Stripe API",
        "Tailwind CSS",
        "Framer Motion"
      ],
      duration: "3.8 days",
      client: "Sweet Dreems Bakery Pvt. Ltd.",
      link: "/projects/SweetDreemsBakery",
      gallery: [
        (assets.sd1),
        (assets.sd2),
        (assets.sd3),
        (assets.sd4)
      ],
      challenges: [
        "Showcasing artisan bakery products with aesthetic presentation and performance balance",
        "Integrating an easy-to-use order customization and delivery scheduling system",
        "Ensuring strong SEO and fast load times for high customer engagement"
      ],
      solutions: [
        "Designed a visually rich and responsive UI with warm bakery-inspired tones",
        "Built dynamic order customization, cart, and scheduling features using React and MongoDB",
        "Implemented SEO-friendly content with strong local search keywords like “online bakery in Dubai” and “custom cakes delivery UAE”"
      ],
      testimonial: {
        quote:
          "Our customers love the new Sweet Dreems website! It perfectly captures our bakery’s warmth and creativity, and online orders have grown steadily since launch.",
        author: "Anjali Thomas, Owner of Sweet Dreems Bakery"
      }
    },
    {
      id: "11",
      title: "Nebula Bakery",
      category: "webSites",
      description:
        "A futuristic online bakery platform for Nebula Bakery, offering artisanal cakes, pastries, and desserts with smooth online ordering, customization, and doorstep delivery.",
      fullDescription:
        "Nebula Bakery is a next-generation bakery web application that combines artistry and technology to deliver a seamless digital dessert experience. The platform enables customers to explore a wide range of handcrafted cakes, pastries, and sweets through a visually immersive interface. With options for custom cake designs, instant ordering, and real-time delivery updates, Nebula Bakery redefines online confectionery experiences. The website emphasizes performance, aesthetics, and user delight — integrating a clean UI with dynamic animations and intuitive navigation. Its admin dashboard empowers bakery staff to manage products, track orders, and run promotional campaigns effortlessly.",
      image:
        (assets.nb1),
      technologies: [
        "MERN Stack",
        "Firebase",
        "Stripe API",
        "Tailwind CSS",
        "Framer Motion"
      ],
      duration: "1.6 months",
      client: "Nebula Bakery Pvt. Ltd.",
      link: "/projects/NebulaBakery",
      gallery: [
        (assets.nb1),
        (assets.nb2),
        (assets.nb3),
        (assets.nb4)
      ],
      challenges: [
        "Designing a futuristic yet cozy bakery interface that stands out digitally",
        "Creating smooth product filtering and customization for a wide range of desserts",
        "Ensuring high-speed performance with rich visuals and animations"
      ],
      solutions: [
        "Developed an elegant and performance-optimized front end using React and Tailwind CSS",
        "Implemented Firebase for real-time order tracking and seamless backend synchronization",
        "Used Framer Motion for immersive animations that enhance brand storytelling"
      ],
      testimonial: {
        quote:
          "Nebula Bakery’s new website has taken our brand to the next level — it’s elegant, modern, and incredibly easy for our customers to use. Online engagement has grown beyond expectations.",
        author: "Sneha Kapoor, Founder of Nebula Bakery"
      }
    }



  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold text-red-500">Project Not Found</h1>
          <p className="mt-4 text-gray-600">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white rounded-md"
          >
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
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
                {project.title}
              </h1>
              <div className="inline-block bg-indigo-600 px-4 py-2 rounded-full text-white">
                {project.category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
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
                <h2 className="text-3xl font-bold text-white mb-6">
                  Project Overview
                </h2>
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
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Challenges
                    </h2>
                    <ul className="list-disc list-inside text-blue-100 space-y-2">
                      {project.challenges?.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Solutions
                    </h2>
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
                      <svg
                        className="w-10 h-10 text-indigo-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391C14.017 10.257 16.748 8 20.322 8v2c-1.927 0-3.306 1.504-3.306 3.609V21h-2.999zm-8 0v-7.391C6.017 10.257 8.748 8 12.322 8v2c-1.927 0-3.306 1.504-3.306 3.609V21H6.017z" />
                      </svg>
                      <h2 className="text-2xl font-bold text-white">
                        Client Testimonial
                      </h2>
                    </div>
                    <p className="text-xl text-blue-100 italic mb-6">
                      {project.testimonial.quote}
                    </p>
                    <p className="text-indigo-300 font-medium">
                      {project.testimonial.author}
                    </p>
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
                <h2 className="text-3xl font-bold text-white mb-6">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      className="rounded-xl overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - image ${index + 1}`}
                        className="w-full h-[180px] object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Fullscreen Image Modal */}
              <AnimatePresence>
                {selectedImage && (
                  <motion.div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="relative max-w-4xl w-full"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-black rounded-full p-2 transition"
                      >
                        ✕
                      </button>

                      {/* Image */}
                      <img
                        src={selectedImage}
                        alt="Full view"
                        className="w-full max-h-[80vh] object-contain rounded-xl"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right Column - Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl p-8 sticky top-20">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Project Details
                </h2>

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
                    <h3 className="text-indigo-400 font-medium">
                      Technologies
                    </h3>
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 17l-5-5m0 0l5-5m-5 5h12"
                        ></path>
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
