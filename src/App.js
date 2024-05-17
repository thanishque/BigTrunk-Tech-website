import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About Us/AboutUs'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact Us/ContactUs'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
    <div className="container">
      <About/>
      <Title/>
      <Testimonials/>
      <Title subTitle= 'Contact Us' title= 'Reach Us'/>
      <Contact/>
      <Footer/>
    </div>


    </div>
  )
}

export default App
