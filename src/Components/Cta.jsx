import { useTheme } from "../Context/ThemeContext";

function Cta() {
  const { isDarkTheme } = useTheme();

  return (
    <section 
      className="body-font transition-colors duration-300"
      style={{
        backgroundColor: 'var(--body_bg)'
      }}
    >
      <div className="container px-4 sm:px-6 py-12 md:py-20 mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center items-start gap-6 sm:gap-0 mx-auto max-w-4xl">
          {/* Text Content */}
          <div className="flex-grow sm:pr-8">
            <h1 
              className="text-xl md:text-2xl font-medium title-font mb-4 sm:mb-0"
              style={{
                color: 'var(--body_clr)'
              }}
            >
              Unlock fast, expert solutions for your home—click to book now and experience the difference!
            </h1>
          </div>
          
          {/* Button */}
          <button
            className="whitespace-nowrap px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: 'var(--link_clr)',
              color: 'var(--body_bg)',
              minWidth: '140px',
              focusRingColor: 'var(--link_clr)'
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;