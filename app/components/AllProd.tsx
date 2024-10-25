import React from 'react'
import Image from 'next/image'

export default function AllProd() {
  return (
    <>
    <div className="bg-fuchsia-300 min-h-screen">
        <div className='flex justify-center'>
            <Image src='/CompleteCollection.PNG' alt='Logo' width={150} height={150} className='pt-10' />
        </div>

        <div className="flex justify-start space-x-4 w-auto h-auto pl-16">
        
        {/* Image 1 */}
        <div className='-mt-0.25 pt-12'>
          <Image
            src="/Blush&Snow.jpeg"
            alt="Pastel Dream"
            width={225}  
            height={225}  
          />
          <div className="text-center bg-black">
            <p className="font-bold text-lg text-white">Blush & Snow</p>
            <p className="text-white">$17</p>
            <p className="text-lg">
  <span className="text-yellow-400">★</span> 
  <span className="text-white ml-1">4.7</span> 
</p>
          </div>
        </div>
        
        {/* Image 2 */}
        <div className='-mt-0.25 pt-12'>
          <Image
            src="/PetalFusion.jpeg"  
            alt="Red Bliss"
            width={250}
            height={250}
          />
          <div className="text-center bg-black">
            <p className="font-bold text-lg text-white">Petal Fusion</p>
            <p className="text-white">$12</p>
            <p className="text-lg">
  <span className="text-yellow-400">★</span> 
  <span className="text-white ml-1">4.6</span> 
</p>

          </div>
        </div>

        {/* Image 3 */}
        <div className='-mt-0.25 pt-12'>
          <Image
            src="/JoyfulBloom.jpeg" 
            alt="Delicate Delight"
            width={310}
            height={310}
          />
          <div className="text-center bg-black">
            <p className="font-bold text-lg text-white">Joyful Bloom</p>
            <p className="text-white">$9</p>
            <p className="text-lg">
  <span className="text-yellow-400">★</span> 
  <span className="text-white ml-1">4.6</span> 
</p>
          </div>
        </div>
      
      {/* Image 4 */}
      <div className='-mt-0.25 pt-12'>
          <Image
            src="/PetalBliss.jpeg"  
            alt="Red Bliss"
            width={225}
            height={310}
          />
          <div className="text-center bg-black">
            <p className="font-bold text-lg text-white">Petal Bliss</p>
            <p className="text-white">$16</p>
            <p className="text-lg">
  <span className="text-yellow-400">★</span> 
  <span className="text-white ml-1">4.7</span> 
</p>

          </div>
        </div>

      </div>
      
      <div className='flex justify-center'>
            <button className='text-white bg-pink-900 font-thin m-4 h-16 w-32 rounded-md'><b>Go Back</b></button>
        </div>
    </div>
    </>
  )
}
