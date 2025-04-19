import React from "react";
import { useTheme } from "../Context/ThemeContext";

function Footer() {
  const { isDarkTheme } = useTheme();

  return (
    <footer 
      className="body-font transition-colors duration-300"
      style={{
        backgroundColor: 'var(--nav-bg)',
        color: 'var(--body_clr)'
      }}
    >
      <div className="container px-4 sm:px-6 py-8 mx-auto flex flex-col sm:flex-row items-center">
        
        <div className="flex items-center">
          <a 
            href="#" 
            className="flex title-font font-medium items-center md:justify-start justify-center"
            style={{ color: 'var(--link_clr)' }}
          >
            
            <span className="ml-3 text-xl">BookSeva</span>
          </a>
        </div>

       
        <p 
          className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4"
          style={{
            color: 'var(--body_clr)',
            opacity: 0.8,
            borderColor: 'var(--link_clr)'
          }}
        >
          © 2025 All Rights Reserved
        </p>

        
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
          {[
            { icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', platform: 'Facebook' },
            { icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', platform: 'Twitter' },
            { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z', platform: 'Instagram' },
            { icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z', platform: 'LinkedIn' }
          ].map((social, index) => (
            <a 
              key={index}
              href="#" 
              className="p-2 rounded-full hover:bg-[var(--card-bg)] transition-colors duration-200"
              aria-label={social.platform}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={social.platform === 'Instagram' ? '2' : '0'}
                className="w-5 h-5"
                viewBox="0 0 24 24"
                style={{ color: 'var(--link_clr)' }}
              >
                <path d={social.icon} />
                {social.platform === 'Instagram' && <circle cx="4" cy="4" r="2" stroke="none" />}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;