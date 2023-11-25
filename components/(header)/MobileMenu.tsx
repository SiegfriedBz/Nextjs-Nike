'use client'

import { useAppStore } from '@/store'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ButtonBurger from './ButtonBurger'
import { HEADER_LINKS } from '@/constants'

const MobileMenu = () => {
  const { mobileMenuIsOpen, closeMobileMenu } = useAppStore()

  return (
    <>
      <div className='lg:hidden'>
        <ButtonBurger />
      </div>
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <motion.nav
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className='absolute left-0 right-0 top-[5.75rem] h-[100vh] bg-white'
          >
            {/* mobile menu links */}
            <ul className='-mt-16 flex h-full flex-col items-center justify-center gap-8 '>
              {HEADER_LINKS.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className='font-palanquin text-3xl font-semibold capitalize text-coral-red'
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
