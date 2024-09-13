
import Link from 'next/link';

const Footer = () => {
  return (
   <footer>  <div className='flex justify-center items-center mt-15 bg-gradient-to-r from-black to-black text-white py-4 gap-8 shadow-lg rounded-lg px-20'>
   <Link href='/profile'>Profile</Link>
   <Link href='/search'>Search</Link>
   <Link href='/settings'>Settings</Link>
   <Link href='/cart'>Cart</Link>
 </div></footer>
  );
};

export default Footer;
