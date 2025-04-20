const ServiceCard = ({ image, title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img 
            src={image || "/api/placeholder/400/300"} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>
    );
  };