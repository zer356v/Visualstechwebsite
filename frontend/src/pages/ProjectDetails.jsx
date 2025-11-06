import { useParams, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "../components/Layout";
import { projects } from "../components/projects/projects";
import { useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projects.find(
    (p) => p.link.toLowerCase() === "/projects/" + id.toLowerCase()
  );

  if (!project) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold text-red-500">Project Not Found</h1>
          <p className="mt-4 text-gray-600">
            The project you're looking for doesn't exist.
          </p>
          {/* Back button with new design */}
          <a
            href="/projects"
            className="cursor-pointer relative py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start transition-all duration-1000 ease-in-out shadow-[inset_1px_2px_5px_#00000040] mt-8"
            style={{
              background:
                "linear-gradient(90deg, #74c7fc 25%, #fff 100%, #000 0%)",
              border: "2px solid transparent",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #74c7fc 25%, #fff 100%, #000 0%)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #74c7fc 25%, #fff 100%, #000 0%)")
            }
          >
            <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
              <div className="w-[0%] group-hover:w-full transition-all duration-1000 ease-in-out bg-[#b8dcf8]/50 rounded-full"></div>
              <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] aspect-square bg-[#072265] transition-all duration-1000 ease-in-out group-hover:bg-white w-10 h-10">
                <div className="text-white group-hover:text-[#072265] group-hover:-rotate-45 transition-all duration-1000 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 28 28"
                    width="28"
                    height="28"
                  >
                    <circle cx="14" cy="14" r="14" fill="#072265" />
                    <path
                      d="M14 7.5l6 6m0 0l-6 6m6-6H6"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-1000 ease-in-out group-hover:text-[#072265] text-[#072265] font-semibold">
              Back to Projects
            </div>
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="relative w-full h-[48vh] md:h-[60vh] bg-[#d9d4c7]/50 flex items-center justify-center rounded-b-3xl shadow-2xl overflow-hidden">
        {/* BG image with dark overlay */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.09 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.25 }}
          style={{
            backgroundImage: `url(${project.image})`,
            filter: "brightness(0.60) blur(2px)",
            zIndex: 1,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container-custom relative z-10 w-full flex flex-col items-center pb-8 pt-8">
          {/* Project Title */}
          <motion.h1
            className="headline-base headline-hero mb-4 impact"
            style={{ fontWeight: 800, color: "white" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span
              className="emphasis text-white"
              style={{ fontSize: "clamp(2.1rem, 5vw, 8.2rem)" }}
            >
              {project.title}
            </span>
          </motion.h1>
          {/* Category badge */}
          <span
            className="inline-block bg-[#249edc] text-white text-xs font-bold rounded-full px-5 py-2 mb-6 shadow"
            style={{ letterSpacing: ".06em" }}
          >
            {project.category}
          </span>
          {/* Catchy Hero Description */}
          <motion.div
            className="max-w-2xl mx-auto mt-0 text-center headline-base headline-hero"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span
              className="impact text-[#74c7fc] font-extrabold"
              style={{ fontSize: "clamp(1.25rem,3vw,2rem)" }}
            >
              <span className="lead text-white font-bold">
                {project.description}
              </span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-[#d9d4c7]/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Overview */}
              <div className="bg-white/90 backdrop-blur-lg border border-[#e3f2fd] rounded-2xl p-8 mb-10 shadow-lg">
                <h2 className="text-2xl impact text-[#072265] mb-6">
                  <span className="emphasis">Project Overview</span>
                </h2>
                <div className="lead text-[#3178c6] font-inter mb-6">
                  <p className="inter">{project.fullDescription}</p>
                </div>
              </div>
              {/* Challenges & Solutions */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white/90 backdrop-blur-lg border border-[#e3f2fd] rounded-2xl p-8">
                  <h2 className="text-xl emphasis text-[#249edc] mb-5">
                    Challenges
                  </h2>
                  <ul className="list-disc list-inside inter text-[#3b3a40] space-y-2">
                    {project.challenges?.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/90 backdrop-blur-lg border border-[#e3f2fd] rounded-2xl p-8">
                  <h2 className="text-xl emphasis text-[#249edc] mb-5">
                    Solutions
                  </h2>
                  <ul className="list-disc list-inside inter text-[#3b3a40] space-y-2">
                    {project.solutions?.map((solution, index) => (
                      <li key={index}>{solution}</li>
                    ))}
                  </ul>
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
                  <div className="bg-[#249edc]/10 border border-[#e3f2fd] backdrop-blur-lg rounded-2xl p-8">
                    <div className="flex items-center space-x-4 mb-3">
                      <svg
                        className="w-8 h-8 text-[#249edc]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391C14.017 10.257 16.748 8 20.322 8v2c-1.927 0-3.306 1.504-3.306 3.609V21h-2.999zm-8 0v-7.391C6.017 10.257 8.748 8 12.322 8v2c-1.927 0-3.306 1.504-3.306 3.609V21H6.017z" />
                      </svg>
                      <h2 className="text-xl font-bold text-[#144678] emphasis">
                        Client Testimonial
                      </h2>
                    </div>
                    <p className="text-lg lead text-[#3178c6] italic mb-5 inter">
                      {project.testimonial.quote}
                    </p>
                    <p className="text-[#072265] inter font-medium">
                      {project.testimonial.author}
                    </p>
                  </div>
                </motion.div>
              )}
              {/* Project Gallery */}
              {project.gallery && (
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h2 className="text-2xl impact text-[#072265] mb-6">
                    <span className="emphasis">Project Gallery</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, idx) => (
                      <motion.div
                        key={idx}
                        className="rounded-xl overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - image ${idx + 1}`}
                          className="w-full h-[180px] object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  {/* Fullscreen Modal */}
                  <AnimatePresence>
                    {selectedImage && (
                      <motion.div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
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
                          <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-black rounded-full p-2 transition"
                          >
                            ✕
                          </button>
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
              )}
            </motion.div>
            {/* Side card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-white/95 backdrop-blur-lg border border-[#e3f2fd] rounded-2xl p-8 sticky top-20">
                <h2 className="text-xl impact text-[#072265] mb-6">
                  <span className="emphasis">Project Details</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="emphasis text-[#249edc]">Client</h3>
                    <p className="inter text-[#072265] mt-1">
                      {project.client}
                    </p>
                  </div>
                  <div>
                    <h3 className="emphasis text-[#249edc]">Duration</h3>
                    <p className="inter text-[#072265] mt-1">
                      {project.duration}
                    </p>
                  </div>
                  <div>
                    <h3 className="emphasis text-[#249edc]">Technologies</h3>
                    <div className="flex flex-wrap mt-2 gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#249edc]/10 text-[#249edc] border border-[#e3f2fd] px-3 py-1 rounded-full text-xs font-semibold inter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Live Website (your gradient/arrow button) */}
                {project.liveUrl && (
                  <div className="mt-8">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer relative py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start transition-all duration-1000 ease-in-out shadow-[inset_1px_2px_5px_#00000040]"
                      style={{
                        background:
                          "linear-gradient(90deg, #74c7fc 25%, #fff 100%, #000 0%)",
                        border: "2px solid transparent",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.background =
                          "linear-gradient(90deg, #74c7fc 25%, #fff 100%, #000 0%)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.background =
                          "linear-gradient(90deg, #74c7fc 25%, #fff 100%, #000 0%)")
                      }
                    >
                      <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                        <div className="w-[0%] group-hover:w-full transition-all duration-1000 ease-in-out bg-[#b8dcf8]/50 rounded-full"></div>
                        <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] aspect-square bg-[#072265] transition-all duration-1000 ease-in-out group-hover:bg-white w-10 h-10">
                          <div className="text-white group-hover:text-[#072265] group-hover:-rotate-45 transition-all duration-1000 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 28 28"
                              width="28"
                              height="28"
                            >
                              <circle cx="14" cy="14" r="14" fill="#072265" />
                              <path
                                d="M14 7.5l6 6m0 0l-6 6m6-6H6"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-1000 ease-in-out group-hover:text-[#072265] text-[#072265] font-semibold">
                        Live Website
                      </div>
                    </a>
                  </div>
                )}
                {/* Back to Projects - also new pill/gradient/arrow design */}
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
