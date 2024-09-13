import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex justify-center items-center mt-10 bg-gradient-to-r from-black to-black text-white py-4 gap-8 shadow-lg rounded-lg px-20'>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/address'>Address</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  );
};

export default Header;
