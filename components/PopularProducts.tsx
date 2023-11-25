import PopularProductCard from './PopularProductCard'
import { PRODUCTS } from '@/constants'

const PopularProducts = () => {
  return (
    <div id='products' className='flex scroll-mt-32 flex-col gap-16'>
      {/* text */}
      <div className='flex flex-col justify-start gap-8'>
        <h2 className='font-palanquin text-4xl font-bold capitalize'>
          Our <span className='text-coral-red'>Popular</span> products
        </h2>
        <p className='font-montserrat text-slate-gray sm:w-2/3'>
          Experience top notch quality and style with our sought after
          selection. Discover a world of comfort, design, and value.
        </p>
      </div>

      {/* products */}
      <div className='flex flex-wrap items-center justify-center gap-8 sm:justify-start sm:gap-4'>
        {PRODUCTS.map((product, index) => {
          /* product card */
          return <PopularProductCard key={index} product={product} />
        })}
      </div>
    </div>
  )
}

export default PopularProducts
