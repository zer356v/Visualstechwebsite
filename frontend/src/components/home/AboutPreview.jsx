import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

// 5 tiles for 3+2 bento grid
const aboutTiles = [
  {
    icon: assets.BentoIcon1,
    title: "Human-first, Tech-fueled",
    desc: "Empowering users through seamless, high-performing web and SaaS products.",
  },
  {
    icon: assets.BentoIcon2,
    title: "No Templates. Pure Brand.",
    desc: "Every app, website, and detail is custom-created—never generic, always your brand.",
  },
  {
    icon: assets.BentoIcon3,
    title: "Full-stack Expertise",
    desc: "From 3D labs to billing and e-comm: React, Node, Three.js, and MORE.",
  },
  {
    icon: assets.BentoIcon4,
    title: "Transparent Partnership",
    desc: "We work as your true digital team: open, collaborative, on-time—no hidden surprises.",
  },
  {
    icon: assets.BentoIcon5,
    title: "Results > Buzzwords",
    desc: "We deliver measurable performance, not just fancy words: speed, growth, and excellence.",
  },
];

const AboutPreview = () => (
  <section className="section-padding bg-[#d9d4c7]/50">
    <div className="container-custom">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="headline-base headline-section">
            <span className="lead">
              Why <span className="emphasis">Visuals Tech?</span>
            </span>
            <span className="impact">
              We build digital experiences for tomorrow’s <span className="emphasis">growth.</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#3178c6] font-inter text-lg font-semibold tracking-tight">
            We're a remote-first, India-born product team obsessed with web tech, 3D, and meaningful client results. Here’s what makes us unique.  
          </p>
        </div>

        {/* Bento grid: 3 on top, 2 wide below */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {aboutTiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              className={`
                relative rounded-2xl bg-white/80 border border-[#e3f2fd] shadow-xl backdrop-blur-lg p-7 flex flex-col items-start
                ${i === 3 ? "lg:col-span-2" : ""}
                ${i === 4 ? "lg:col-span-1" : ""}
                pt-20 min-h-[220px]
              `}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon, oversized and emerging from grid */}
              <img
                src={tile.icon}
                alt={tile.title}
                className="absolute -top-14 left-1/2 -translate-x-1/2 w-20 h-20 md:w-28 md:h-28 object-contain z-10 drop-shadow-lg"
                style={{ background: "transparent" }}
              />
              <div className="services-card-lead mb-2">{tile.title}</div>
              <div className="font-inter text-[#46658f] text-base md:text-lg">{tile.desc}</div>

            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/blogs" className="btn-primary text-lg px-8 py-3 font-semibold flex items-center gap-2 bg-gradient-to-r from-blue-500 to-[#144678] text-white shadow-lg rounded-full hover:scale-[1.04] transition-all duration-200">Learn More About Us</Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutPreview;
