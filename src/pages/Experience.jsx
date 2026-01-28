import { motion } from "framer-motion";

const experience = [
  {
    role: "Frontend (Reactjs) Developer",
    company: "Vected Technologies pvt. Ltd.",
    time: "July 2025 – Present",
    desc: "Developed reusable and high-performance React components with optimized rendering and lazy loading. Integrated REST APIs using Axios with Redux and React Hooks for state management. Converted Figma designs into responsive, pixel-perfect UIs using Tailwind CSS and Bootstrap, while collaborating with backend teams in Agile environments using Git/GitHub.",
  },
  {
    role: "Associate Software Engineer",
    company: "Teleperformance Pvt. Ltd.",
    time: "April 2024 – June 2025",
    desc: "Tested React interfaces to identify layout, performance, and cross-browser issues. Verified builds, supported deployments, and documented UI defects while assisting QA teams in manual testing across Chrome, Firefox, and Edge.",
  },
   {
    role: "Trainee Software Developer (Intern)",
    company: "TaskCraft Technologies pvt. Ltd.",
    time: "July 2023 – Dec 2023",
    desc: "Built responsive UI components using HTML, CSS, JavaScript, and React.js. Assisted with API integration, debugging, and performance optimization while working in Agile teams using Git/GitHub and supporting testing and clean, maintainable code.",
  },
];

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-black-900 dark:text-cyan"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-black-300 dark:border-black-600 pl-6 space-y-10">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dot */}
            <span className="absolute -left-[34px] top-1 
              w-4 h-4 bg-blue-600 rounded-full"></span>

            <h3 className="text-xl font-semibold text-cyan-900 dark:text-cyan">
              {item.role}
            </h3>

            <p className="text-sm text-black-600 dark:text-black-400">
              {item.company} • {item.time}
            </p>

            <p className="mt-2 text-black-700 dark:text-black-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
