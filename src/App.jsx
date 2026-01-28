import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from "./pages/Experience";


export default function App() {
const dark = useSelector((state) => state.theme.dark);


return (
<div
className={
dark
? 'bg-gray-900 text-white min-h-screen transition-colors duration-300'
: 'bg-white text-black min-h-screen transition-colors duration-300'
}
>
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/skills" element={<Skills />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
<Route path="/experience" element={<Experience />} />
</Routes>
<Footer />
</BrowserRouter>
</div>
);
}
