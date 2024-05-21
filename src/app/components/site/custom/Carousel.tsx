/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const autoSlideInterval = 3000;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, autoSlideInterval]);

  return (
    <div className="relative w-full  mx-auto">
      <div className="relative h-[434px] overflow-hidden rounded-md shadow-lg">
        {images.map((image: String, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={`${image}`}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-10 transform -translate-y-1/2  px-4 py-2 bg-white rounded-full shadow-md focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-10 transform -translate-y-1/2 px-4 py-2 bg-white rounded-full shadow-md focus:outline-none"
      >
        &#10095;
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
