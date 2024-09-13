// pages/contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-4 rounded-md shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center">Contact Me</h1>
        
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Your Message"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium">You can also reach me at:</p>
          <p className="mt-2">Email: anasbilal2020@gmail.com</p>
          <p>Phone: +92 321 1055207</p>
          <p>Location: Rahim Yar Khan, Airport Road, Main Street</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
