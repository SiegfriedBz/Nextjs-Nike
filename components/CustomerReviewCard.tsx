import Image from 'next/image'

type Props = {
  src: string
  customerName: string
  rating: number
  feedback: string
}

const CustomerReviewCard = ({ src, customerName, rating, feedback }: Props) => {
  return (
    <div className='flex h-80 w-80 flex-col items-center justify-center rounded-lg p-4 shadow-3xl'>
      <Image
        src={src}
        alt={customerName}
        width={96}
        height={96}
        className='rounded-full'
      />
      <h3 className='mt-2 font-palanquin text-2xl font-bold capitalize'>
        {customerName}
      </h3>

      <p className='my-2 text-center font-montserrat text-slate-gray'>
        {feedback}
      </p>
      <div className='flex items-center justify-center gap-2'>
        {Array.from({ length: rating }).map((_, index) => {
          return (
            <Image
              key={index}
              src='/icons/star.svg'
              alt='star'
              width={20}
              height={20}
            />
          )
        })}
        ({rating})
      </div>
    </div>
  )
}

export default CustomerReviewCard
