import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type PropsType = {
  btnType?: 'button' | 'submit'
  className?: string
  label: string
  src?: string
  alt?: string
}
const CustomButton = ({
  btnType = 'button',
  className = '',
  label = '',
  src = '',
  alt = '',
}: PropsType) => {
  return (
    <button
      type={btnType}
      className={twMerge(
        `
        flex 
        items-center justify-center
        gap-2
        rounded-2xl
        border
        border-primary bg-coral-red
        px-4
        py-2
        font-montserrat
        font-semibold
        text-primary
        transition
        duration-300
        ease-in-out
        hover:border-coral-red
        hover:bg-transparent
        hover:text-coral-red
        xl:gap-x-4
        xl:px-8
        xl:py-4
        xl:text-xl
        `,
        className
      )}
    >
      {label}
      {src && <Image src={src} width={24} height={24} alt={alt} />}
    </button>
  )
}

export default CustomButton
