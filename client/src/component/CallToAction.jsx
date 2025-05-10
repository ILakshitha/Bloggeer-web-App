import React from 'react';
import { Button } from 'flowbite-react';

export default function CallToAction({ 
  title = "Want to learn more about React JS?",
  description = "Checkout these resources with 100 React Projects",
  buttonText = "100 React JS Projects",
  buttonLink = "https://www.100jsprojects.com",
  imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgiA0Ctf8cTZzwlBxQP_Y85pKdOCWcfYDjZAN9DEcGA&s",
  gradientColors = "purpleToPink", // Options: purpleToPink, pinkToOrange, cyanToBlue, greenToBlue, purpleToBlue, etc.
  bgColor = "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
}) {
  return (
    <div className={`${bgColor} rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700`}>
      <div className="flex flex-col sm:flex-row items-center">
        {/* Content Side */}
        <div className="flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-md mx-auto sm:mx-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {title}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>
            
            <Button 
              gradientDuoTone={gradientColors}
              className="rounded-lg shadow-md hover:shadow-lg transform transition hover:-translate-y-0.5"
            >
              <a 
                href={buttonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                {buttonText}
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </Button>
          </div>
        </div>
        
        {/* Image Side */}
        <div className="flex-1 p-6 flex justify-center items-center">
          <div className="relative w-full max-w-md h-48 sm:h-64 overflow-hidden rounded-xl shadow-md transform transition-transform hover:scale-105">
            <img 
              src={imageSrc} 
              alt="Call to action" 
              className="object-cover w-full h-full"
            />
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}