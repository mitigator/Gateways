import React from 'react'
import Hero from '../components/Hero'
import Theme from '../components/Theme'
import Technical from '../components/Technical'
import NonTechnical from '../components/NonTechnical'
import Sponsor from '../components/Sponsor'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Theme/>
        <Technical/>
        <NonTechnical/>
        <Sponsor/>
    </div>
  )
}

export default Home