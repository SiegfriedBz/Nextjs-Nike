'use client'

import { useAppStore } from '@/store'
import Image from 'next/image'
import Link from 'next/link'

const LogoLink = () => {
  const { closeMobileMenu } = useAppStore()

  return (
    <Link href='/' onClick={closeMobileMenu}>
      <Image src='/images/header-logo.svg' alt='Logo' width={130} height={30} />
    </Link>
  )
}

export default LogoLink
