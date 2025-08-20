import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 py-10">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl shadow-yellow-500/20 p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">
          Get in Touch with <span className="text-yellow-500">Buyora</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="text-gray-300 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-yellow-500">Contact Info</h3>
              <p className="text-gray-400">
                Have a question or need support? We're here to help you with your electronics journey.
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <strong className="text-yellow-400">📍 Address:</strong> 123 Tech Lane, Kolkata, India
              </p>
              <p>
                <strong className="text-yellow-400">📧 Email:</strong> support@zaptro.com
              </p>
              <p>
                <strong className="text-yellow-400">📞 Phone:</strong> +91 98765 43210
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-200 mb-1">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" 
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-1">Your Message</label>
              <textarea 
                rows="4" 
                placeholder="Type your message..." 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500">
              </textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-yellow-500/30"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
