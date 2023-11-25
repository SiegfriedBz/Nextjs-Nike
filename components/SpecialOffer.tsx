import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const SpecialOffer = () => {
  return (
    <div className='flex flex-col justify-center xl:flex-row-reverse'>
      {/* text */}
      <div className='flex flex-col justify-start xl:justify-center'>
        <h2 className='text-5xl font-palanquin font-bold capitalize'>
          <span className='text-coral-red'>Special</span> offer
        </h2>
        <p className='mt-6 font-montserrat text-slate-gray'>
          Experience top notch quality and style with our sought after
          selection.
        </p>
        <p className='mt-4 font-montserrat text-slate-gray'>
          Discover a world of comfort, design, and value.
        </p>

        {/* cta */}
        <div className='mt-8 flex gap-8'>
          <CustomButton
            label='Shop Now'
            src='/icons/arrow-right.svg'
            alt='/arrow-right'
            pushTo='/#products'
          />
          <CustomButton
            label='Learn More'
            pushTo='/#products'
            className='border-2 bg-transparent text-sm text-slate-gray hover:bg-coral-red hover:text-primary'
          />
        </div>
      </div>

      {/* images */}
      <div className='flex flex-1 items-center justify-center max-xl:mt-8 xl:justify-start'>
        <Image
          src='/images/offer.svg'
          alt='offer'
          width={655}
          height={955}
          className='w-full object-contain'
        />
      </div>
    </div>
  )
}

export default SpecialOffer
