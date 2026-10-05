import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Projects = lazy(() => import("./components/Projects"));
const Experiences = lazy(() => import("./components/Experiences"));
const ParticleBackground = lazy(() => import("./components/ParticleBackground"));

const titles = {
  "/": "Marc Humphrey | Cybersecurity & Full-Stack Developer",
  "/projects": "Projects | Marc Humphrey",
  "/experience": "Experience | Marc Humphrey",
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] || titles["/"];
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-black">
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>

        <div className="relative z-30">
          <Navbar />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experiences />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
