import React, { useEffect } from 'react';
import Category from './Category';
import { getData } from '../context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Carousel = () => {
  const { data, fetchAllProduct } = getData();

  useEffect(() => {
    fetchAllProduct();
  }, []);

  // Previous Arrow
  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{
        zIndex: 3,
        left: "20px", // smaller margin for mobile
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="text-black bg-yellow-500 hover:bg-yellow-400 p-2 sm:p-3 rounded-full text-lg sm:text-xl cursor-pointer shadow-lg"
      />
    </div>
  );

  // Next Arrow
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      style={{
        zIndex: 3,
        right: "20px", // smaller margin for mobile
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      }}
    >
      <FontAwesomeIcon
        icon={faArrowRight}
        className="text-black bg-yellow-500 hover:bg-yellow-400 p-2 sm:p-3 rounded-full text-lg sm:text-xl cursor-pointer shadow-lg"
      />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-900 via-black to-gray-900"
          >
            <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 gap-6 md:gap-10 min-h-[400px] sm:min-h-[500px] md:h-[600px]">
              
              {/* Text Section */}
              <div className="text-gray-100 md:space-y-6 space-y-3 max-w-lg text-center md:text-left px-2 sm:px-0">
                <h3 className="text-yellow-500 text-xs sm:text-sm font-semibold tracking-wide">
                  Powering Your World with the Best in Electronics
                </h3>
                <h1 className="text-lg sm:text-2xl md:text-4xl font-bold uppercase line-clamp-2">
                  {item.title}
                </h1>
                <p className="text-gray-300 text-sm sm:text-base line-clamp-3">
                  {item.description}
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg font-semibold transition-all text-sm sm:text-base">
                  Shop Now
                </button>
              </div>

              {/* Image Section */}
              <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center mt-6 md:mt-0">
                <div className="absolute w-full h-full bg-white rounded-full shadow-lg shadow-red-300 animate-spin-slow"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-contain rounded-full z-10"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </>
  );
};
