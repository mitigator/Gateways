import React from 'react'
import Navbar from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import {Theme} from '../components/Theme'
import { Cards } from '../components/Card'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Theme/>
        
    </div>
    
  )
}

export default Home