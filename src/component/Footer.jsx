import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-950 via-gray-900 to-black text-gray-300 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div className="text-center sm:text-left">
          <Link to="/" className="text-3xl font-bold tracking-wide text-yellow-500">Buyora</Link>
          <p className="mt-3 text-gray-400">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="mt-3">123 Electronics St, Style City, NY 10001</p>
          <p className="mt-1">Email: <span className="text-yellow-500">support@zaptro.com</span></p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3 text-yellow-500">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-yellow-400 cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-yellow-400 cursor-pointer">FAQs</li>
            <li className="hover:text-yellow-400 cursor-pointer">Order Tracking</li>
            <li className="hover:text-yellow-400 cursor-pointer">Size Guide</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3 text-yellow-500">Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-5 mt-3 text-xl">
            <FontAwesomeIcon icon={faFacebookF} className="hover:text-yellow-500 cursor-pointer transition" />
            <FontAwesomeIcon icon={faInstagram} className="hover:text-yellow-500 cursor-pointer transition" />
            <FontAwesomeIcon icon={faTwitter} className="hover:text-yellow-500 cursor-pointer transition" />
            <FontAwesomeIcon icon={faPinterestP} className="hover:text-yellow-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-3 text-yellow-500">Stay in the Loop</h3>
          <p className="text-gray-400">Subscribe for offers & updates</p>
          <form className="mt-5 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-3 rounded-t sm:rounded-l sm:rounded-tr-none bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-yellow-500 to-amber-400 hover:from-yellow-400 hover:to-amber-300 px-5 py-3 sm:py-0 rounded-b sm:rounded-r sm:rounded-bl-none text-black font-semibold transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-800 pt-5">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} <span className="text-yellow-500">Buyora</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
