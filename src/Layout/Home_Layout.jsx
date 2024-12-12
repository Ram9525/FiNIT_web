import React from 'react'
import Hero from '../pages/Hero/Hero'
import Events from '../pages/Events/Events'
import About from '../pages/About/About'
import Gallery from '../pages/Gallery/Gallery'
import Team from '../pages/Team/Team'
const Home_Layout = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Events/>
    <Team/>
    <Gallery/>
    </>
  )
}

export default Home_Layout