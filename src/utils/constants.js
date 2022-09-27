import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Our mission is to inspire customers by offering designer and quality furniture online at affordable prices !',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Make quality design accessible to everyone!',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
    'Created in 2012, Ergo Meubles is the best specialist in home furnishings.'  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
