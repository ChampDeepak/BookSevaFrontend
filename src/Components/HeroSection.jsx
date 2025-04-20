import React from 'react';
import heroImg from '../Assets/heroImg.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-[var(--body_bg)] py-16 sm:py-20 md:py-24 text-[var(--body_clr)]">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-16">
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
            Fix It, Build It, Spark It –<br />
            <span className="text-indigo-600">Your Home’s Best Friend</span> Is Here!
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-[var(--body_clr)] opacity-90">
            Connect with trusted plumbers, electricians, carpenters, and more – all at your fingertips.
            Fast, reliable, and tailored for urban India!
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="/Services">
            <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-6 py-3 rounded-xl text-base sm:text-lg shadow-md">
              Make an Appointment
            </button>
            </Link>
            
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=deepak.24bcs10067@sst.scaler.com&su=Appointment-Support` } target="_blank">
            <button className="bg-[var(--card-bg)] hover:brightness-110 transition-colors text-[var(--body_clr)] px-6 py-3 rounded-xl text-base sm:text-lg shadow-md">
              Write an Email
            </button>
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 w-full max-h-[300px] sm:max-h-[400px] overflow-hidden rounded-2xl shadow-xl">
          <img
            src={heroImg}
            alt="Hero Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
