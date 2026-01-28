import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SocialLinks from "./components/SocialLinks";


export default function App() {
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div
      className={
        dark
          ? "bg-gray-900 text-white min-h-screen transition-colors duration-300"
          : "bg-white text-black min-h-screen transition-colors duration-300"
      }
    >
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* SINGLE PAGE */}
          <Route
            path="/"
            element={
              <>
                <section id="home" className="pt-24">
                  <Home />
                </section>

                <section id="about" className="pt-24">
                  <About />
                </section>

                <section id="skills" className="pt-24">
                  <Skills />
                </section>

                <section id="experience" className="pt-24">
                  <Experience />
                </section>

                <section id="projects" className="pt-24">
                  <Projects />
                </section>

                <section id="contact" className="pt-24">
                  <Contact />
                </section>
                <SocialLinks />
                
              </>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
