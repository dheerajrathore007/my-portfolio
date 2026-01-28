import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);

  const linkClass =
    "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
          Dheeraj.dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#skills" className={linkClass}>Skills</a>
          <a href="#experience" className={linkClass}>Experience</a>
          <a href="#projects" className={linkClass}>Projects</a>
          <a href="#contact" className={linkClass}>Contact</a>

          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-gray-900 dark:text-gray-200"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center gap-6 py-6">
            <a onClick={() => setOpen(false)} href="#home" className={linkClass}>Home</a>
            <a onClick={() => setOpen(false)} href="#about" className={linkClass}>About</a>
            <a onClick={() => setOpen(false)} href="#skills" className={linkClass}>Skills</a>
            <a onClick={() => setOpen(false)} href="#experience" className={linkClass}>Experience</a>
            <a onClick={() => setOpen(false)} href="#projects" className={linkClass}>Projects</a>
            <a onClick={() => setOpen(false)} href="#contact" className={linkClass}>Contact</a>
          </ul>
        </div>
      )}
    </nav>
  );
}
