import React from 'react'
import Header from '../components/Header'
import  HeroSection  from '../components/HeroSection'
import About from '../components/About'
import AttendeeForm from '../components/RegistrationForm'
import Footer from '../components/Footer'
import Events from '../components/Events'

function Home() {
  return (
    <div className='w-full overflow-hidden h-auto bg-gradient-to-r from-blue-600 to-blue-900 '>
        <Header/>
        <HeroSection/>
        <About/>
        <AttendeeForm/>
        <Events/>
        <Footer/>
    </div>
  )
}

export default Home