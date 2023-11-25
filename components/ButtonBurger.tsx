'use client'

import { useAppStore } from '@/store'
import Image from 'next/image'

const ButtonBurger = () => {
  const { toggleMobileMenu } = useAppStore()

  return (
    <button
      className='z-50 flex items-center justify-center'
      onClick={() => {
        toggleMobileMenu((prev: boolean) => {
          return !prev
        })
      }}
    >
      <Image src='/icons/hamburger.svg' alt='Burger' width={25} height={25} />
    </button>
  )
}

export default ButtonBurger
