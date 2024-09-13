import React from 'react';
import Image from 'next/image';
import image from "@/image/anas.png";

const About = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-yellow-300">
      <div className="flex flex-col md:flex-row items-center bg-green-100 rounded-xl p-8 space-y-6 md:space-y-0 md:space-x-6 w-full max-w-4x2"> {/* Adjusted max-width */}
        
        {/* Image on the left */}
        <div className="flex-shrink-0 order-2 md:order-1">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image 
              src={image} // Image path inside the public/image folder
              alt="Anas Bilal"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg" // Make the image rounded
            />
          </div>
        </div>

        {/* Text content on the right */}
        <div className="order-1 md:order-2 flex-1">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-black">
            Hi, I&apos;m a chemist, currently transitioning to web development. With a background in analytical chemistry, I&apos;m bringing a methodical approach to learning web technologies. I&apos;m excited to merge my analytical skills with creative problem-solving as I explore the dynamic field of web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;