import { assets } from "../../assets/assets";

export const projects = [
  {
    id: "1",
    title: "South Spice",
    category: "E-commerce",
    description: "Modern food delivery for South Indian cuisine.",
    fullDescription:
      "South Spice is a complete food delivery web application developed for a regional restaurant brand specializing in South Indian cuisine. The goal was to create a platform that makes online ordering simple, fast, and engaging. Users can browse a dynamic menu, customize their dishes, and place orders with real-time tracking. The system supports eco-friendly packaging options, smart delivery time estimates, and referral rewards. A powerful admin dashboard enables restaurant owners to manage menus, orders, and delivery logistics efficiently — all within a secure and scalable environment.",
    image: assets.South_spice,
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    duration: "1 months",
    client: "Romeo South spice.",
    link: "/projects/south-spice",
    gallery: [
      assets.South_spice,
      assets.South_spice2,
      assets.South_spice3,
      assets.South_spice4,
      assets.South_spice5,
    ],
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
    liveUrl: "https://southspice.visualstech.in",
  },
  {
    id: "2",
    title: "Tomato",
    category: "E-commerce",
    description: "Sleek food delivery with real-time updates.",
    fullDescription:
      "Tomato is a next-generation food delivery web application built to provide users with an effortless ordering experience. It allows customers to explore menus, filter dishes, and place secure orders with just a few clicks. The clean design, optimized performance, and scalable backend make it perfect for modern restaurants and cloud kitchens aiming to digitize their business.",
    image: assets.Tomato1,
    technologies: ["React", "MERN Stack", "Stripe API", "MongoDB"],
    duration: "16 Days",
    client: "Tomato Pvt limited.",
    link: "/projects/tomato",
    gallery: [assets.Tomato1, assets.Tomato2, assets.Tomato3, assets.Tomato4],
    challenges: [
      "Designing a clean and user-friendly ordering interface",
      "Managing real-time order tracking and delivery updates",
      "Ensuring secure and reliable payment transactions",
    ],
    solutions: [
      "Developed a minimal and responsive UI focused on food visuals and easy navigation",
      "Integrated live order status updates using WebSockets for instant tracking",
      "Implemented a secure payment gateway with end-to-end encryption for safe transactions",
    ],
    testimonial: {
      quote:
        "Tomato’s interface and speed exceeded our expectations. Customers loved how easy it was to browse, order, and track deliveries — it really boosted our online engagement!",
      author: "Priya Menon, Operations Head at Tomato Foods",
    },
    liveUrl: "https://tomato.visualstech.in",
  },
  {
    id: "3",
    title: "Estate",
    category: "Web Designs",
    description: "Elegant, mobile-friendly real estate browsing.",
    fullDescription:
      "This real estate web design project was built to provide a seamless property browsing experience for users looking to buy, rent, or list homes. The focus was on crafting a clean, elegant interface with high-quality visuals, property filtering options, and easy navigation. The platform ensures quick load times, responsive layouts, and a professional appeal — perfect for real estate agencies aiming to boost their online presence.",
    image: assets.Estate1,
    technologies: ["Figma", "HTML5", "CSS3", "JavaScript", "WordPress"],
    duration: "2 Days",
    client: "Elite Estate",
    link: "/projects/estate",
    gallery: [assets.Estate1, assets.Estate2, assets.Estate3],
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
    category: "Web Designs",
    description: "Modern showcase website for mobile brand.",
    fullDescription:
      "Quasar Mobiles is a visually-driven web platform built to showcase the latest smartphones, accessories, and brand innovations. The website focuses on presenting detailed product specifications, comparisons, and promotional highlights in a responsive and interactive layout. Designed for clarity, speed, and user engagement, it serves as a premium digital presence for the brand without e-commerce functionality.",
    image: assets.Quasar1,
    technologies: ["Figma", "React", "Animate.css", "GSAP"],
    duration: "8 Days",
    client: "Quasar Solutions",
    link: "/projects/quasar",
    gallery: [assets.Quasar1, assets.Quasar2, assets.Quasar3],
    challenges: [
      "Presenting extensive product information in an organized and visually appealing manner",
      "Creating a responsive interface that adapts smoothly across all devices",
      "Ensuring fast load times despite high-resolution product images and multimedia content",
    ],
    solutions: [
      "Implemented optimized image loading and lazy-loading techniques for performance",
      "Designed a structured, mobile-first layout with easy navigation",
      "Developed interactive product showcase components for better user engagement",
    ],
    testimonial: {
      quote:
        "The new Quasar Mobiles website beautifully represents our products and brand. Visitors can easily explore our offerings, and the feedback has been overwhelmingly positive!",
      author: "Karthik Raj, Marketing Head at Quasar Mobiles",
    },
    liveUrl: "https://mobile-brand-website.onrender.com/",
  },
  {
    id: "5",
    title: "Meteor",
    category: "WebSites",
    description: "Cutting-edge tech showcase website.",
    fullDescription:
      "Meteor’s web application presents the forefront of computing technology, featuring high-performance processors, graphics cards, and AI solutions. The platform emphasizes innovation, speed, and future-ready technology, offering visitors an engaging way to explore product specifications, features, and performance benchmarks. Designed to communicate technical excellence while maintaining a smooth and interactive browsing experience.",
    image: assets.Meteor1,
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "JWT Authentication",
      "Firebase",
    ],
    duration: "4 Days",
    client: "Secure Banking Ltd.",
    link: "/projects/meteor",
    gallery: [
      assets.Meteor1,
      assets.Meteor2,
      assets.Meteor3,
      assets.Meteor4,
      assets.Meteor5,
    ],
    challenges: [
      "Displaying complex technical specifications in a clear and engaging way",
      "Balancing high-quality visuals with fast website performance",
      "Creating an interactive experience for tech-savvy audiences",
    ],
    solutions: [
      "Implemented dynamic product showcases and interactive comparisons",
      "Optimized visuals and 3D assets for smooth performance",
      "Designed a modern, responsive layout suitable for all devices",
    ],
    testimonial: {
      quote:
        "Meteor’s website captures the essence of our technology — sleek, fast, and inspiring. It’s an effective showcase for our products and innovations.",
      author: "Ananya Sharma, Product Lead at Meteor Computing",
    },
    liveUrl: "https://meteor-nw2i.onrender.com",
  },
  {
    id: "6",
    title: "Reactron",
    category: "Saas Product",
    description: "Virtual chemistry lab for interactive experiments.",
    fullDescription:
      "Reactron Chemistry Lab is an advanced web-based simulation platform that brings the power of virtual experimentation to students and educators. Designed with a futuristic interface, it allows users to conduct chemistry experiments safely, visualize molecular interactions, and learn complex reactions through interactive modules. The platform bridges education and innovation, making science learning engaging and accessible anytime, anywhere.",
    image: assets.Lab1,
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
    gallery: [assets.Lab1, assets.Lab2, assets.Lab3],
    challenges: [
      "Developing real-time interactive simulations within browser limits",
      "Ensuring accurate visualization of molecular structures and reactions",
      "Designing an intuitive interface for both students and educators",
    ],
    solutions: [
      "Integrated WebGL-based 3D visualization for realistic experiment interactions",
      "Built modular simulation components for various chemistry topics",
      "Designed a futuristic, responsive interface with smooth animations",
    ],
    testimonial: {
      quote:
        "Reactron Chemistry Lab revolutionizes how students experience science. The interactive design and simulations make complex chemistry simple and fun to learn.",
      author: "Dr. Priya Nair, Head of Science Education Initiative",
    },
    liveUrl: "https://reactron.visualstech.in",
  },
  {
    id: "7",
    title: "Voice Agent",
    category: "Saas Product",
    description: "AI voice platform with multi-persona options.",
    fullDescription:
      "Voice Agent is an advanced SaaS solution that brings lifelike AI voices to various use cases — from friendly companionship to professional training. Users can choose from multiple personas such as Friendly Companion, Expert Teacher, Motivational Coach, Story Narrator, and Technical Expert, each designed with distinct tones and personalities. The platform is built for creators, educators, and businesses seeking to deliver natural, human-like audio experiences powered by cutting-edge AI voice synthesis.",
    image: assets.Voiceagent1,
    technologies: [
      "React",
      "Mern Stack",
      "Reservation API",
      "CMS Integration",
      "Cloud Deployment",
      "AI Voice Synthesis",
    ],
    duration: "2 months",
    client: "Gourmet Dining Experience",
    link: "/projects/sollu-voice-agent",
    gallery: [assets.Voiceagent1, assets.Voiceagent2, assets.Voiceagent3],
    challenges: [
      "Creating distinct and natural-sounding voice personas",
      "Ensuring real-time audio generation with minimal latency",
      "Building a scalable cloud-based SaaS architecture for global users",
    ],
    solutions: [
      "Integrated advanced AI voice models for emotion-rich speech synthesis",
      "Implemented efficient streaming and caching for real-time audio playback",
      "Developed a modular SaaS backend supporting multi-voice configuration and user management",
    ],
    testimonial: {
      quote:
        "Voice Agent transformed how we create and deliver voice content. The range of realistic personas makes it perfect for education, storytelling, and productivity tools.",
      author: "Rahul Menon, Product Manager at Voice Agent",
    },
    liveUrl: "https://sollu.visualstech.in",
  },
  {
    id: "8",
    title: "Viunix",
    category: "WebSites",
    description: "Professional site for display solutions.",
    fullDescription:
      "Viunix is a technology-driven web platform built to highlight innovative display and collaboration solutions, including Interactive Flat Panels (IFPs), commercial displays, wireless presentation systems, and digital classroom technologies. The website emphasizes product quality, functionality, and brand partnerships with leading display manufacturers. Designed for clarity and SEO performance, it positions Viunix as a trusted supplier in the UAE’s digital display market.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Mern Stack", "WebGL", "Three js", "TypeScript", "AWS"],
    duration: "1.2 months",
    client: "Viunix smart technologies.",
    link: "/projects/viunix",
    gallery: [assets.Viunix1, assets.Viunix2, assets.Viunix3, assets.Viunix4],
    challenges: [
      "Presenting a wide range of IFP and commercial display products with clarity",
      "Optimizing the site for strong SEO performance in the UAE market",
      "Creating a professional yet visually engaging design to appeal to corporate and educational buyers",
    ],
    solutions: [
      "Developed structured product pages with clear specifications and visuals",
      "Implemented SEO-focused content using keywords like 'interactive panels in Dubai' and 'IFP suppliers in UAE'",
      "Designed a sleek, responsive interface that enhances user trust and brand credibility",
    ],
    testimonial: {
      quote:
        "The Viunix website has elevated our brand presence in the UAE. Our inbound inquiries and visibility for IFP products have grown significantly since launch.",
      author: "Vasantha Kumar, Sales Head at Viunix",
    },
    liveUrl: "https://www.viunix.com",
  },
  {
    id: "9",
    title: "Le Doux",
    category: "Web Designs",
    description: "Premium bakery app for online orders.",
    fullDescription:
      "Le Doux is a luxury bakery web platform designed to provide customers with a delightful digital experience that mirrors the charm of a real artisan bakery. The website allows users to explore beautifully presented cakes, pastries, and desserts, customize their orders, make secure online payments, and schedule deliveries with ease. Built with scalability and design precision, Le Doux focuses on blending aesthetics with functionality — offering a smooth, responsive interface and elegant animations. The admin panel enables efficient order management, product updates, and promotional campaigns for the brand.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "1 months",
    client: "Le Doux Bakery Pvt. Ltd.",
    link: "/projects/le-doux",
    gallery: [assets.LeDoux1, assets.LeDoux2, assets.LeDoux3, assets.LeDoux4],
    challenges: [
      "Creating a luxury bakery experience through digital design and storytelling",
      "Integrating product customization options for cakes and desserts",
      "Optimizing site speed while maintaining high-quality product visuals",
    ],
    solutions: [
      "Developed a visually rich and responsive UI using React and Tailwind CSS",
      "Implemented secure payment flow and order scheduling through Stripe and Firebase",
      "Optimized high-resolution images and SEO metadata for improved visibility and performance",
    ],
    testimonial: {
      quote:
        "Our new Le Doux bakery website perfectly reflects our brand’s elegance and craftsmanship. Online orders and customer engagement have grown tremendously since launch.",
      author: "Rohit Sharma, Founder of Le Doux Bakery",
    },
    liveUrl: "https://le-doux-bakery.onrender.com",
  },
  {
    id: "10",
    title: "Sweet Dreems",
    category: "Web Designs",
    description: "Elegant online bakery ordering platform.",
    fullDescription:
      "Sweet Dreems Bakery is a beautifully designed web application built to bring the charm of a local bakery into the digital world. It allows customers to browse a curated selection of cakes, pastries, and desserts, customize orders, and schedule deliveries with ease. The platform emphasizes user experience with smooth animations, responsive design, and intuitive navigation. Optimized for performance and SEO, the website enhances the brand’s online visibility while maintaining its handcrafted identity. It also includes an admin dashboard for managing orders, inventory, and promotions efficiently.",
    image: assets.sd1,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "3.8 days",
    client: "Sweet Dreems Bakery Pvt. Ltd.",
    link: "/projects/sweet-dreems-bakery",
    gallery: [assets.sd1, assets.sd2, assets.sd3, assets.sd4],
    challenges: [
      "Showcasing artisan bakery products with aesthetic presentation and performance balance",
      "Integrating an easy-to-use order customization and delivery scheduling system",
      "Ensuring strong SEO and fast load times for high customer engagement",
    ],
    solutions: [
      "Designed a visually rich and responsive UI with warm bakery-inspired tones",
      "Built dynamic order customization, cart, and scheduling features using React and MongoDB",
      "Implemented SEO-friendly content with strong local search keywords like 'online bakery in Dubai' and 'custom cakes delivery UAE'",
    ],
    testimonial: {
      quote:
        "Our customers love the new Sweet Dreems website! It perfectly captures our bakery’s warmth and creativity, and online orders have grown steadily since launch.",
      author: "Anjali Thomas, Owner of Sweet Dreems Bakery",
    },
    liveUrl: "https://sweet-dreams-a1sv.onrender.com",
  },
  {
    id: "11",
    title: "Nebula Bakery",
    category: "Web Designs",
    description: "Futuristic online bakery for custom desserts.",
    fullDescription:
      "Nebula Bakery is a next-generation bakery web application that combines artistry and technology to deliver a seamless digital dessert experience. The platform enables customers to explore a wide range of handcrafted cakes, pastries, and sweets through a visually immersive interface. With options for custom cake designs, instant ordering, and real-time delivery updates, Nebula Bakery redefines online confectionery experiences. The website emphasizes performance, aesthetics, and user delight — integrating a clean UI with dynamic animations and intuitive navigation. Its admin dashboard empowers bakery staff to manage products, track orders, and run promotional campaigns effortlessly.",
    image: assets.nb1,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "1.6 months",
    client: "Nebula Bakery Pvt. Ltd.",
    link: "/projects/nebula-bakery",
    gallery: [assets.nb1, assets.nb2, assets.nb3, assets.nb4],
    challenges: [
      "Designing a futuristic yet cozy bakery interface that stands out digitally",
      "Creating smooth product filtering and customization for a wide range of desserts",
      "Ensuring high-speed performance with rich visuals and animations",
    ],
    solutions: [
      "Developed an elegant and performance-optimized front end using React and Tailwind CSS",
      "Implemented Firebase for real-time order tracking and seamless backend synchronization",
      "Used Framer Motion for immersive animations that enhance brand storytelling",
    ],
    testimonial: {
      quote:
        "Nebula Bakery’s new website has taken our brand to the next level — it’s elegant, modern, and incredibly easy for our customers to use. Online engagement has grown beyond expectations.",
      author: "Sneha Kapoor, Founder of Nebula Bakery",
    },
    liveUrl: "https://nebula-bakery.onrender.com",
  },
  {
    id: "12",
    title: "Rajasthani Rasoi",
    category: "WebSites",
    description: "Authentic Rajasthani family restaurant",
    fullDescription:
      "Rajasthani Rasoi is a modern family restaurant web platform that celebrates the rich culinary heritage of Rajasthan through immersive digital experiences. The site lets customers explore signature thalis, regional delicacies, and chef’s specials in a vibrant, visually appealing interface. Users can customize meal orders, reserve tables instantly, and track delivery in real-time. The platform delivers seamless, high-performance browsing with elegant UI elements, lively motion effects, and intuitive navigation. The admin dashboard enables staff to manage menu items, oversee reservations, and run exclusive offers with ease.",
    image: assets.RajasthanHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "1 month",
    client: "Rajasthani Rasoi Family Restaurant",
    link: "/projects/rajasthani-rasoi",
    gallery: [
      assets.Rajasthan1,
      assets.Rajasthan2,
      assets.Rajasthan3,
      assets.Rajasthan4,
    ],
    challenges: [
      "Creating a digital restaurant experience that blends tradition with modern aesthetics",
      "Building robust table reservation and meal customization systems",
      "Maintaining fast, responsive performance despite rich visuals",
    ],
    solutions: [
      "Designed an engaging and performance-driven front end using React and Tailwind CSS",
      "Integrated Firebase to support real-time reservations, order tracking, and dynamic menu updates",
      "Leveraged Framer Motion to add immersive animations that highlight Rajasthani culture and hospitality",
    ],
    testimonial: {
      quote:
        "The website beautifully captures the spirit of Rajasthani cuisine and hospitality. Reservations and online orders are a breeze, and customer feedback has been stellar.",
      author: "Rajendra Singh, Owner of Rajasthani Rasoi",
    },
    liveUrl: "https://rajasthanrasoi.visualstech.in",
  },
  {
    id: "13",
    title: "Skyline Residencies",
    category: "WebSites",
    description: "Premium real estate platform for modern urban living.",
    fullDescription:
      "Skyline Residencies is a cutting-edge real estate web application that redefines property discovery and management for urban families and investors. The platform showcases luxury apartments, penthouses, and curated residences in a visually stunning interface, allowing users to browse detailed listings, schedule property visits, and track purchase progress in real-time. Seamless navigation, dynamic visuals, and high-performance browsing create an effortless user journey. The admin dashboard empowers property managers to update listings, manage appointments, and launch promotional campaigns easily.",
    image: assets.SkylineHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "2 weeks",
    client: "Skyline Residencies",
    link: "/projects/skyline",
    gallery: [
      assets.Skyline1,
      assets.Skyline2,
      assets.Skyline3,
      assets.Skyline4,
    ],
    challenges: [
      "Designing an immersive property platform that balances aesthetics and functionality",
      "Developing robust scheduling and lead management features for site visits",
      "Ensuring rapid load times and smooth interactions with rich property visuals",
    ],
    solutions: [
      "Built a visually impactful and performance-optimized front end using React and Tailwind CSS",
      "Implemented Firebase for instant appointment scheduling, real-time updates, and secure data sync",
      "Utilized Framer Motion for elegant animations that enhance the luxury branding of Skyline Residencies",
    ],
    testimonial: {
      quote:
        "Skyline Residencies' new platform makes property discovery seamless and visually engaging. Our site visits and client engagement have increased significantly since launch.",
      author: "Meera Jain, Marketing Director at Skyline Residencies",
    },
    liveUrl: "https://skylineestate.visualstech.in",
  },
  {
    id: "14",
    title: "Pixmart",
    category: "E-commerce",
    description: "Premium online fashion platform for modern shoppers.",
    fullDescription:
      "Pixmart is a next-generation e-commerce platform elevating the shopping experience for fashion-forward customers. The site showcases exclusive apparel collections, curated fashion drops, and popular brands in a vibrant, visually captivating interface. Users can browse high-resolution product galleries, customize outfit selections, and enjoy secure one-tap checkout. Smooth navigation, dynamic visuals, and rapid browsing create a premium retail journey. The admin dashboard equips store managers to update product catalogs, monitor order flows, and launch flash sales effortlessly.",
    image: assets.PixmartHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "1 month",
    client: "Pixmart Clothing Pvt. Ltd.",
    link: "/projects/pixmart",
    gallery: [
      assets.Pixmart1,
      assets.Pixmart2,
      assets.Pixmart3,
      assets.Pixmart4,
      assets.Pixmart5,
      assets.Pixmart6,
      assets.Pixmart7,
    ],
    challenges: [
      "Creating a visually immersive shopping experience that drives engagement and conversions",
      "Engineering intuitive product browsing, filtering, and outfit customization flows",
      "Ensuring lightning-fast site performance even with rich visuals and asset-heavy pages",
    ],
    solutions: [
      "Developed an elegant and high-performing front end with React and Tailwind CSS",
      "Leveraged Firebase for real-time inventory sync, order tracking, and personalized recommendations",
      "Used Framer Motion to deliver sleek animations that enhance brand appeal and user delight",
    ],
    testimonial: {
      quote:
        "Pixmart’s new site blends fashion with technology perfectly. Our customers love the browsing experience, and sales have seen impactful growth since launch.",
      author: "Aarav Shah, Director at Pixmart Clothing",
    },
    liveUrl: "https://pixmart.visualstech.in",
  },
  {
    id: "15",
    title: "Studio Shodwe",
    category: "E-commerce",
    description: "Smart electronics shopping experience for modern consumers.",
    fullDescription:
      "Studio Shodwe is a future-ready e-commerce solution that transforms how customers discover and purchase cutting-edge electronics. The platform showcases curated gadgets, smart devices, and top brands in a sleek, interactive environment. Users can browse high-resolution product galleries, personalize device specifications, and enjoy secure and streamlined checkout processes. Studio Shodwe delivers snappy navigation, dynamic visuals, and a frictionless buying journey. The admin dashboard empowers sellers to manage product listings, monitor inventory, and launch promotional offers with ease.",
    image: assets.ShodweHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "3 weeks",
    client: "Spark Electronics",
    link: "/projects/studio-shodwe",
    gallery: [assets.Shodwe1, assets.Shodwe2, assets.Shodwe3],
    challenges: [
      "Designing an interactive shopping experience for tech enthusiasts",
      "Implementing advanced product filtering and technical specification customization",
      "Maintaining ultra-fast performance amidst rich media content and product catalogs",
    ],
    solutions: [
      "Created a polished and high-speed UI with React and Tailwind CSS",
      "Used Firebase for real-time inventory management, order tracking, and product personalization",
      "Integrated Framer Motion for modern animations that elevate user engagement and trust",
    ],
    testimonial: {
      quote:
        "Studio Shodwe sets a new benchmark in online electronics retail. Customers love the intuitive navigation and product configurators, and our sales have surged.",
      author: "Sahil Verma, Product Lead at Spark Electronics",
    },
    liveUrl: "https://studioshodwe.visualstech.in",
  },
  {
    id: "16",
    title: "Heritage Ancient Marketplace",
    category: "E-commerce",
    description:
      "Discover, collect, and shop authentic heritage and artisan treasures.",
    fullDescription:
      "Heritage Ancient Marketplace is an innovative e-commerce platform bringing timeless art, antiques, and handmade crafts to the digital age. Visitors immerse themselves in curated collections—from rare artifacts and cultural heirlooms to masterfully crafted home decor—in a visually rich, evocative experience. The marketplace lets users explore detailed galleries, request custom pieces from artisans, and purchase securely with convenient delivery options. Easy navigation, artistic visuals, and seamless performance make shopping engaging and memorable. The admin dashboard allows sellers and curators to manage treasures, track orders, and run themed campaigns effortlessly.",
    image: assets.HeritageHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "1 month",
    client: "Ancient Heritage Collective",
    link: "/projects/heritage",
    gallery: [
      assets.Heritage1,
      assets.Heritage2,
      assets.Heritage3,
      assets.Heritage4,
    ],
    challenges: [
      "Crafting a soulful shopping experience that honors cultural roots and story",
      "Enabling artisan customization, provenance tracking, and secure transactions",
      "Ensuring fast, consistent performance while displaying rich galleries and legacy collections",
    ],
    solutions: [
      "Developed an immersive, responsive UI with React and Tailwind CSS, blending heritage motifs and modern design",
      "Leveraged Firebase for real-time seller curation, order management, and secure artifact authentication",
      "Used Framer Motion to deliver artistic, story-driven animations that celebrate tradition and craftsmanship",
    ],
    testimonial: {
      quote:
        "Heritage Ancient Marketplace bridges the old and the new, making it easy for collectors and art lovers to connect with authentic artisans. The storytelling and seamless buying experience set the platform apart.",
      author: "Priya Desai, Curator at Ancient Heritage Collective",
    },
    liveUrl: "https://heritage.visualstech.in",
  },
  {
    id: "17",
    title: "The Riverside",
    category: "website",
    description: "Family restaurant serving fresh cuisine in a cozy setting.",
    fullDescription:
      "The Riverside is a celebrated family restaurant, bar, and café blending two decades of tradition with modern innovation. Guests enjoy signature dishes made from fresh, locally-sourced ingredients—whether for intimate dinners, casual lunches, or special celebrations. The contemporary interface lets users browse the menu, reserve tables, or order online, with seamless navigation and vibrant visuals capturing the Riverside ambiance. Proprietors manage reservations, update menus, and run special campaigns through a streamlined admin dashboard, ensuring premium service and guest satisfaction.",
    image: assets.RiversideHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "2 weeks",
    client: "The Riverside Restaurant",
    link: "/projects/theriverside",
    gallery: [
      assets.Riverside5,
      assets.Riverside2,
      assets.Riverside3,
      assets.Riverside4,
    ],
    challenges: [
      "Conveying the restaurant’s long-standing heritage digitally",
      "Integrating online reservations and quick ordering",
      "Ensuring rich visuals with fast load times",
    ],
    solutions: [
      "Built a responsive, inviting UI using React and Tailwind CSS",
      "Implemented Firebase for instant booking and menu management",
      "Added Framer Motion animations to enhance user engagement",
    ],
    testimonial: {
      quote:
        "The Riverside website captures our restaurant’s heart and flavor perfectly.",
      author: "Linda S., Regular Guest",
    },
    liveUrl: "https://theriverside.visualstech.in/",
  },
  {
    id: "18",
    title: "Elite Sports Centre",
    category: "website",
    description:
      "Premium sports facility with expert coaching across disciplines.",
    fullDescription:
      "Elite Sports Centre is a premier destination for athletes of all levels, offering world-class volleyball, football, badminton, and cricket facilities. The platform empowers visitors to book courts, access schedules, and manage their profiles easily online. Enjoy flexible booking hours, modern amenities, and expert staff dedicated to your growth. The admin dashboard allows management of bookings, facilities, coaching schedules, and user progress in a seamless workflow.",
    image: assets.EliteSportsHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "3 weeks",
    client: "Elite Sports Centre",
    link: "/projects/elite-sports",
    gallery: [
      assets.EliteSports1,
      assets.EliteSports2,
      assets.EliteSports3,
      assets.EliteSports4,
    ],
    challenges: [
      "Providing a streamlined, digital sports booking solution",
      "Maintaining top-tier facility standards and scheduling",
      "Enhancing user experience for athletes and staff",
    ],
    solutions: [
      "Developed a responsive, user-first UI with React and Tailwind CSS",
      "Integrated Firebase for bookings, user management, and facility updates",
      "Used Framer Motion for energetic, modern Animations",
    ],
    testimonial: {
      quote:
        "Elite Sports Centre makes booking courts and coaching effortless. The facilities and staff have truly elevated our playing experience.",
      author: "Aarav Kumar, Athlete",
    },
    liveUrl: "https://elite-sports-4lvi.onrender.com",
  },
  {
    id: "19",
    title: "Velin Wallet",
    category: "E-commerce",
    description: "Handcrafted leather wallets, elegant and sustainable design.",
    fullDescription:
      "Velin Wallet is a premium e-commerce platform for luxury leather goods. Shop men’s and women’s wallets, card holders, and coin purses crafted from sustainable materials. Discover Scandinavian-inspired designs, access new arrivals and bestsellers, and enjoy a seamless shopping experience. Users easily browse by category, view product details, and order with fast checkout. The admin dashboard allows for product management, campaign launches, and customer support.",
    image: assets.VellinWalletHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "2 weeks",
    client: "Velin Wallet",
    link: "/projects/velin-wallet",
    gallery: [
      assets.VellinWallet1,
      assets.VellinWallet2,
      assets.VellinWallet3,
      assets.VellinWallet4,
    ],
    challenges: [
      "Showcasing premium products with sophisticated, user-friendly visuals",
      "Implementing intuitive category filtering and streamlined checkout",
      "Supporting real-time updates and easy client management",
    ],
    solutions: [
      "Built an elegant, responsive UI with React and Tailwind CSS",
      "Leveraged Firebase for dynamic product and campaign management",
      "Used Framer Motion for refined, smooth page transitions",
    ],
    testimonial: {
      quote:
        "Velin Wallet’s site is the perfect blend of minimalism and luxury. Shopping here feels seamless and special.",
      author: "Emily Jensen, Customer",
    },
    liveUrl: "https://velin-wallet-ecommerce.onrender.com",
  },
  {
    id: "20",
    title: "Soundwave",
    category: "website",
    description: "Next-gen podcast streaming and discovery platform online.",
    fullDescription:
      "Soundwave is a modern podcast platform that redefines how you experience audio storytelling. Discover and listen to trending episodes, explore diverse categories, and curate your own playlists. Advanced search, personal libraries, and seamless playback make content exploration effortless. The admin dashboard enables episode management, featured lists, and community engagement within a vibrant, dark-themed UI.",
    image: assets.SoundwaveHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "3 weeks",
    client: "Soundwave",
    link: "/projects/soundwave",
    gallery: [
      assets.Soundwave1,
      assets.Soundwave2,
      assets.Soundwave3,
      assets.Soundwave4,
      assets.Soundwave5,
    ],
    challenges: [
      "Designing an intuitive, visually rich audio platform",
      "Optimizing real-time search and personalized recommendations",
      "Providing robust playlist and library management features",
    ],
    solutions: [
      "Developed immersive UI/UX using React, Tailwind CSS, and Framer Motion",
      "Implemented Firebase for real-time data sync and user content management",
      "Integrated seamless playback and playlist handling for a premium experience",
    ],
    testimonial: {
      quote:
        "Soundwave makes discovering new podcasts easy and engaging. The personalized recommendations and smooth design keep me coming back.",
      author: "Ritika Sen, Podcast Enthusiast",
    },
    liveUrl: "https://soundwave.visualstech.in/",
  },
  {
    id: "21",
    title: "Ingoude University",
    category: "web application",
    description: "Personalized eLearning platform for modern learners.",
    fullDescription:
      "Ingoude University is a feature-rich online learning platform empowering students and professionals. With personalized courses, interactive dashboards, analytics, and reporting, users engage in tailored learning experiences. It supports flexible scheduling, demo bookings, and integrates modern design for easy navigation. The admin dashboard enables course management, enrollment tracking, and feedback insights for educators.",
    image: assets.IngoudeHead,
    technologies: [
      "MERN Stack",
      "Firebase",
      "Stripe API",
      "Tailwind CSS",
      "Framer Motion",
    ],
    duration: "3 weeks",
    client: "Ingoude University",
    link: "/projects/ingoude",
    gallery: [
      assets.Ingoude1,
      assets.Ingoude2,
      assets.Ingoude3,
      assets.Ingoude4,
      assets.Ingoude5,
    ],
    challenges: [
      "Delivering interactive, personalized learning and reporting",
      "Simplifying course management for students and educators",
      "Ensuring fast, scalable platform performance",
    ],
    solutions: [
      "Developed student-centric, responsive UI with React and Tailwind CSS",
      "Used Firebase for real-time course/data management",
      "Added modern analytics, booking, and reporting features",
    ],
    testimonial: {
      quote:
        "Ingoude’s platform made our eLearning journey flexible and insightful. The user experience and analytics stand out.",
      author: "Michael Brown, Student",
    },
    liveUrl: "https://institute-demo-samq.onrender.com",
  },
];
