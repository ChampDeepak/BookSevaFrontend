import React from 'react';
import { useTheme } from "../Context/ThemeContext";
import { Link } from 'react-router-dom';

const About = () => {
  const { isDarkTheme } = useTheme();

  return (
    <section 
      className="h-[78vh] py-12 px-4 sm:px-6 md:px-8 lg:px-20 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--body_bg)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          style={{
            color: 'var(--body_clr)'
          }}
        >
          About Us
        </h2>
        
        <div className="space-y-4">
          <p 
            className="text-lg leading-relaxed"
            style={{
              color: 'var(--body_clr)',
              opacity: 0.9
            }}
          >
            Our mission is simple — to make expert help easily accessible for every home and personal need. From trusted nurses and home tutors to skilled plumbers, electricians, mechanics, and more, our platform connects you with trained professionals who value your time and deliver high-quality service with care.
          </p>
          
          <p 
            className="text-lg leading-relaxed"
            style={{
              color: 'var(--body_clr)',
              opacity: 0.9
            }}
          >
            Whether it's fixing a leak, maintaining your AC, or getting a blood test at home, we bring years of hands-on experience right to your doorstep.
          </p>
          
          <p 
            className="text-lg leading-relaxed"
            style={{
              color: 'var(--body_clr)',
              opacity: 0.9
            }}
          >
           Unlock the simplicity of booking top-notch services with just a few clicks. Your comfort and convenience are our top priority—guaranteed every time!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
  {[
    { number: "500+", label: "Professionals" },
    { number: "10K+", label: "Services" },
    { number: "98%", label: "Satisfaction" },
    { number: "24/7", label: "Support" }
  ].map((stat, index) => (
    <div key={index} className="p-4">
      <p className="text-3xl font-bold" style={{ color: 'var(--link_clr)' }}>{stat.number}</p>
      <p className="mt-2" style={{ color: 'var(--body_clr)' }}>{stat.label}</p>
    </div>
  ))}
</div>
        <Link to="/Services">
        <button 
          className="mt-8 font-semibold py-3 px-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: 'var(--link_clr)',
            color: 'var(--body_bg)',
            minWidth: '160px'
          }}
        >
          Book Now
        </button>
        </Link>
      </div>
      
    </section>
  );
};

export default About;