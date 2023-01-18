import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Contact.css'
import { Fade } from "react-awesome-reveal"

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='contact-main-div'>
        <Fade triggerOnce={true} duration={2000} direction={"left"}>
          <button className="contact-item">
            <a href="mailto: example@gmail.com" target="_blank" rel='noreferrer'>
              <span className="material-icons md-48">
                mail
              </span>
              <h2>example@gmail.com</h2>
            </a>
          </button>
        </Fade>
        <Fade triggerOnce={true} duration={2000} direction={"left"}>
          <button className="contact-item">
            <a href="https://www.instagram.com/polimatilda/" target="_blank" rel='noreferrer'>
              <span className="material-icons md-48">
                photo_camera
              </span>
              <h2>Instagram</h2>
            </a>
          </button>
        </Fade>
        <Fade triggerOnce={true} duration={2000} direction={"left"}>
          <button className="contact-item">
            <a href="https://moly.hu/tagok/polimatilda" target="_blank" rel='noreferrer'>
              <span className="material-icons md-48">
                auto_stories
              </span>
              <h2>Moly.hu</h2>
            </a>
          </button>
        </Fade>
        <Fade triggerOnce={true} duration={2000} direction={"left"}>
          <button className="contact-item">
            <a href="https://linktr.ee/polimatilda" target="_blank" rel='noreferrer'>
              <span className="material-icons md-48">
                forest
              </span>
              <h2>Linktree</h2>
            </a>
          </button>
        </Fade>
      </div>
      <Footer />
    </div>
  )
}

export default Contact