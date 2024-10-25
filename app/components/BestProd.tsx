import React from 'react'
import Image from 'next/image'

export default function BestProd() {
    
  return (
    <>
    <div className="bg-fuchsia-300 min-h-screen">
        <div>
            <Image src='/BestSellingLogo.PNG' alt='Logo' width={250} height={250} className='pl-16 pt-24' />
            <button className='text-white bg-pink-900 font-thin ml-24 m-48 h-16 w-32 rounded-md'><b>View All Products</b></button>
        </div>

      <div className="flex justify-end space-x-4 w-auto h-auto">
        
        {/* Image 1 */}
        <div  className='-mt-[450px]'>
          <Image
            src="/bs1.jpeg"
            alt="Pastel Dream"
            width={250}  
            height={250}  
          />
          <div className="text-center bg-black">
            <p className="font-bold text-lg text-white">Pastel Dream</p>
            <p className="text-white">$15</p>
            <p className="text-lg">
  <span className="text-yellow-400">★</span> 
  <span className="text-white ml-1">5.0</span> 
</p>
          </div>
        </div>
        
        {/* Image 2 */}
        <div className='-mt-[450px]'>
          <Image
            src="/bs2.jpeg"  
            alt="Red Bliss"
            width={310}
            height={310}
          />
          <div className="text-center bg-black">
            <p className="font-bold text-lg text-white">Red Bliss</p>
            <p className="text-white">$20</p>
            <p className="text-lg">
  <span className="text-yellow-400">★</span> 
  <span className="text-white ml-1">5.0</span> 
</p>

          </div>
        </div>

        {/* Image 3 */}
        <div className='-mt-[450px]'>
          <Image
            src="/bs3.PNG" 
            alt="Delicate Delight"
            width={250}
            height={250}
          />
          <div className="text-center bg-black">
            <p className="font-bold text-lg text-white">Delicate Delight</p>
            <p className="text-white">$12</p>
            <p className="text-lg">
  <span className="text-yellow-400">★</span> 
  <span className="text-white ml-1">5.0</span> 
</p>
          </div>
        </div>
      
      </div>
        </div>
    </>
  )
}
