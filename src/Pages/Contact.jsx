import { useState } from "react";
import { useTheme } from "../Context/ThemeContext";

function Contact() {
  const { isDarkTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section 
      className="body-font relative transition-colors duration-300"
      style={{
        backgroundColor: 'var(--body_bg)'
      }}
    >
      {/* Map Background */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          className="filter grayscale contrast-125 opacity-40"
          frameBorder="0"
          title="map"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.071031111053!2d77.66232127483906!3d12.838686487464555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d6ab07d151b%3A0xc0af49ccfc84871a!2sScaler%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1745145931237!5m2!1sen!2sin"
        />
      </div>

      {/* Contact Card */}
      <div className="container px-4 sm:px-6 py-16 mx-auto flex flex-col lg:flex-row items-center justify-center min-h-[80vh] gap-8">
        {/* Contact Information */}
        <div 
          className="lg:w-1/3 md:w-1/2 rounded-lg p-6 sm:p-8 flex flex-col relative z-10 shadow-lg"
          style={{
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--nav-bg)'
          }}
        >
          <h2 
            className="text-xl font-bold mb-6"
            style={{ color: 'var(--body_clr)' }}
          >
            Contact Information
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Office Address",
                content: "1234 Harmony Lane, Sector 15\nBengaluru - 560102, India",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                )
              },
              {
                title: "Office Email",
                content: "support@bookseva.com",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                )
              },
              {
                title: "Phone Number",
                content: "+91-98765-43210",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 p-2 rounded-full"
                  style={{
                    backgroundColor: 'var(--nav-bg)',
                    color: 'var(--link_clr)'
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 
                    className="font-medium"
                    style={{ color: 'var(--body_clr)' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="whitespace-pre-line"
                    style={{ 
                      color: 'var(--body_clr)',
                      opacity: 0.9
                    }}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div 
          className="lg:w-1/3 md:w-1/2 rounded-lg p-6 sm:p-8 flex flex-col relative z-10 shadow-lg"
          style={{
            backgroundColor: 'var(--card-bg)',
            border: '1px solid var(--nav-bg)'
          }}
        >
          <h2 
            className="text-xl font-bold mb-6"
            style={{ color: 'var(--body_clr)' }}
          >
            Send Us a Message
          </h2>
          
          {submitStatus === 'success' ? (
            <div 
              className="p-4 mb-6 rounded-lg"
              style={{
                backgroundColor: 'rgba(74, 222, 128, 0.1)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                color: 'var(--body_clr)'
              }}
            >
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="name"
                  className="block mb-1 text-sm"
                  style={{ color: 'var(--body_clr)' }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--nav-bg)',
                    color: 'var(--body_clr)'
                  }}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email"
                  className="block mb-1 text-sm"
                  style={{ color: 'var(--body_clr)' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--nav-bg)',
                    color: 'var(--body_clr)'
                  }}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="phone"
                  className="block mb-1 text-sm"
                  style={{ color: 'var(--body_clr)' }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--nav-bg)',
                    color: 'var(--body_clr)'
                  }}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message"
                  className="block mb-1 text-sm"
                  style={{ color: 'var(--body_clr)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--nav-bg)',
                    color: 'var(--body_clr)'
                  }}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg font-medium transition-colors duration-300 mt-4"
                style={{
                  backgroundColor: 'var(--link_clr)',
                  color: 'var(--body_bg)',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;