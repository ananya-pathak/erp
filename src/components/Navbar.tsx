import { motion } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Load saved theme */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  /* Toggle theme */
  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      bg-gradient-to-r from-white via-white to-blue-500/80
      bg-[length:200%_200%] animate-gradientMove
      dark:from-[#0a0a0a] dark:via-[#0a0a0a] dark:to-blue-900
      ${isScrolled ? "py-3 shadow-xl shadow-black/20" : "py-6"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="group-hover:scale-110 transition-transform duration-300">
            <img src={logo} alt="Anquest logo" className="h-10 w-auto" />
          </div>

          <span className="text-2xl font-black font-display tracking-tighter text-slate-900 dark:text-white">
            <span className="text-black dark:text-white">a</span>
            <span className="text-brand-500">N</span>
            <span className="text-black dark:text-white">quest</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-8">

          <Link to="/" className="text-sm font-black text-slate-700 dark:text-slate-200 hover:text-white uppercase tracking-widest transition">
            Home
          </Link>

          <Link to="/services" className="text-sm font-black text-slate-700 dark:text-slate-200 hover:text-white uppercase tracking-widest transition">
            Services
          </Link>

          <Link to="/about" className="text-sm font-black text-slate-700 dark:text-slate-200 hover:text-white uppercase tracking-widest transition">
            About Us
          </Link>

          <Link to="/contact" className="text-sm font-black text-slate-700 dark:text-slate-200 hover:text-white uppercase tracking-widest transition">
            Contact
          </Link>

        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden lg:inline-flex p-2 rounded-lg bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white hover:scale-110 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white dark:bg-[#0a0a0a] border-b border-black/10 dark:border-white/10 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
        >

          <Link to="/" className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          <Link to="/services" className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>

          <Link to="/about" className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>

          <Link to="/contact" className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

        </motion.div>
      )}

    </nav>
  );
};

export default Navbar;