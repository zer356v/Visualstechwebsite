import { motion } from "framer-motion";

const splitFeatures = features => {
  const half = Math.ceil(features.length / 2);
  return [features.slice(0, half), features.slice(half)];
};

const Bulletin = () => (
  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-[#b5d5f2] via-[#e3f2fd] to-[#74c7fc] shadow-md mr-2">
    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
    </svg>
  </span>
);

const ServiceCard = ({ title, description, features, image }) => {
  const [leftFeatures, rightFeatures] = splitFeatures(features);

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto mb-14 bg-white/85 border border-[#e3f2fd] backdrop-blur-xl rounded-[2rem] shadow-2xl px-0 pt-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Image container: no BG, all-side padding, max width, fully rounded image */}
      <div className="w-full flex items-center justify-center p-8">
        <img
          src={image}
          alt={title}
          className="w-full max-w-5xl h-64 md:h-[350px] object-cover rounded-[2rem] shadow-lg"
          style={{ aspectRatio: "2.7/1" }}
        />
      </div>
      {/* Details */}
      <div className="flex flex-col px-10 pb-10 pt-7">
        <div className="services-card-lead mb-2">
          {title.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="emphasis">{title.split(" ").slice(-1)}</span>
        </div>
        <div className="font-inter lead text-[#3178c6] mb-6">{description}</div>
        {/* Features in 2 columns with stylized bulletins */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-1 mt-2">
          <div className="flex flex-col gap-2">
            {leftFeatures.map((feature, idx) => (
              <span key={idx} className="flex items-center emphasis text-[#144678] text-base mb-1">
                <Bulletin />
                {feature}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {rightFeatures.map((feature, idx) => (
              <span key={idx} className="flex items-center emphasis text-[#144678] text-base mb-1">
                <Bulletin />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
