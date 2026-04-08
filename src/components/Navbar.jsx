import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/5 backdrop-blur-lg shadow-lg">

      <div className="flex justify-between items-center px-6 md:px-16 py-4">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-teal-400">
          Anas.dev
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-gray-300">

          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.id}`}
                className="hover:text-teal-400 transition relative group"
              >
                {link.name}

                {/* UNDERLINE EFFECT */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}

        </ul>

        {/* MOBILE ICON */}
        <div className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6 space-y-4 text-center">

          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-300 hover:text-teal-400 text-lg transition"
            >
              {link.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
};

export default Navbar;