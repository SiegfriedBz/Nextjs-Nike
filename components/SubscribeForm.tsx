'use client'

import CustomButton from './CustomButton'

const SubscribeForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex flex-wrap justify-center gap-4'
    >
      <input
        type='email'
        placeholder='Enter your email'
        className='w-full flex-1 rounded-lg border border-slate-gray/50 px-4 py-2 font-montserrat text-slate-gray outline-none focus:border-slate-gray md:max-w-sm'
      />
      <CustomButton
        btnType='submit'
        label='Subscribe'
        className='w-fit whitespace-nowrap'
      />
    </form>
  )
}

export default SubscribeForm
