import React from "react";
import { useTheme } from "../Context/ThemeContext";

function ConfirmationPage() {
  const { isDarkTheme } = useTheme();
  const htmlBody = ``;

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-12 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--body_bg)'
      }}
    >
      <div 
        className="max-w-xl w-full rounded-2xl p-6 sm:p-8 text-center shadow-md"
        style={{
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--nav-bg)'
        }}
      >
        <h1 
          className="text-2xl sm:text-3xl font-semibold mb-4"
          style={{ color: 'var(--link_clr)' }}
        >
          Thank You for Booking with Us!
        </h1>
        
        <div className="space-y-4">
          <p style={{ color: 'var(--body_clr)' }}>
            Thank you for choosing our service! We truly appreciate your interest and are excited to assist you.
          </p>
          
          <p style={{ color: 'var(--body_clr)' }}>
            We've opened a pre-filled email in Gmail so you can share your address and other details with us. Once we receive your email, our team will reach out to you shortly to confirm your booking and schedule the service.
          </p>
          
          <p style={{ color: 'var(--body_clr)' }}>
            You can expect a response within <span className="font-medium">24–48 hours</span>. We're here to make your experience smooth and hassle-free.
          </p>
          
          <p style={{ color: 'var(--body_clr)' }}>
            Looking forward to serving you! If you have any questions in the meantime, feel free to reach out.
          </p>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=deepak.24bcs10067@sst.scaler.com&su=Appointment-Support`}
            className="px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            style={{
              backgroundColor: 'var(--link_clr)',
              color: 'var(--body_bg)'
            }}
            target="_blank"
          >
            Email Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;