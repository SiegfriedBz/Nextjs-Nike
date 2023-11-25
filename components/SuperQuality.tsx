import Image from 'next/image'
import CustomButton from './CustomButton'

const SuperQuality = () => {
  return (
    <div
      id='about-us'
      className='flex w-full scroll-mt-32 flex-col lg:flex-row lg:justify-between'
    >
      {/* text */}
      <div className='flex w-full max-w-xl flex-1  flex-col items-start justify-start gap-8 lg:mt-8 xl:mt-16'>
        <h2 className='text-5xl font-palanquin font-bold capitalize'>
          We provide you with{' '}
          <span className='text-coral-red'>super quality</span> shoes
        </h2>
        <p className='font-montserrat text-slate-gray sm:w-2/3'>
          Experience top notch quality and style with our sought after
          selection.
        </p>
        <p className='font-montserrat text-slate-gray sm:w-2/3'>
          Discover a world of comfort, design, and value.
        </p>

        {/* cta */}
        <CustomButton
          label='See details'
          pushTo='/#products'
          className='my-4 lg:mt-12'
        />
      </div>
      {/* img */}
      <div className='flex flex-1 items-center justify-center'>
        <Image
          src='/images/shoe8.svg'
          width={576}
          height={524}
          className='object-contain'
          alt='super quality shoes'
        />
      </div>
    </div>
  )
}

export default SuperQuality
