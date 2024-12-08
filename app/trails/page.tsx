'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const TrailsPage = () => {
    const router = useRouter();
    return (
        <>
            <div className='bg-[#090909] h-[98dvh] flex flex-col p-4'>
                <div className="uppercase pt-4">
                    <h2 className="text-base font-bold text-neutral-100/30 mb-4">footprint map</h2>
                    <p className="text-4xl font-bold">
                        new trails
                        <br /> are comming...
                    </p>
                </div >
                <div
                    className="mt-auto aspect-square bg-cover rounded-[.5rem]"
                    style={{ backgroundImage: `url(https://res.cloudinary.com/duscymcfc/image/upload/v1731837572/paws/kzsfcau78ggzo5i3sks4.gif)` }}
                ></div>
                <div className='flex justify-center items-center '>
                <button onClick={()=> router.push('/dashboard')} className=' bg-blue-500 w-[95%] p-4 rounded-xl'>
                    Got It
                </button>
                </div>
            </div>
        </>
    )
}

export default TrailsPage