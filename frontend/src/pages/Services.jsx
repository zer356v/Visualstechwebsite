import Layout from "../components/Layout";
import ServiceCard from "../components/services/ServiceCard";
import ContactCta from "../components/home/ContactCta";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet"; // ✅ SEO import

const services = [
  {
    id: "saas-applications",
    title: "SaaS Applications",
    description:
      "We build powerful SaaS platforms that streamline operations and deliver seamless digital experiences for your business.",
    features: [
      "Custom SaaS platform development",
      "Secure cloud-based architecture",
      "Scalable infrastructure for growth",
      "User-friendly dashboards",
      "Third-party API integrations",
      "Ongoing support and optimization",
    ],
    image:
      "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/cb7919b5-7f5d-40f2-8cd8-977e7b7c4b9a.png",
  },
  {
    id: "web-development",
    title: "Website Development",
    description:
      "We design and develop responsive, high-performance websites that reflect your brand identity and convert visitors into customers.",
    features: [
      "Custom business websites and landing pages",
      "Responsive design for all devices",
      "SEO-friendly website architecture",
      "CMS integration (WordPress, Strapi, etc.)",
      "Fast loading and optimized performance",
      "Maintenance and content updates",
    ],
    image:
      "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/b20f82f3-65e2-4647-9e89-04411520a875.png",
  },
  {
    id: "web-applications",
    title: "Web Application Development",
    description:
      "We build powerful, scalable, and user-friendly web applications using the latest technologies to enhance your business efficiency and customer engagement.",
    features: [
      "Custom web application design and development",
      "MERN, MEAN, and Next.js frameworks",
      "Secure authentication and user management",
      "Real-time data and analytics dashboards",
      "API integration and backend development",
      "Performance monitoring and ongoing support",
    ],
    image:
      "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/2dc26e7d-dd93-43a9-bf2b-4834a32aca43.png",
  },
  {
    id: "android-app-development",
    title: "Android App Development",
    description:
      "We create modern, high-performing Android applications that help businesses engage users and expand their digital reach effectively.",
    features: [
      "Custom Android app design and development",
      "Cross-platform support with React Native or Flutter",
      "API integration and backend connectivity",
      "Smooth UI/UX with modern material design",
      "Play Store deployment and optimization",
      "App maintenance and updates",
    ],
    image:
      "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/5f972322-230e-47e2-8dfb-7a1216548a94.png",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Boost your online presence and connect with your target audience through our data-driven digital marketing services.",
    features: [
      "SEO optimization and keyword strategy",
      "PPC campaign management",
      "Social media marketing and analytics",
      "Content creation and brand storytelling",
      "Email marketing automation",
      "Conversion rate optimization",
    ],
    image:
      "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/7ef220e9-0eec-45f9-9fc7-4bcb94016971.png",
  },
  {
    id: "billing-solutions",
    title: "Billing Solutions",
    description:
      "Automate your invoicing, payment tracking, and reporting processes with our reliable and customizable billing software for businesses of any size.",
    features: [
      "Customizable billing and invoicing",
      "Automated payment tracking",
      "Analytics and financial reports",
      "Secure payment integrations",
      "Scalable for any business size",
    ],
    image:
      "https://user-gen-media-assets.s3.amazonaws.com/gemini_images/4bc46934-5188-406b-85a8-39fca7ee6609.png",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* ✅ SEO Helmet Section */}
      <Helmet>
        <title>
          Our Services | Visuals Tech – Web Development, SaaS, and Digital
          Marketing
        </title>
        <meta
          name="description"
          content="Explore Visuals Tech’s professional IT services including web development, SaaS solutions, software tools, and digital marketing designed to help your business grow online."
        />
        <meta
          name="keywords"
          content="web development services, SaaS applications, software tools, digital marketing agency, SEO marketing, Visuals Tech"
        />
        <meta property="og:title" content="Our Services | Visuals Tech" />
        <meta
          property="og:description"
          content="Visuals Tech offers SaaS, software tools, and digital marketing services to help businesses thrive online."
        />
        <meta
          property="og:image"
          content="https://www.viunix.com/visualsbrowser.png"
        />
        <meta property="og:url" content="https://www.viunix.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.viunix.com/services" />

        {/* ✅ Structured Data for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Development and Digital Marketing",
            provider: {
              "@type": "Organization",
              name: "Visuals Tech",
              url: "https://www.viunix.com",
            },
            serviceType: "IT Solutions, SaaS Development, Marketing Services",
            areaServed: "Global",
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://www.viunix.com/contact",
            },
          })}
        </script>
      </Helmet>

      {/* Hero */}
        <section className="bg-[#d9d4c7]/50 relative overflow-hidden py-24 md:py-32">
          <div className="container-custom relative z-10 text-center">
            <motion.h1
              className="headline-base headline-section mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="lead">
                Our <span className="emphasis">Services</span>
              </span>
              <span className="impact">
                We Build Digital <span className="emphasis">Solutions</span> That
                <br className="sm:hidden" />
                <span> Drive</span> Businesses{" "}
                <span className="emphasis">Forward</span>
              </span>
            </motion.h1>
          </div>
        </section>

      <section className="bg-[#d9d4c7]/50 pt-0 py-12">
        <div className="container-custom">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <ContactCta />
    </Layout>
  );
};

export default Services;
