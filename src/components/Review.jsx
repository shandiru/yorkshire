import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviewsData } from "../global";

const Reviews = ({ title = "CLIENT'S REVIEWS", reviews = reviewsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () =>
    setCurrentIndex((prev) => (prev + 1) % reviews.length);

  const prevReview = () =>
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  const currentReview = reviews[currentIndex];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 sm:w-6 sm:h-6 ${
            index < rating ? "text-primary" : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div id="testimonials" className="bg-[#F3F4F6] dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4">
            <div className="w-1 h-16 sm:h-20 bg-primary"></div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black dark:text-white">
              {title}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Image */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <img
              src={currentReview.image}
              alt={currentReview.name}
              className="w-full h-100 sm:h-125 lg:h-150 object-cover"
            />
            <div className="absolute top-0 right-0 w-20 h-1 bg-primary" />
          </div>

          {/* Content */}
          <div className="space-y-6 relative">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl font-bold">
                  {currentReview.initial}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black dark:text-white">
                {currentReview.name}
              </h3>
            </div>

            <p className="dark:text-white text-base sm:text-lg leading-relaxed">
              {currentReview.review}
            </p>

            <StarRating rating={currentReview.rating} />

            <p className="dark:text-white text-sm sm:text-base font-medium">
              {currentReview.service}
            </p>

            {/* Arrows */}
            <div className="absolute -bottom-20 right-0 flex gap-4">
              <button
                onClick={prevReview}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary flex items-center justify-center bg-secondary-hover dark:text-white dark:hover:text-white transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextReview}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary flex items-center justify-center bg-secondary-hover dark:text-white dark:hover:text-white transition"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-gray-300 dark:bg-gray-600 w-2"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;