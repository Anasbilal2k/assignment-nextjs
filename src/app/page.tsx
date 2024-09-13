import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import image from "@/image/h.png"; // Ensure the correct path and file extension

const HomePage = () => {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center bg-green-100 rounded-xl p-8 space-x-0 md:space-x-6">
        {/* Left side: description */}
        <div className="flex-1 bg-green p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-6">Welcome Home</h1>
          <p className="text-lg">
            Nestled in the heart of Rahim Yar Khan, our beautiful home is located conveniently near the airport. This tranquil residence offers easy access to travel and local amenities, making it a perfect retreat for both short visits and extended stays.
          </p>
          <p className="text-lg mt-4">
            Enjoy the comfort and convenience of living in a serene neighborhood with all the essentials within reach.
          </p>
        </div>
        
        {/* Right side: image */}
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <div className="relative w-48 h-48 md:w-96 md:h-96">
            <Image
              className="rounded-full" // Make the image rounded
              src={image} // Use the imported image variable
              alt="My House"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;