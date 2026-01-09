"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const FiveStars = ({ 
  rating = 5, 
  colors = ['red', 'green', 'orange', 'blue', 'yellow'],
  size = 'w-5 h-5'
}) => {
  const getStarColor = (starIndex, rating, colors) => {
    const colorIndex = starIndex % colors.length;
    const baseColor = colors[colorIndex];
    
    // Color mappings for Tailwind classes
    const colorMap = {
      red: { filled: 'text-red-500', empty: 'text-red-200' },
      green: { filled: 'text-green-500', empty: 'text-green-200' },
      orange: { filled: 'text-orange-500', empty: 'text-orange-200' },
      blue: { filled: 'text-blue-500', empty: 'text-blue-200' },
      yellow: { filled: 'text-yellow-500', empty: 'text-yellow-200' },
      purple: { filled: 'text-purple-500', empty: 'text-purple-200' },
      pink: { filled: 'text-pink-500', empty: 'text-pink-200' },
      indigo: { filled: 'text-indigo-500', empty: 'text-indigo-200' },
      gray: { filled: 'text-gray-500', empty: 'text-gray-200' },
      teal: { filled: 'text-teal-500', empty: 'text-teal-200' }
    };

    const fillLevel = rating - starIndex;
    
    if (fillLevel >= 1) {
      return colorMap[baseColor]?.filled || 'text-gray-500';
    } else if (fillLevel > 0) {
      return colorMap[baseColor]?.filled || 'text-gray-500';
    } else {
      return colorMap[baseColor]?.empty || 'text-gray-200';
    }
  };

  const getStarFill = (starIndex, rating) => {
    const fillLevel = rating - starIndex;
    if (fillLevel >= 1) return 1; // Full star
    if (fillLevel > 0) return fillLevel; // Partial star
    return 0; // Empty star
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        const fillPercentage = getStarFill(i, rating);
        const colorClass = getStarColor(i, rating, colors);
        
        return (
          <div key={i} className="relative">
            {fillPercentage > 0 && fillPercentage < 1 ? (
              // Half star implementation
              <div className="relative">
                <svg className={`${size} text-gray-200 fill-current`} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div 
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${fillPercentage * 100}%` }}
                >
                  <svg className={`${size} ${colorClass} fill-current`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            ) : (
              // Full or empty star
              <svg className={`${size} ${colorClass} fill-current`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

const StudentSuccessSection = () => {
  const router = useRouter();
  const starColors = ['yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
  
  const testimonials = [
    {
      quote: "Lumina helped me cope with stress during finals. The AI check-ins are amazing and really helped me stay grounded!",
      name: "Sarah M.",
      role: "College Student",
      rating: 5,
      color: "from-blue-100 to-blue-50"
    },
    {
      quote: "Booking a therapist was easy and affordable. I finally feel supported and understood. This platform changed my life.",
      name: "Michael R.",
      role: "Working Professional",
      rating: 5,
      color: "from-purple-100 to-purple-50"
    },
    {
      quote: "The AI support is incredible - it's like having someone to talk to 24/7. I use it offline when I need privacy most.",
      name: "Emily T.",
      role: "High School Student",
      rating: 5,
      color: "from-green-100 to-green-50"
    }
  ];
  
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Users Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who found support through Lumina
          </p>
        </div>

        {/* testimonial cards - carousel style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${testimonial.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200`}
            >
              {/* quote icon */}
              <div className="text-6xl text-blue-600 opacity-20 mb-4">"</div>
              
              {/* stars */}
              <div className="mb-6">
                <FiveStars 
                  rating={testimonial.rating} 
                  colors={starColors}
                  size="w-6 h-6"
                />
              </div>
              
              {/* quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                {testimonial.quote}
              </p>
              
              {/* author */}
              <div className="border-t border-gray-300 pt-6">
                <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* stats banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <p className="text-xl opacity-90">Active Users</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-xl opacity-90">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-xl opacity-90">AI Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSuccessSection;