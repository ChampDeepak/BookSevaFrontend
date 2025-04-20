import { useTheme } from "../Context/ThemeContext";
const ServiceCard = ({ id, image, title, description }) => {
  const { isDarkTheme } = useTheme();

  return (
    <div 
      className="rounded-lg shadow-md "
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--nav-bg)'
      }}
    >
  
      <div className="h-60 overflow-hidden">
  <img 
    src={image}
    alt={title} 
    className="w-full h-full object-contain "
  />
</div>


     
      <div className="p-4 sm:p-6">
        <h3 
          className="text-lg sm:text-xl font-bold mb-2"
          style={{ color: 'var(--body_clr)' }}
        >
          {title}
        </h3>
        
        <p 
          className="text-sm sm:text-base mb-4"
          style={{ 
            color: 'var(--body_clr)',
            opacity: 0.9
          }}
        >
          {description}
        </p>

        <button 
          className="w-full py-2 px-4 rounded-md transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2"
          style={{
            backgroundColor: 'var(--link_clr)',
            color: 'var(--body_bg)',
            minHeight: '40px'
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
export default ServiceCard;