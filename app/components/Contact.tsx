import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <>
    <div className="bg-fuchsia-300 w-auto h-auto">
        <h1 className='flex justify-center pt-36 text-5xl'>
        <b><i>Let&apos;s Create Beautiful Moments!</i></b>
        </h1>
        <p className='flex justify-center text-3xl pt-4'>
            Contact us for personalized bouquet services
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
    </div>
    <div className="bg-fuchsia-200 w-auto h-auto flex justify-between items-center p-12">
    <div>
        <h1 className='text-5xl'>
            <b><i>Free Shipping</i></b>
        </h1>
        <p className='text-3xl -mt-1'>
            Only for the same region
        </p>
        <p className='text-3xl mt-6'>
            Contact: 021-xxxxxxxx <br />
            Email: blissblissfulblooms@gmail.com
        </p>
    </div>

    <div>
        <Image src='/Footer.PNG' alt='Footer picture' width={250} height={250} className='m-10' />
    </div>
</div>

<div className="bg-gray-300 w-auto h-auto">
    <br/>
    <br/>
</div>

    <div className="bg-gray-300 w-auto h-auto">
        <br/>
        <br/>
    </div>
    </>
  )
}
