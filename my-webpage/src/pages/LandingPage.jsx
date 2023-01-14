import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './LandingPage.css'
import profileColored from '../pictures/profileColored.jpg';

function LandingPage() {
  return (
    <div>
      <Navbar/>
      LandingPage
      <div className='landing-page-main-div'>
        <div className='landing-pic'>
          <img src={profileColored} alt="me on landing page" />
        </div>
        <div className='landing-textbox'>
          <h1>Welcome to my page!</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quibusdam esse, reprehenderit vel error enim voluptatem suscipit ut porro sed corrupti provident perspiciatis est rem commodi omnis sapiente expedita culpa.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage