import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_r3em4qg",
      "template_7e6n9lh",
      form.current,
      "KohA_LltgFldkq0g8"   // ✅ CORRECT PUBLIC KEY
    )
    .then((result) => {
      console.log(result.text);
      alert("✅ Message Sent Successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.log(error.text);
      alert("❌ Failed to send message: " + error.text);
    });
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-24">

      <h2 className="text-4xl md:text-5xl text-center text-teal-400 mb-16 font-bold">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl mb-4 font-semibold">Let's Connect 🤝</h3>

          <p className="text-gray-300 mb-6">
            I'm open to internships and opportunities. Feel free to contact me!
          </p>

          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <FaPhone className="text-teal-400" /> 7986428149
            </p>

            <p className="flex items-center gap-2">
              <FaEnvelope className="text-teal-400" /> anasmohd8752@gmail.com
            </p>
          </div>

          <div className="flex gap-4 mt-6 text-xl">

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
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full mb-4 p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full mb-4 p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full mb-4 p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
          />

          <button
            type="submit"
            className="w-full bg-teal-400 text-black py-3 rounded-lg hover:bg-teal-500 transition"
          >
            Send Message 🚀
          </button>

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;