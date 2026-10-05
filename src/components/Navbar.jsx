import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `text-lg transition-colors ${isActive ? "text-orange-400" : "text-white hover:text-orange-300"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md text-white py-4 px-6 flex justify-between items-center z-50 border-b border-white/5">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img src="/logonew.png" alt="Marc Humphrey logo" width="100" height="80" decoding="async" className="h-16 md:h-20 w-auto cursor-pointer" />
      </NavLink>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-10 items-center">
        <NavLink to="/" className={navLinkClass} end>Home</NavLink>
        <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
        <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
        <a href="/Marc_Humphrey_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" className="text-base font-semibold border border-orange-500 text-orange-400 px-4 py-1.5 rounded-md hover:bg-orange-500 hover:text-black transition-colors">
          Resume
        </a>
      </div>

      <div className="hidden md:flex space-x-4 items-center ml-8">
        <a href="mailto:humphreymn6@gmail.com" aria-label="Email Marc" className="hover:text-orange-300">
          <FaEnvelope className="text-2xl" />
        </a>
        <a href="https://github.com/TrippieGlop" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-orange-300" />
        </a>
        <a href="https://www.linkedin.com/in/marc-humphrey-1b5a2a31b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-orange-300" />
        </a>
        <a href="https://www.instagram.com/mawrk.6/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-2xl hover:text-orange-300" />
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-2xl p-2 -mr-2"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center py-6 space-y-5 md:hidden border-t border-white/10">
          <NavLink to="/" className={navLinkClass} end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/projects" className={navLinkClass} onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/experience" className={navLinkClass} onClick={() => setOpen(false)}>Experience</NavLink>
          <a href="/Marc_Humphrey_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 font-semibold" onClick={() => setOpen(false)}>
            Resume
          </a>
          <div className="flex space-x-6 pt-3">
            <a href="mailto:humphreymn6@gmail.com" aria-label="Email Marc">
              <FaEnvelope className="text-2xl hover:text-orange-300" />
            </a>
            <a href="https://github.com/TrippieGlop" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-2xl hover:text-orange-300" />
            </a>
            <a href="https://www.linkedin.com/in/marc-humphrey-1b5a2a31b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl hover:text-orange-300" />
            </a>
            <a href="https://www.instagram.com/mawrk.6/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-2xl hover:text-orange-300" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
