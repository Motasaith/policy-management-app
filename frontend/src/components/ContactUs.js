import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-800 to-green-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            We’re here to help you with any questions you may have
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                required
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                required
                rows="4"
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl p-8 shadow-xl">
            <svg className="w-16 h-16 text-emerald-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,7C10.9,7 10,7.9 10,9C10,10.1 10.9,11 12,11C13.1,11 14,10.1 14,9C14,7.9 13.1,7 12,7M12,12C10.34,12 6,13.34 6,15V16H18V15C18,13.34 13.66,12 12,12Z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Office</h3>
            <p className="text-gray-600 leading-relaxed">Okara Cantt, Punjab<br />Pakistan</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl p-8 shadow-xl">
            <svg className="w-16 h-16 text-emerald-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,15H10V17H14M12,3A9,9 0 0,0 3,12C3,17.25 7.05,21.82 12,22A9,9 0 0,0 21,13C21,8.05 16.95,3 12,3M12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 leading-relaxed">03006647898</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl p-8 shadow-xl">
            <svg className="w-16 h-16 text-emerald-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20,8V20H4V8H20M22,6H2V22H22V6M7,10A1,1 0 0,0 6,11A1,1 0 0,0 7,12A1,1 0 0,0 8,11A1,1 0 0,0 7,10M17,10A1,1 0 0,0 16,11A1,1 0 0,0 17,12A1,1 0 0,0 18,11A1,1 0 0,0 17,10Z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 leading-relaxed">azhar.mahmood@statelife.com.pk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

