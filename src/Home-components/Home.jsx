import React from 'react'
import { Header } from '../components/Header.jsx'
import { Hero } from './Hero.jsx'
import { Main } from './Main.jsx'
import { Footer } from '../components/Footer.jsx'

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  )
}
