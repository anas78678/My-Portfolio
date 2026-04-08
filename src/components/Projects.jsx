import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-16 py-24">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`group relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 
            shadow-lg hover:shadow-teal-400/30 hover:-translate-y-2 transition duration-300
            ${project.featured ? "lg:col-span-2 border-teal-400/40" : ""}`}
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-2xl"></div>

            {/* FEATURED TAG */}
            {project.featured && (
              <span className="absolute top-3 right-3 bg-teal-400 text-black px-3 py-1 text-xs rounded-full">
                ⭐ Featured
              </span>
            )}

            {/* CONTENT */}
            <div className="relative z-10">

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.desc}
              </p>

              {/* TECH STACK (MANUAL ADD OPTIONAL) */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs px-3 py-1 bg-teal-400/20 rounded-full">Java</span>
                <span className="text-xs px-3 py-1 bg-teal-400/20 rounded-full">Android</span>
                <span className="text-xs px-3 py-1 bg-teal-400/20 rounded-full">Firebase</span>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">

                <a href={project.github} target="_blank">
                  <button className="flex items-center gap-2 bg-teal-400 px-4 py-2 rounded-lg hover:bg-teal-500 transition">
                    <FaGithub /> Code
                  </button>
                </a>

                <a href={project.live} target="_blank">
                  <button className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
                    <FaExternalLinkAlt /> Live
                  </button>
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;