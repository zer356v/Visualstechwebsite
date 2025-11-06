import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { assets } from "../../assets/assets";

// Card visual overlap parameters
const overlapGap = 72; // px visible peek
const cardPadding = 'p-16 md:p-24';

// Example services array (replace image paths with yours)
const services = [
  {
    category: "SaaS Development",
    title: 'SaaS Platform Development',
    description: 'We build scalable SaaS platforms that streamline business operations, boost productivity, and offer superior user experiences tailored for startups and enterprises.',
    image: assets.SaasService,
  },
  {
    category: "Web Application",
    title: 'Web Application Development',
    description: 'Our team specializes in building robust web applications for businesses and startups—from workflow management tools to collaboration platforms.',
    image: assets.WebAppService,
  },
  {
    category: "Website Design",
    title: 'Custom Website Services',
    description: 'We design and develop custom websites that reflect your brand’s identity, deliver seamless navigation, and convert visitors into loyal customers.',
    image: assets.WebDesignService,
  },
  {
    category: "E-commerce",
    title: 'E-commerce Platform Development',
    description: 'We create secure, scalable e-commerce platforms that drive online sales, integrate top payment gateways, and deliver a smooth shopping experience.',
    image: assets.EcommerceService,
  },
  {
    category: "SEO & Marketing",
    title: 'SEO Optimization',
    description: 'Boost your search engine visibility with our expert SEO strategies—audits, on-page optimization, keyword research, and link building for measurable results.',
    image: assets.SeoService,
  },
  {
    category: "Billing Solutions",
    title: 'Billing Software',
    description: 'Automate your invoicing, payment tracking, and reporting processes with our reliable and customizable billing software for businesses of any size.',
    image: assets.BillingService,
  }
];

// Soft blue for the cards
const baseBlue = [227, 242, 253]; // rgb for #e3f2fd (Google Blue-50)

const Services = () => (
  <section className="section-padding bg-[#d9d4c7]/50 -mt-4 relative z-10">
    <div className="container-custom">
      <motion.h2 
        className="text-center headline-base headline-section mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="lead">
          Our <span className="emphasis">Services</span>
        </span>
        <span className="impact">
          We Build Digital <span className="emphasis">Solutions</span> That <br className="sm:hidden" />
          <span>Drive</span> Businesses <span className="emphasis">Forward</span>
        </span>
      </motion.h2>

      <div className="relative flex flex-col gap-0">
        {services.map((service, index) => {
          // Glass first, solid others
          const bg = index === 0
            ? `rgba(${baseBlue[0]},${baseBlue[1]},${baseBlue[2]},0.92)`
            : `#e3f2fd`;
          return (
            <motion.div
              key={index}
              className={`
                sticky left-0
                rounded-2xl max-w-4xl mx-auto w-full flex flex-col md:flex-row
                items-center md:items-stretch justify-between
                ${index > 0 ? 'mt-56' : ''}
                transition-shadow duration-500 card-shadow
                border-[1.5px] border-[#b5d5f2] shadow-lg hover:shadow-2xl
                min-h-[340px] 
              `}
              style={{
                top: `${index * overlapGap}px`,
                zIndex: 10 + index,
                background: bg,
                backdropFilter: index === 0 ? "blur(6px)" : undefined
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: 0, scale: 1 }}
            >
              {/* Left: Text */}
              <div className={`relative z-10 ${cardPadding} flex-1`}>
                <span className="block mb-2 services-card-emphasis">{service.category}</span>
                <h3 className="services-card-lead font-normal mb-3">{service.title}</h3>
                <p className="font-inter text-base md:text-lg text-[#46658f]">{service.description}</p>
              </div>
              {/* Right: Image */}
              <div className="hidden md:flex flex-col justify-center flex-none pr-6">
                <div className="w-[260px] h-[320px] rounded-2xl shadow-lg ring-1 ring-[#b5d5f2] overflow-hidden bg-blue-100/30 flex items-center justify-center">
                  <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Link to="/services" className="btn-primary text-lg px-8 py-3 font-semibold flex items-center gap-2 bg-gradient-to-r from-blue-500 to-[#144678] text-white shadow-lg rounded-full hover:scale-[1.04] transition-all duration-200">
          Explore All Services
        </Link>
      </motion.div>
    </div>
  </section>
);

export default Services;
