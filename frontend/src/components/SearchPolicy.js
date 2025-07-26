import React, { useState, useEffect } from 'react';
import { policyAPI } from '../services/api';
import PolicyCard from './PolicyCard';

const SearchPolicy = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('cnic');
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Insurance-themed images
  const familyImages = [
    {
      url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&h=1080&fit=crop&crop=faces',
      title: 'Protecting Your Family',
      subtitle: 'Life Insurance gives you peace of mind'
    },
    {
      url: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1920&h=1080&fit=crop&crop=faces',
      title: 'Secure Your Future',
      subtitle: 'Health coverage for every family member'
    },
    {
      url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop&crop=center',
      title: 'Insurance Documentation',
      subtitle: 'Complete policy management and claims processing'
    },
    {
      url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop&crop=center',
      title: 'Professional Service',
      subtitle: 'Expert insurance consultation and support'
    }
  ];

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === familyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [familyImages.length]);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchValue.trim()) {
      setError('Please enter a search value');
      return;
    }

    setLoading(true);
    setError('');
    setPolicy(null);

    try {
      const result = await policyAPI.searchPolicy(searchType, searchValue.trim());
      setPolicy(result.data);
    } catch (err) {
      if (err.response?.status === 404) {
        setError('Policy not found. Please check your CNIC or policy number.');
      } else {
        setError(err.response?.data?.message || 'An error occurred while searching');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSearchValue('');
    setPolicy(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      {/* Hero Section with Background Slider */}
      <div id="hero" className="relative h-screen overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {familyImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              
              {/* Hero Content */}
              <div className="absolute inset-0 flex items-end justify-center text-center text-white px-4 pb-32">
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                    {image.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-light drop-shadow-md">
                    {image.subtitle}
                  </p>
                </div>
              </div>

              {/* Introduction Section - Left Side */}
              <div className="absolute left-4 md:left-8 top-1/3 transform -translate-y-1/2 text-white text-left max-w-xs md:max-w-lg">
                <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-emerald-200/20 shadow-2xl">
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-sm md:text-base leading-relaxed drop-shadow-lg font-light">
                      Welcome! I'm <span className="font-semibold text-emerald-200">Azhar Mahmood</span>, proudly serving as Sales Manager at <span className="font-semibold text-emerald-200">State Life Insurance Corporation of Pakistan</span>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed drop-shadow-lg font-light">
                      This website is designed to make it easier for our customers to access their policy details with comfort and confidence.
                    </p>
                    <p className="text-sm md:text-base font-medium text-emerald-200 drop-shadow-lg">
                      Thank you for trusting us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {familyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImageIndex
                  ? 'bg-white shadow-lg'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Search Card Section */}
      <div id="policy-search" className="relative bg-gradient-to-b from-white via-emerald-50/30 to-green-100/50 py-16">
        <div className="max-w-2xl mx-auto px-4">
          {/* Brand Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-700 rounded-full shadow-lg mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C14.8,12.4 14.4,13.2 13.7,13.7L12.4,14.8C12.1,15.1 11.9,15.1 11.6,14.8L10.3,13.7C9.6,13.2 9.2,12.4 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7Z"/>
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              SecureLife Insurance
            </h2>
            <p className="text-gray-600 text-lg">
              Your trusted partner in life's journey
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Find Your Policy
              </h3>
              <p className="text-gray-600 text-lg">
                Enter your details below to access your policy information
              </p>
            </div>

            <form onSubmit={handleSearch} className="space-y-6">
              {/* Radio Buttons */}
              <div className="flex justify-center space-x-8">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="cnic"
                    checked={searchType === 'cnic'}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
                  />
                  <span className="ml-2 text-base font-medium text-gray-700">
                    Search by CNIC
                  </span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="policyNumber"
                    checked={searchType === 'policyNumber'}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-base font-medium text-gray-700">
                    Search by Policy Number
                  </span>
                </label>
              </div>

              {/* Search Input */}
              <div className="space-y-4">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={
                    searchType === 'cnic'
                      ? 'Enter your CNIC (e.g., 12345-1234567-1)'
                      : 'Enter your policy number'
                  }
                  className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Searching...
                    </div>
                  ) : (
                    'Search Policy'
                  )}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {policy && (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Policy Found</h2>
              <button
                onClick={handleReset}
                className="px-6 py-2 text-emerald-600 hover:text-emerald-700 font-semibold hover:bg-emerald-50 rounded-lg transition-all duration-200"
              >
                Search Again
              </button>
            </div>
            <PolicyCard policy={policy} />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.5V11.5C14.8,12.4 14.4,13.2 13.7,13.7L12.4,14.8C12.1,15.1 11.9,15.1 11.6,14.8L10.3,13.7C9.6,13.2 9.2,12.4 9.2,11.5V10.5C9.2,8.6 10.6,7 12,7Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">SecureLife Insurance</h3>
              </div>
              <p className="text-emerald-100 leading-relaxed mb-4">
                State Life Insurance Corporation of Pakistan - Your trusted partner in securing life's precious moments. 
                We provide comprehensive insurance solutions with a commitment to excellence and customer satisfaction.
              </p>
              <p className="text-emerald-200 font-medium">
                Protecting families, Building futures
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-200">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-emerald-100 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="#policy-search" className="text-emerald-100 hover:text-white transition-colors duration-200">Search Policy</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition-colors duration-200">Our Services</a></li>
                <li><a href="#" className="text-emerald-100 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-200">Contact Info</h4>
              <div className="space-y-3 text-emerald-100">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium">Rahim Yar Khan, Punjab, Pakistan</div>
                    <div className="text-xs text-emerald-200 mt-1">House # 12, Street # 02, Rahim Garden Near Gulshan Iqbal Scheme # 03</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">+92-301-7628945</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm">azharmahmoodryk@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-emerald-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-200 text-sm mb-4 md:mb-0">
              © 2024 State Life Insurance Corporation of Pakistan. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SearchPolicy;
