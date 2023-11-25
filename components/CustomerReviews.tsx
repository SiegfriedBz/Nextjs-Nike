import { REVIEWS } from '@/constants'
import CustomerReviewCard from './CustomerReviewCard'

const CustomerReviews = () => {
  return (
    <div className='flex scroll-mt-32 flex-col gap-16'>
      {/* text */}
      <div className='flex flex-col justify-start'>
        <h2 className='font-palanquin text-4xl font-bold capitalize'>
          What our <span className='text-coral-red'>customers</span> say?
        </h2>
        <p className='mt-6 font-montserrat text-slate-gray sm:w-2/3'>
          Experience top notch quality and style with our sought after
          selection.
        </p>
        <p className='mt-4 font-montserrat text-slate-gray sm:w-2/3'>
          Discover a world of comfort, design, and value.
        </p>
      </div>

      {/* reviews */}
      <div className='flex flex-wrap justify-center gap-16'>
        {REVIEWS.map((review, index) => {
          return <CustomerReviewCard key={index} {...review} />
        })}
      </div>
    </div>
  )
}

export default CustomerReviews
