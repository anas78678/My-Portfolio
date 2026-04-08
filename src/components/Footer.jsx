import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#020617] to-[#0f172a] text-gray-300 pt-16 pb-6 px-6 md:px-16">

      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT - BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-teal-400 mb-3">
            Mohd Anas
          </h2>
          <p className="text-sm">
            Java Developer | Android Developer <br />
            Passionate about building real-world applications 🚀
          </p>
        </div>

        {/* MIDDLE - QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-teal-400 mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-teal-400">Home</a></li>
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT - CONTACT + SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-teal-400 mb-3">
            Get In Touch
          </h3>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope /> anasmohd8752@gmail.com
            </p>

            <p className="flex items-center gap-2">
              <FaPhone /> 7986428149
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4">

            <a href="https://www.linkedin.com/in/mohd-anas-522221385" target="_blank">
              <div className="p-3 bg-white/5 rounded-full hover:bg-teal-400 hover:text-black transition">
                <FaLinkedin />
              </div>
            </a>

            <a href="https://github.com/anas78678" target="_blank">
              <div className="p-3 bg-white/5 rounded-full hover:bg-teal-400 hover:text-black transition">
                <FaGithub />
              </div>
            </a>

            <a href="https://www.instagram.com/anas_kasgar__" target="_blank">
              <div className="p-3 bg-white/5 rounded-full hover:bg-teal-400 hover:text-black transition">
                <FaInstagram />
              </div>
            </a>

          </div>

          {/* RESUME BUTTON */}
          <a href="/resume.pdf" download>
            <button className="mt-5 bg-teal-400 text-black px-5 py-2 rounded-lg hover:bg-teal-500 transition">
              Download CV
            </button>
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Mohd Anas | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;