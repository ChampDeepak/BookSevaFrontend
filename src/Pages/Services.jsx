import { useTheme } from "../Context/ThemeContext";
import { serviceData } from "../Content";
import ServiceCard from "../Components/ServiceCard";

const Services = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div 
      className="py-12 sm:py-16 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--body_bg)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            style={{ color: 'var(--body_clr)' }}
          >
            Our Services
          </h2>
          <p 
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ 
              color: 'var(--body_clr)',
              opacity: 0.9
            }}
          >
            Connect with skilled professionals for all your home and personal care needs. Our experts are just a click away.
          </p>
        </div>
        
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;