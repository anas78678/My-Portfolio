import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="px-6 md:px-16 py-24">

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-16">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profile}
            alt="profile"
            className="w-72 rounded-3xl border-4 border-teal-400 shadow-2xl hover:scale-105 transition duration-300"
          />
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Passionate Developer 🚀
          </h3>

          <p className="text-gray-300 leading-relaxed">
            I am a Bachelor of Computer Applications (BCA) student with a strong
            foundation in Data Structures, Object-Oriented Programming, and
            Android Development. I specialize in building scalable and efficient
            applications using modern technologies.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            My expertise includes Java, XML, Firebase, and MySQL. I actively
            work with tools like Android Studio, VS Code, and GitHub to develop
            real-world projects. I am continuously improving my skills and
            seeking opportunities to contribute to impactful tech solutions.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-8 text-center">

            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-teal-400/20 transition">
              <h4 className="text-2xl font-bold text-teal-400">3+</h4>
              <p className="text-sm text-gray-300">Projects</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-teal-400/20 transition">
              <h4 className="text-2xl font-bold text-teal-400">1+</h4>
              <p className="text-sm text-gray-300">Years Learning</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-teal-400/20 transition">
              <h4 className="text-2xl font-bold text-teal-400">5+</h4>
              <p className="text-sm text-gray-300">Technologies</p>
            </div>

          </div>

          {/* EXTRA INFO CARDS */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            <div className="bg-white/5 p-4 rounded-xl">
              <h4 className="text-teal-400 font-semibold">Education</h4>
              <p className="text-sm text-gray-300 mt-2">
                BCA (2024–2027)
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl">
              <h4 className="text-teal-400 font-semibold">Focus</h4>
              <p className="text-sm text-gray-300 mt-2">
                Android & Java Development
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;