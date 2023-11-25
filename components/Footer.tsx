import Link from 'next/link'
import { FOOTER_LINKS, SOCIAL_LINKS } from '@/constants'
import Image from 'next/image'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className='padding-x padding-t bg-black pb-8 text-white'>
      <div className='flex-start flex h-full w-full flex-col md:flex-row md:gap-x-16'>
        <div>
          {/* logo */}
          <Link href='/'>
            <Image
              src='/images/footer-logo.svg'
              alt='Logo'
              width={130}
              height={30}
            />
          </Link>

          {/* text */}
          <p className='mt-4 text-slate-gray sm:max-w-sm'>
            Get your shoes ready at your nearest Nike store.{' '}
            <span className='whitespace-nowrap'>Get rewards.</span>
          </p>

          {/* social */}
          <div className='mt-8 flex gap-4 max-md:mb-16'>
            {SOCIAL_LINKS.map((link, index) => {
              return (
                <Link href='/' key={index}>
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={38}
                    height={38}
                    className='rounded-full bg-white p-1'
                  />
                </Link>
              )
            })}
          </div>
        </div>

        {/* links */}
        <div className='flex flex-wrap gap-x-16 gap-y-8 md:w-full md:justify-between md:pr-32'>
          {FOOTER_LINKS.map((link, index) => {
            return (
              <div key={index} className='flex flex-col gap-4'>
                <h4 className='text-lg font-bold'>{link.title}</h4>
                <ul className='flex flex-col gap-2'>
                  {link.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className='text-white-400 hover:text-slate-gray'
                        >
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* copyright / TOS */}
      <div className='mt-12 flex flex-wrap justify-between'>
        <p className=' text-slate-gray'>
          &copy; {currentYear} All Rights Reserved
        </p>
        <Link href='/' className='text-slate-gray'>
          Terms & Conditions
        </Link>
      </div>
    </footer>
  )
}

export default Footer
