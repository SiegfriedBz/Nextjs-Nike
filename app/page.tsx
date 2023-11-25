import {
  CustomerReviews,
  PopularProducts,
  Services,
  Hero,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from '@/components'

export default function Home() {
  return (
    <div>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>

      <section className='padding'>
        <PopularProducts />
      </section>

      <section className='padding'>
        <SuperQuality />
      </section>

      <section className='padding-x padding-y-small bg-green-500'>
        <Services />
      </section>

      <section className='padding'>
        <SpecialOffer />
      </section>

      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>

      <section className='padding-x padding-y-big w-full bg-amber-500'>
        <Subscribe />
      </section>
    </div>
  )
}
