import Link from 'next/link'
import LogoLink from './LogoLink'
import MobileMenu from './MobileMenu'
import { HEADER_LINKS } from '@/constants'

const Header = () => {
  return (
    <header className='padding-x fixed z-[999] w-full bg-white py-8'>
      <nav className='max-container flex items-center justify-between'>
        <LogoLink />

        {/* desktop menu */}
        <ul className='flex flex-1 items-center justify-center gap-16 max-lg:hidden'>
          {HEADER_LINKS.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className='montserrat text-lg leading-normal text-slate-gray'
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* mobile menu */}
        <div className='lg:hidden'>
          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}

export default Header
