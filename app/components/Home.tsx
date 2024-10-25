import React from 'react';
import Image from 'next/image';
import { FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';

export default function HomePage() {
  return (
    <>
    <div className="bg-fuchsia-300 min-h-screen">
      <div className='flex justify-start'>
      <div>
      <button className='text-white font-thin p-5 pl-52'><b>Home</b></button>
      <button className='text-white font-thin p-5'><b>Contact</b></button>
      <button className='text-white font-thin p-5'><b>Best Sellers</b></button>
      </div>

      <div className='flex justify-center pt-5 pl-24'>
      <Image
            src="/logo.PNG"
            alt="Profile Picture"
            width={72}
            height={72}
            className="shadow-lg"
          />
      </div>

      <div className="flex justify-end pl-36">
      <button><FiSearch className="h-6 w-6 text-gray-500 m-5" /></button>
      <button><FiShoppingCart className="h-6 w-6 text-gray-500 m-5" /></button>
      <button><FiUser className="h-6 w-6 text-gray-500 m-5" /></button>
    </div>

</div>

<div className='flex justify-start'>
<div className='w-auto h-52 p-32'>
  <p className='text-5xl text-white -mt-7'>
    "Blissful Blooms, 
    <br/>Delivered to Your Door –Fresh Flowers, 
    <br/>Handpicked for Every 
    <br/>Special Moment!"</p>
</div>

<div className='flex justify-end'>
  <Image src='/Landing Picture.PNG' alt='Landingpage Picture' width={300} height={300} className='m-28'/>
</div>
</div>
    </div>
    </>
  );
}
