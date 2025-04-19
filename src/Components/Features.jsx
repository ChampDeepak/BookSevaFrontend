import React from "react";
import { useTheme } from "../Context/ThemeContext";
import featureImg from "../../public/features.jpg"

function Features() {
  const { isDarkTheme } = useTheme();

  return (
    <section 
      className="body-font transition-colors duration-300"
      style={{
        backgroundColor: 'var(--body_bg)',
        color: 'var(--body_clr)'
      }}
    >
      <div className="container px-4 sm:px-6 py-12 md:py-24 mx-auto flex flex-wrap">
        {/* Image Section - Full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={featureImg}
            style={{
              border: '1px solid var(--card-bg)'
            }}
          />
        </div>

        {/* Features List - Full width on mobile, half on desktop */}
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 w-full lg:w-1/2 lg:pl-12">
          {/* Feature Item 1 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div 
              className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--link_clr)'
              }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h2 
                className="text-lg title-font font-medium mb-3"
                style={{ color: 'var(--body_clr)' }}
              >
                Timely Delivery
              </h2>
              <p 
                className="leading-relaxed text-base"
                style={{ color: 'var(--body_clr)', opacity: 0.9 }}
              >
                Count on us for fast and reliable service! Our team ensures timely delivery of expert solutions right to your doorstep.
              </p>
            </div>
          </div>

          {/* Feature Item 2 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div 
              className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--link_clr)'
              }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
              </svg>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h2 
                className="text-lg title-font font-medium mb-3"
                style={{ color: 'var(--body_clr)' }}
              >
                Quality Service
              </h2>
              <p 
                className="leading-relaxed text-base"
                style={{ color: 'var(--body_clr)', opacity: 0.9 }}
              >
                Experience top-notch quality with every visit! Our skilled professionals deliver exceptional service.
              </p>
            </div>
          </div>

          {/* Feature Item 3 */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div 
              className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-4"
              style={{
                backgroundColor: 'var(--card-bg)',
                color: 'var(--link_clr)'
              }}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h2 
                className="text-lg title-font font-medium mb-3"
                style={{ color: 'var(--body_clr)' }}
              >
                Trained Professionals
              </h2>
              <p 
                className="leading-relaxed text-base"
                style={{ color: 'var(--body_clr)', opacity: 0.9 }}
              >
                Trust in our expert hands! Our trained professionals bring years of skill and knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;