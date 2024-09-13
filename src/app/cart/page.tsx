// pages/cart/page.tsx
'use client'; // This marks the component as a Client Component

import React, { useState } from 'react';
import Image from 'next/image'; // Importing Next.js Image component

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  // Sample product data for an AI Book
  const product = {
    id: 1,
    name: 'Mastering AI with Python',
    price: 39.99,
    image: '/images/ai-book.jpg', // Replace with your AI book image path
    description: 'A comprehensive guide to mastering AI techniques and models with Python.',
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        {/* Product Details */}
        <div className="flex items-center mb-4">
          <div className="relative w-24 h-24 rounded-md mr-4">
            <Image 
              src={product.image} // Image path for AI book
              alt={product.name}
              layout="fill" // Fill the container
              objectFit="cover" // Cover the container while maintaining aspect ratio
              className="rounded-md" // Apply rounded corners
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-full p-2 border border-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cart Summary */}
        <div className="flex justify-between font-bold mt-4">
          <span>Total:</span>
          <span>${(product.price * quantity).toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <div className="flex justify-center mt-6">
          <button
            className="bg-yellow-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
