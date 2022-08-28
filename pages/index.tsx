import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import GallerySection from '../components/GallerySection'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <GallerySection/>
    </Fragment>
  )
}

export default Home
