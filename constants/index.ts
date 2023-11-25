import {
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../public/icons'
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../public/images'

export const HEADER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#about-us', label: 'About Us' },
  { href: '/#products', label: 'Products' },
  { href: '/#contact-us', label: 'Contact Us' },
]

export const SHOES = [
  {
    src: thumbnailShoe1,
    alt: 'bigShoe1',
  },
  {
    src: thumbnailShoe2,
    alt: 'bigShoe2',
  },
  {
    src: thumbnailShoe3,
    alt: 'bigShoe3',
  },
]

export const STATS = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
]

export const PRODUCTS = [
  {
    src: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20',
  },
  {
    src: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
  },
  {
    src: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20',
  },
  {
    src: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20',
  },
]

export const SERVICES = [
  {
    src: truckFast,
    label: 'Free shipping',
    description:
      'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    src: shieldTick,
    label: 'Secure Payment',
    description:
      'Experience worry-free transactions with our secure payment options.',
  },
  {
    src: support,
    label: 'Love to help you',
    description:
      'Our dedicated team is here to assist you every step of the way.',
  },
]

export const REVIEWS = [
  {
    src: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    src: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
]

export const FOOTER_LINKS = [
  {
    title: 'Products',
    links: [
      { label: 'Air Force 1', href: '/' },
      { label: 'Air Max 1', href: '/' },
      { label: 'Air Jordan 1', href: '/' },
      { label: 'Air Force 2', href: '/' },
      { label: 'Nike Waffle Racer', href: '/' },
      { label: 'Nike Cortez', href: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'About us', href: '/' },
      { label: 'FAQs', href: '/' },
      { label: 'How it works', href: '/' },
      { label: 'Privacy policy', href: '/' },
      { label: 'Payment policy', href: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { label: 'customer@fnike.com', href: 'mailto:customer@nike.com' },
      { label: '+4123456789', href: 'tel:+92554862354' },
    ],
  },
]

export const SOCIAL_LINKS = [
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
]
