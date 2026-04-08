import { motion } from "framer-motion";
import { FaJava, FaDatabase, FaTools, FaAndroid } from "react-icons/fa";
import { SiFirebase, SiMysql, SiGithub } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {

  const skillCategories = [
    {
      title: "Programming",
      icon: <FaJava className="text-3xl text-teal-400 mx-auto mb-3" />,
      skills: [
        { name: "Java", level: 85 },
        { name: "XML", level: 80 },
        { name: "C", level: 70 }
      ]
    },
    {
      title: "Development",
      icon: <FaAndroid className="text-3xl text-teal-400 mx-auto mb-3" />,
      skills: [
        { name: "Android Dev", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "MySQL", level: 75 }
      ]
    },
    {
      title: "Tools",
      icon: <FaTools className="text-3xl text-teal-400 mx-auto mb-3" />,
      skills: [
        { name: "GitHub", level: 80 },
        { name: "VS Code", level: 85 },
        { name: "Android Studio", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="px-6 md:px-16 py-24">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-16">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-teal-400/30 hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* ICON */}
            {category.icon}

            <h3 className="text-2xl font-semibold mb-6 text-center text-teal-400">
              {category.title}
            </h3>

            {category.skills.map((skill, i) => (
              <div key={i} className="mb-5">

                {/* Skill Name */}
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>

              </div>
            ))}

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;