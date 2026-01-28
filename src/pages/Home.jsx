import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center pt-20 
      bg-gray-50 dark:bg-gray-900">
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight 
            text-gray-900 dark:text-white">
            Hi, I'm Dheeraj 👋
          </h1>

          <p className="mt-4 text-lg 
            text-gray-700 dark:text-gray-300">
            Frontend React Developer with 2+ Years Experience
          </p>

          <p className="mt-2 
            text-gray-600 dark:text-gray-400">
            I build modern, responsive and scalable web interfaces.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded 
              hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border rounded 
              text-gray-800 dark:text-white
              border-gray-400 dark:border-gray-600
              hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              View & Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Dheeraj"
            className="w-64 h-64 md:w-80 md:h-80 
            rounded-full object-cover shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
