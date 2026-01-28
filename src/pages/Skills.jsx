import { motion } from "framer-motion";
import { FaReact, FaJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiBootstrap, SiPostman } from "react-icons/si";

const skills = [
  { name: "HTML5", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400" /> },
  { name: "React JS", level: 90, icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux Toolkit", level: 80, icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", level: 75, icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Git & GitHub", level: 80, icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Postman", level: 70, icon: <SiPostman className="text-orange-400" /> },
];

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-black-900 dark:text-cyan"
      >
        Skills
      </motion.h2>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">{skill.icon}</span>
              <span className="font-medium text-black-800 dark:text-black-200">
                {skill.name}
              </span>
              <span className="ml-auto text-sm text-black-600 dark:text-black-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-black-200 dark:bg-black-700 rounded">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-3 bg-blue-600 rounded"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
