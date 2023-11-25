import React from 'react'
import CustomButton from './CustomButton'
import HeroShoes from './HeroShoes'
import { STATS } from '@/constants'

const Hero = () => {
  return (
    <div
      className='max-container flex
        min-h-screen w-full 
        flex-col items-center 
        justify-center 
        xl:flex-row
        '
    >
      <div
        className='
        max-xl:padding-x 
        relative
        z-20
        flex
        w-full
        flex-col
        items-start justify-center
        gap-16
        pt-28
        xl:w-2/5
        '
      >
        <p className='font-montserrat text-xl text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='text-7xl font-palanquin font-bold uppercase max-sm:text-4xl'>
          <span className='pe-4 xl:whitespace-nowrap xl:bg-white'>
            The new arrival
          </span>{' '}
          <span className='whitespace-nowrap'>
            <span className='text-coral-red'>nike</span> shoes
          </span>
        </h1>
        <p className='text-slate-gray'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        {/* cta */}
        <CustomButton
          label='Shop Now'
          src='/icons/arrow-right.svg'
          alt='/arrow-right'
        />

        {/* stats */}
        <div className='-mt-16 flex gap-10 xl:mt-20'>
          {STATS.map((stat, index) => {
            return (
              <div key={index} className='flex flex-col items-start'>
                <p className='font-palanquin text-3xl font-bold'>
                  {stat.value}
                </p>
                <p className='-mt-2 text-slate-gray'>{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* img */}
      <HeroShoes />
    </div>
  )
}

export default Hero
