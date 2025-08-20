import React from 'react'
// import banner from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'

const MidBanner = () => {
  return (
    <div className="bg-gray-00 md:py-24">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]"
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 md:rounded-2xl flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-wide">
              Trendy Styles for Men, Women & Jewelry Lovers
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200">
              Discover the latest stylish apparel for men and women, plus stunning jewelry pieces.
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-amber-400 hover:from-yellow-400 hover:to-amber-300 text-black font-semibold py-2 px-5 md:py-3 md:px-8 rounded-lg shadow-lg transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
