import React from 'react';
import heroImg from '../../public/heroImg.jpg';

const HeroSection = () => {
  return (
    <section className="bg-white py-24 h-[80vh]">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
            Fix It, Build It, Spark It –
            <br />
            <span className="text-indigo-600">Your Home’s Best Friend</span> Is Here!
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Connect with trusted plumbers, electricians, carpenters, and more – all at your fingertips.
            Fast, reliable, and tailored for urban India!
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors text-white px-6 py-3 rounded-xl text-lg shadow-md">
              Make an Appointment
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 px-6 py-3 rounded-xl text-lg shadow-md">
              Write an Email
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={heroImg}
            alt="Hero Visual"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
