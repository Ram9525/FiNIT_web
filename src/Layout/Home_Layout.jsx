import React from 'react'
import Hero from '../pages/Hero/Hero'
import Events from '../pages/Events/Events'
import About from '../pages/About/About'
import Gallery from '../pages/Gallery/Gallery'
import Forms from '../pages/Form/Forms'
import Map from '../pages/Map/Map'
const Home_Layout = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Events isHomePage={true}/>
    <Gallery/>
    <Map/>
    <Forms/>
    </>
  )
}

export default Home_Layout