import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'; // Importing icons from react-icons

const ContactInfo = () => {
  return (
    <div className="w-full max-w-lg mx-auto px-6 py-8 space-y-6 md:grid md:grid-cols-1 md:gap-8 md:max-w-none">
      {/* Email Section */}
      <div className="flex items-center space-x-4 bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <FaEnvelope className="text-blue-500 text-2xl" />
        <div className="flex flex-col">
          <span className="text-gray-700 font-medium">Email</span>
          <a href="mailto:example@example.com" className="text-blue-500 hover:underline">
            Satyaveer.nit@example.com
          </a>
        </div>
      </div>

      {/* Location Section */}
      <div className="flex items-center space-x-4 bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <FaMapMarkerAlt className="text-red-500 text-2xl" />
        <div className="flex flex-col">
          <span className="text-gray-700 font-medium">Location</span>
          <p className="text-gray-500">T-75 Main Street, Cityville</p>
        </div>
      </div>

      {/* Mobile Number Section */}
      <div className="flex items-center space-x-4 bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <FaPhoneAlt className="text-green-500 text-2xl" />
        <div className="flex flex-col">
          <span className="text-gray-700 font-medium">Mobile</span>
          <a href="tel:+1234567890" className="text-green-500 hover:underline">
            +91 (539) 2361273
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
