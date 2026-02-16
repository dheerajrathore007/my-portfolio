import { motion } from "framer-motion";

const projects = [
  {
    title: "Vitals Kingdom – E-Commerce Website",
    desc: "Production-ready e-commerce website with product listing, cart management, and responsive UI for a real business.",
    tech: "React, Redux Toolkit, Tailwind CSS, MongoDB",
    github: "https://github.com/dheerajrathore007/rbac-application",
    live: "https://vitalskingdom.com",
  },
  {
    title: "RBAC Admin Dashboard",
    desc: "Responsive dashboard layout with charts and tables.",
    tech: "React, Redux, Tailwind CSS",
    github: "https://github.com/dheerajrathore007/rbac-application1",
    live: "https://rbac-application.netlify.app",
  },
  {
    title: "BrainsKart Application",
    desc: "Public API integration with loading & error handling.",
    tech: "React, Redux,Bootstrap",
    github: "https://github.com/yourusername/admin-dashboard",
    live: "https://admin-dashboard-demo.vercel.app",
  },
  {
    title: "Big Basket (UI clone)",
    desc: "Product listing, cart management using Redux Toolkit.",
    tech: "React, Axios,Bootstrap",
    github: "https://github.com/yourusername/api-integration-app",
    live: "https://api-integration-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">

      {/* Section Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-black-900 dark:text-cyan"
      >
        Projects
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-200 dark:border-gray-700 
            p-6 rounded-lg 
            bg-white dark:bg-gray-800
            shadow-sm hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 
              text-gray-900 dark:text-white">
              {project.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {project.desc}
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {project.tech}
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded 
                border border-gray-400 dark:border-gray-600
                text-gray-800 dark:text-gray-200
                hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm rounded 
                bg-blue-600 text-white 
                hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
