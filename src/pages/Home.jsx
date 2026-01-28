import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Dheeraj
            </span>{" "}
            👋
          </h1>

          <p className="mt-4 text-lg">
            Frontend React Developer with 2+ Years Experience
          </p>

          <p className="mt-2">
            I build modern, responsive and scalable web interfaces.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded
              hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded border
              border-gray-800 dark:border-gray-400
              hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              View & Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="Dheeraj"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
