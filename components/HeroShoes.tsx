'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SHOES } from '@/constants'

const HeroShoes = () => {
  const [selectedShoe, setselectedShoe] = useState(() => SHOES[0])

  return (
    <div className='relative z-10 flex h-[80vh] w-full items-center justify-center xl:h-[85vh] xl:flex-1 '>
      <div className='absolute inset-0 bg-primary' />
      <Image
        src={selectedShoe.src}
        width={685}
        height={685}
        className='z-10 object-contain'
        alt={selectedShoe.alt}
      />
      <div
        className='absolute
            bottom-0
            left-1/2
            flex
            w-full
            -translate-x-1/2
            translate-y-1/2
            items-center
            justify-around
        '
      >
        {SHOES.map((shoe, index) => {
          return (
            <div
              key={index}
              onClick={() => setselectedShoe(shoe)}
              className={`
                relative 
                h-[5rem] w-1/4
                cursor-pointer
                rounded-xl
                border-coral-red bg-white
                 ${
                   shoe === selectedShoe
                     ? 'border-[0.1rem]'
                     : 'border-[0.01rem]'
                 }
                `}
            >
              <Image
                src={shoe.src}
                fill
                className='object-contain'
                alt={shoe.alt}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HeroShoes
