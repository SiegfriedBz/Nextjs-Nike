import Image from 'next/image'

type Props = {
  src: string
  label: string
  description: string
}

const ServiceCard = ({ src, label, description }: Props) => {
  return (
    <div className='flex h-64 w-[404px] flex-col justify-center rounded-md p-4 shadow-3xl'>
      <Image
        src={src}
        alt='logo'
        width={35}
        height={35}
        className='rounded-full bg-coral-red p-1'
      />
      <h3 className='mt-6 font-palanquin text-2xl font-semibold capitalize'>
        {label}
      </h3>
      <p className='mt-4 font-montserrat text-slate-gray'>{description}</p>
    </div>
  )
}

export default ServiceCard
