import { useTheme } from "../Context/ThemeContext";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for mobile menu
import { Link } from "react-router-dom";

function LightHeaderD() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--body_bg)] text-[var(--body_clr)] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to='/' className="flex items-center gap-2 text-indigo-600 font-bold text-2xl tracking-tight">
          <svg
            className="w-8 h-8 text-indigo-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7h20L12 2zM2 7v13h20V7M12 22V12" />
          </svg>
          BookSeva
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-[var(--body_clr)] font-medium">
          <Link to="/Services" className="hover:text-[var(--link_clr)] transition-colors">Services</Link>
          <Link to="/About" className="hover:text-[var(--link_clr)] transition-colors">About</Link>
          <Link to="/Blog" className="hover:text-[var(--link_clr)] transition-colors">Blog</Link>
          <Link to="/Contact" className="hover:text-[var(--link_clr)] transition-colors">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={toggleTheme}
            className="theme-toggle-btn"
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: isDarkTheme ? '#ffffff' : '#2d2d2d',
              color: isDarkTheme ? '#000000' : '#ffffff'
            }}
          >
            {isDarkTheme ? '☀️ Light' : '🌙 Dark'}
          </button>

          <button className="ml-4 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition">
            Let’s Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-[var(--nav-bg)] text-[var(--body_clr)]">
          <a href="#" className="block hover:text-[var(--link_clr)]">Services</a>
          <a href="#" className="block hover:text-[var(--link_clr)]">About</a>
          <a href="#" className="block hover:text-[var(--link_clr)]">Blog</a>
          <a href="#" className="block hover:text-[var(--link_clr)]">Contact</a>

          <div className="flex flex-col gap-2 pt-4">
            <button 
              onClick={toggleTheme}
              className="w-full rounded-lg px-4 py-2"
              style={{
                backgroundColor: isDarkTheme ? '#ffffff' : '#2d2d2d',
                color: isDarkTheme ? '#000000' : '#ffffff'
              }}
            >
              {isDarkTheme ? '☀️ Light' : '🌙 Dark'}
            </button>
            <button className="bg-indigo-600 text-white w-full py-2 rounded-lg hover:bg-indigo-700 transition">
              Let’s Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default LightHeaderD;
