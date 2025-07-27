import React from 'react';
import StateLifeLogo from './StateLifeLogo';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-800 to-green-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">About Us</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in securing life's precious moments since our establishment
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Azhar's SLIC - State Life Insurance Corporation of Pakistan</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                For decades, State Life Insurance Corporation of Pakistan has been a beacon of trust and security 
                for millions of families across the nation. We understand that life is unpredictable, and that's 
                why we're committed to providing comprehensive insurance solutions that protect what matters most.
              </p>
              <p>
                Our mission is simple yet profound: to ensure that every family has access to reliable insurance 
                coverage that gives them peace of mind and financial security. We believe in building lasting 
                relationships based on trust, transparency, and exceptional service.
              </p>
              <p>
                Through innovative products, personalized service, and unwavering commitment to our customers, 
                we continue to evolve while staying true to our core values of integrity, excellence, and care.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-green-200 rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="flex items-center justify-center mx-auto mb-6">
                  <StateLifeLogo width={100} height={75} className="shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Protecting Families</h3>
                <p className="text-gray-600">
                  Every policy we write is a promise to stand by our customers when they need us most.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trust */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,12L11,14L15,10M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships through honesty, transparency, and reliability in every interaction.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5,16L3,5L8.5,12L12,8L15.5,12L21,5L19,16H5M19,19A1,1 0 0,1 18,20H6A1,1 0 0,1 5,19V18H19V19Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Striving for the highest standards in our products, services, and customer experience.
              </p>
            </div>

            {/* Care */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Putting our customers' needs first with compassionate service and genuine concern for their well-being.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to serving you with expertise and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Azhar Mahmood */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-emerald-100">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">AM</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Azhar Mahmood</h3>
              <p className="text-emerald-600 font-semibold mb-4">Sales Manager</p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in the insurance industry, Azhar leads our sales team with dedication 
                and a customer-first approach, ensuring every client receives personalized service.
              </p>
            </div>

            {/* Additional team members can be added here */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-emerald-100">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Customer Service Team</h3>
              <p className="text-emerald-600 font-semibold mb-4">Support Specialists</p>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated customer service team is available to assist you with all your insurance needs, 
                providing prompt and helpful support whenever you need it.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-emerald-100">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Claims Department</h3>
              <p className="text-emerald-600 font-semibold mb-4">Claims Specialists</p>
              <p className="text-gray-600 leading-relaxed">
                Our experienced claims team ensures fast and fair processing of all claims, 
                making the process as smooth as possible during difficult times.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-emerald-100">Years of Trust</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-emerald-100">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-emerald-100">Policies Issued</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-emerald-100">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
