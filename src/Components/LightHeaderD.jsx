// import React from "react";
// import DarkMode from "../DarkMode/DarkMode";
import { useTheme } from "../Context/ThemeContext";

function LightHeaderD(props) {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <header className="bg-[var(--nav-bg))] text-[var(--body_clr)] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a className="flex items-center gap-2 text-indigo-600 font-bold text-2xl tracking-tight">
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
        </a>

        <nav className="hidden md:flex space-x-8 text-[var(--body_clr)] font-medium">
          <a href="#" className="hover:text-[var(--link_clr)] transition-colors">Services</a>
          <a href="#" className="hover:text-[var(--link_clr)] transition-colors">About</a>
          <a href="#" className="hover:text-[var(--link_clr)] transition-colors">Blog</a>
          <a href="#" className="hover:text-[var(--link_clr)] transition-colors">Contact</a>
        </nav>

        <div className="flex">
        {/* <DarkMode></DarkMode> */}
        {/* <button 
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
      </button> */}
        <button className="ml-4 bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition">
          Let’s Talk
        </button>
        </div>
      </div>
    </header>
  );
}

LightHeaderD.defaultProps = {
  theme: 'indigo'
};

export default LightHeaderD;
