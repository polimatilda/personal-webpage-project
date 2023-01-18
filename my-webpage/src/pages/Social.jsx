import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import meWithBooks from '../pictures/meWithBooks.jpg'
import polccast from '../pictures/polccast.jpg'
import { Fade } from "react-awesome-reveal"
import './Social.css';

function Social() {
  return (
    <div>
      <Navbar />
      <div className='social-main-div'>
        <Fade triggerOnce={true} duration={2000} direction={"left"}>
          <div className='social-section youtube'>
            <img src={meWithBooks} alt="youtube index" />
            <div className='social-text'>
              <h1 className='social-title'>YouTube channel</h1>
              <p className='social-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore totam quibusdam iure sapiente voluptates quas cupiditate? Nesciunt aut quia corrupti aliquid possimus fuga, magnam quam iusto natus placeat dolorum sapiente!</p>
              <div className='social-btn'>
                <a href="https://www.youtube.com/matildaP" target="_blank" rel='noreferrer'>
                  <button className='social-link-btn'>
                    <h4>Open channel</h4>
                    <span className="material-icons md-18">
                      arrow_forward_ios
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade triggerOnce={true} duration={2000} direction={"left"}>
          <div className='social-section polccast'>
            <img src={polccast} alt="polccast index" />
            <div className='social-text'>
              <h1 className='social-title'>PolcCast podcast</h1>
              <p className='social-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore totam quibusdam iure sapiente voluptates quas cupiditate? Nesciunt aut quia corrupti aliquid possimus fuga, magnam quam iusto natus placeat dolorum sapiente!</p>
              <div className='social-btn'>
                <a href="https://linktr.ee/polc.cast" target="_blank" rel='noreferrer'>
                  <button className='social-link-btn'>
                    <h4>Open podcast</h4>
                    <span className="material-icons md-18">
                      arrow_forward_ios
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  )
}

export default Social