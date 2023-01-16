import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './LandingPage.css'
import profileColored from '../pictures/profileColored.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Navbar />
      LandingPage
      <div className='landing-page-main-div'>
        <div className='landing-pic'>
          <img src={profileColored} alt="me on landing page" />
        </div>
        <div className='landing-textbox'>
          <h1 className='landing-h1'>Welcome to my page!</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quibusdam esse, reprehenderit vel error enim voluptatem suscipit ut porro sed corrupti provident perspiciatis est rem commodi omnis sapiente expedita culpa.</p>
          <Link to="/about">
          <button className='landing-btn'>
            <h4>More about me</h4>
            <span className="material-icons md-18">
              arrow_forward_ios
            </span>
          </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage