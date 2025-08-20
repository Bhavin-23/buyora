import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faLock, faRotateLeft, faClock } from '@fortawesome/free-solid-svg-icons'

const features = [
  { icon: faTruck, text: 'Free Shipping', subtext: 'On orders over $100' },
  { icon: faLock, text: 'Secure Payment', subtext: '100% protected payments' },
  { icon: faRotateLeft, text: 'Easy Returns', subtext: '30-day return policy' },
  { icon: faClock, text: '24/7 Support', subtext: 'Dedicated customer service' },
]

const Features = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-center sm:text-left bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className="flex-shrink-0 h-12 w-12 text-yellow-500"
                size="lg"
                aria-hidden="true"
              />
              <div className="ml-5">
                <p className="text-lg font-semibold text-white">{feature.text}</p>
                <p className="mt-1 text-sm text-gray-400">{feature.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
