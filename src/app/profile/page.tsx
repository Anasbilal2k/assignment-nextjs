import React from 'react';
import Image from 'next/image';
import image from "@/image/anas.png"; // Ensure this path is correct

const Profile = () => {
  return (
    <div className="min-h-screen bg-yellow-200 flex items-center justify-center p-4"> {/* Reduced padding */}
      {/* Profile Section */}
      <div className="bg-yellow-200 rounded-xl p-4 w-full max-w-2xl"> {/* Reduced max width and padding */}
        <div className="flex items-start mt-4"> {/* Adjusted margin */}
          {/* Profile Picture */}
          <div className="relative w-32 h-32 mr-4"> {/* Increased size and added right margin */}
            <Image
              src={image} // Use the imported image
              alt="Profile Picture"
              layout="fill" // Fill the container
              objectFit="cover" // Maintain aspect ratio
              className="rounded-full" // Rounded corners
            />
          </div>

          {/* Bio */}
          <div className="flex-1 mt-2"> {/* Adjusted margin */}
            <h1 className="text-2xl font-bold mb-2">Anas Bilal</h1> {/* Reduced margin */}
            <p className="text-lg text-gray-700">
              Hi, my name is Anas Bilal. I&apos;m a chemist currently transitioning to web development. 
              I bring a strong analytical background and am passionate about combining my scientific skills with creative web solutions.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-4"> {/* Reduced margin */}
          <h2 className="text-xl font-semibold mb-2">Skills</h2> {/* Reduced margin */}
          <ul className="list-disc pl-5 space-y-1"> {/* Reduced spacing */}
            <li className="text-lg">Web Development (HTML, CSS, JavaScript, TypeScript, React, Next.js)</li>
            <li className="text-lg">Tailwind CSS for responsive UI design</li>
            <li className="text-lg">Analytical Chemistry and Lab Experience</li>
            <li className="text-lg">Scientific Research and Writing</li>
            <li className="text-lg">Problem Solving and Critical Thinking</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Connect with Me</h2> {/* Reduced margin */}
          <ul className="space-y-1"> {/* Reduced spacing */}
            <li>
              <a
                href="https://www.linkedin.com/in/anasbilal"
                target="_blank"
                rel="noopener noreferrer" // Added for security
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/anasbilal"
                target="_blank"
                rel="noopener noreferrer" // Added for security
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:anasbilal2020@gmail.com"
                className="text-blue-500 hover:underline"
              >
                Email: anasbilal2020@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;