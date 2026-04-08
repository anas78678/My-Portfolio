import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 pt-20">

      {/* LEFT */}
      <motion.div 
        initial={{opacity:0, x:-50}} 
        animate={{opacity:1, x:0}}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-teal-400">Mohd Anas</span>
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          Java | XML (Frontend) | Firebase | Android Developer | BCA Student  
          Passionate about building real-world android applications .
        </p>

        <div className="mt-6 flex gap-4">
          <a href="/resume.pdf" download>
            <button className="bg-teal-400 px-6 py-3 rounded-lg font-semibold hover:bg-teal-500">
              Download CV
            </button>
          </a>

          <a href="#contact">
            <button className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black">
              Contact Me
            </button>
          </a>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.img 
        src={profile}
        className="w-72 rounded-full border-4 border-teal-400 shadow-lg mt-10 md:mt-0"
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
      />

    </section>
  );
};

export default Hero;