import SubscribeForm from './SubscribeForm'

const Subscribe = () => {
  return (
    <div className='flex scroll-mt-32 flex-col gap-16'>
      {/* text */}
      <h2 className='mx-auto font-palanquin text-4xl font-bold capitalize'>
        Sign up for <span className='text-coral-red'>updates</span> & newsletter
      </h2>

      {/* form */}
      <SubscribeForm />
    </div>
  )
}

export default Subscribe
