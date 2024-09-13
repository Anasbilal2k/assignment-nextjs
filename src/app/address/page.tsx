import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component
import image from "@/image/Fahome.png"; // Path to the house image

const Address = () => {
  return (
    <div className="h-screen bg-yellow-400 flex items-center justify-center">
      <div className="bg-green-100 p-10 rounded-md shadow-md text-center relative">
        {/* House image slightly lower */}
        <div className="absolute top-12 left-4">
          <Image src={image} alt="House Icon" width={50} height={50} />
        </div>

        <h1 className="text-2xl font-semibold mb-6">My Address</h1>

        {/* City Section */}
        <div className="bg-white p-4 rounded-md mb-4 shadow-md">
          <h2 className="text-xl font-medium mb-2">City</h2>
          <p className="text-lg">Rahim Yar Khan</p>
        </div>

        {/* Location Section */}
        <div className="bg-white p-4 rounded-md mb-4 shadow-md">
          <h2 className="text-xl font-medium mb-2">Location</h2>
          <p className="text-lg">Airport Road, Main Street</p>
          <p className="text-lg">Mohala Fareedi, near the water tank</p>
        </div>

        {/* Postal Code Section */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-medium mb-2">Postal Code</h2>
          <p className="text-lg">64200</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
