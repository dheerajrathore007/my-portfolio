import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.dark);

  const linkClass = ({ isActive }) =>
    `text-gray-800 dark:text-gray-200 
     hover:text-blue-600 dark:hover:text-blue-400 
     transition ${isActive ? "font-semibold text-blue-600" : ""}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      bg-white dark:bg-gray-900 shadow">

      <div className="max-w-7xl mx-auto px-4 py-4 
        flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold 
          text-gray-900 dark:text-white"
        >
          Dheeraj.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full 
            bg-gray-100 dark:bg-gray-800 
            text-gray-800 dark:text-gray-200"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="p-2 rounded-full 
            bg-gray-100 dark:bg-gray-800 
            text-gray-800 dark:text-gray-200"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger */}
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
        <div className="md:hidden 
          bg-white dark:bg-gray-900 
          border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center gap-6 py-6">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/skills" className={linkClass}>
              Skills
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/experience" className={linkClass}>
              Experience
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
}
