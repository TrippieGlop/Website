import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-orange-500 px-6 py-16 text-center mt-20 border-t border-white/5">
      <h2 className="font-display text-3xl sm:text-4xl font-bold">Let's work together</h2>
      <p className="text-gray-400 mt-3 max-w-lg mx-auto">
        Interested in cybersecurity, IT, or software roles? The best way to reach me is email.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a href="mailto:humphreymn6@gmail.com" className="bg-orange-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-orange-400 transition-colors">
          Email Me
        </a>
        <a href="/Marc_Humphrey_Resume_2026.pdf" target="_blank" rel="noopener noreferrer" className="border border-orange-500 text-orange-400 font-semibold px-6 py-3 rounded-md hover:bg-orange-500 hover:text-black transition-colors">
          Résumé
        </a>
        <a href="https://www.linkedin.com/in/marc-humphrey-1b5a2a31b/" target="_blank" rel="noopener noreferrer" className="border border-orange-500 text-orange-400 font-semibold px-6 py-3 rounded-md hover:bg-orange-500 hover:text-black transition-colors">
          LinkedIn
        </a>
      </div>
      <div className="flex justify-center space-x-6 mt-8">
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
      <p className="text-gray-500 text-sm mt-8">&copy; 2026 Marc Humphrey</p>
    </footer>
  );
}
