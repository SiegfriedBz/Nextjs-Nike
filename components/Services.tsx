import ServiceCard from './ServiceCard'
import { SERVICES } from '@/constants'

const Services = () => {
  return (
    <div className='flex w-full flex-wrap justify-start gap-8'>
      {SERVICES.map((service, index) => {
        return <ServiceCard key={index} {...service} />
      })}
    </div>
  )
}

export default Services
