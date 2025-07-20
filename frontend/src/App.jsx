import React from 'react'
import Header from './layouts/Header'
import Hero from './components/sections/Hero'
import { FeaturesGrid } from './components/sections/FeatureGrid'
import { HowItWorks } from './components/sections/HowItWorks'
import Testimonials from './components/sections/Testimonials'
import UserReview from './components/sections/UsersReview'
import CallToAction from './components/sections/CallToAction'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div className='dark:bg-gray-900'>
     <Header/> 
     <Hero/>
     <FeaturesGrid/>
     <HowItWorks/>
     <Testimonials/>
     <UserReview/>
     <CallToAction/>
     <Footer/>
    </div>
  )
}

export default App