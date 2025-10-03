import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const blogData = [
  // SaaS Products
  {
    id: 1,
    title: "Virtual Chemistry Lab: Revolutionizing Science Education with SaaS",
    date: "June 13, 2025",
    author: "Visuals Tech Team",
    category: "SaaS & Software",
    excerpt:
      "Discover how Virtual Chemistry Lab, our innovative SaaS platform, is transforming the way students learn chemistry online. Explore interactive experiments, real-time simulations, and a smarter approach to science education.",
    image:
      (assets.Virtual_lab_visualstech),
  },
  // AI & Tools
  {
    id: 2,
    title: "Learn English Faster with Our AI Voice Assistant",
    date: "August 25, 2025",
    author: "Visuals Tech Team",
    category: "AI & Tools",
    excerpt:
      "Explore how our AI-powered voice assistant helps users improve their English speaking skills with real-time practice, personalized feedback, and interactive conversations. Making language learning smarter and more accessible.",
    image:
      (assets.Voice_agent),
  },

  // E-commerce & Apps
  {
    id: 3,
    title: "Building a Fully Functional Food Delivery App for Modern Users",
    date: "March 13, 2025",
    author: "Nayan Visuals Tech Team Memqber",
    category: "E-commerce & Apps",
    excerpt:
      "Learn how we developed a feature-rich food delivery application that connects restaurants with customers seamlessly. From real-time tracking to secure payments, explore how our app delivers convenience and efficiency.",
    image:
      (assets.South_spice),
  },
  // Development & Case Studies
  {
    id: 4,
    title: "Building a Scalable Microservice Marketplace App for Modern Businesses",
    date: "ongoing processing",
    author: "Visuals Tech Team",
    category: "Development & Case Studies",
    excerpt:
      "Dive into our journey of developing a robust microservice-based marketplace app for Android and beyond. Learn how we ensured scalability, modularity, and performance to meet the needs of today’s dynamic market.",
    image:
      (assets.Upcomming_microservice_app),
  },
  // Marketing Tech Trends
  {
    id: 5,
    title: "How Students Are Learning SEO Tools and Exploring the Marketplace in 2025",
    date: "September 26, 2025",
    author: "SAI Visuals Tech Team Member",
    category: "Tech Trends",
    excerpt:
      "Discover how today’s students are mastering SEO tools to grow websites, improve digital marketing skills, and explore opportunities in the online marketplace. Learn which tools are popular and how they are shaping the next generation of digital professionals.",
    image:
      (assets.Seo_thumbnail),
  },
];

export default function BlogPage() {
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === activeCategory);

  return (
    <Layout>
      <div className="font-sans bg-white text-gray-900">
        {/* Hero Section with Floating Icons */}
        <section className="relative text-center py-28 bg-gradient-to-r from-indigo-50 via-white to-purple-50 overflow-hidden">
          <motion.h1
            className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Insights & Ideas
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore our latest blogs on design, technology, and innovation.
          </motion.p>
          {/* Floating circles */}
          <motion.div
            className="absolute top-10 left-10 w-16 h-16 rounded-full bg-indigo-200 opacity-40"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-purple-200 opacity-30"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </section>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mt-10 mb-6">
          {["All", "SaaS & Software", "Tech Trends", "Development & Case Studies", "AI & Tools", "E-commerce & Apps"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 hover:bg-indigo-100 text-gray-700"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Blog + Sidebar */}
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 py-12">
          {/* Blog Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {filteredBlogs.slice(0, visibleBlogs).map((blog, index) => (
              <motion.div
                key={blog.id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {blog.date} • {blog.author}
                  </p>
                  <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                  <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600">
                    {blog.category}
                  </span>
                  <div className="mt-4">
                    <Link 
                    to={`/blogs/${blog.id}`}>
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* About Section */}
            <motion.div
              className="bg-gray-50 p-6 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-lg mb-3">About Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visuals Tech is shaping the future of SaaS, Tools, and
                Innovation with impactful digital solutions.
              </p>
            </motion.div>

            {/* Trending Section */}
            <motion.div
              className="bg-gray-50 p-6 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="font-semibold text-lg mb-3">Trending Topics</h3>
              <ul className="space-y-3 text-sm text-indigo-600">
                <li><a href="#" className="hover:underline">AI SaaS in Education</a></li>
                <li><a href="#" className="hover:underline">Future of Remote Work Tools</a></li>
                <li><a href="#" className="hover:underline">Video-First Marketing</a></li>
              </ul>
            </motion.div>

            {/* Newsletter CTA */}
            <motion.div
              className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-2xl text-white shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="font-semibold text-lg mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sm mb-4">
                Stay ahead with insights, trends, and updates from Visuals Tech.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                  Subscribe
                </button>
              </form>
            </motion.div>
          </aside>
        </section>
        {/* Load More Button */}
        {visibleBlogs < filteredBlogs.length && (
          <div className="flex justify-center pb-12">
            <button
              onClick={() => setVisibleBlogs(visibleBlogs + 2)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              Load More
            </button>
          </div>
        )}

        {/* Milestone Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Visuals Tech Journey 🚀
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "2023", milestone: "Founded with a vision to innovate." },
              { year: "2024", milestone: "Launched SaaS billing software." },
              { year: "2025", milestone: "AI-powered tools for global clients." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-indigo-600">
                  {item.year}
                </h3>
                <p className="text-gray-600 mt-3">{item.milestone}</p>
              </motion.div>
            ))}
          </div>
        </section>

        
      </div>
    </Layout>
  );
}
