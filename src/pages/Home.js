import React from 'react'
import Hero from '../components/Hero'
import Technical from '../components/Technical'
import Theme from '../components/Theme'
import NonTechnical from '../components/NonTechnical'
import Sponsor from '../components/Sponsor'
import Navbar from '../components/Navbar'
import EventPage from '../components/EventPage'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Hero/>
        <Theme/>
        <Technical/>
        <NonTechnical/>
        
        
    </div>
  )
}

export default Home