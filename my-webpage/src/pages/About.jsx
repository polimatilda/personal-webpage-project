import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './About.css';
import profileColored from '../pictures/profileColored.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <Navbar />
      <div className='about-main-div'>
        <div className='about-image'>
          <img src={profileColored} alt="me on landing page" />
        </div>
        <div className='about-texts'>
          <div className='about-section one'>
            <h2>Hello, I'm Matilda!</h2>
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem distinctio ab eligendi, error sunt porro eum quas cum modi. Impedit nemo dignissimos, laboriosam officia praesentium aliquid voluptatum cum quis!</p>
          </div>
          <div className='about-section two'>
            <h2>Lover of books</h2>
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem distinctio ab eligendi, error sunt porro eum quas cum modi. Impedit nemo dignissimos, laboriosam officia praesentium aliquid voluptatum cum quis!</p>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cupiditate ipsum incidunt mollitia debitis? Ab, porro, eius velit sit dignissimos veniam minima harum illum laborum atque ipsa quam odio quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, architecto tempora? Facilis harum quis, architecto illum debitis porro nam ad facere, quae ipsum suscipit. Sed consequatur molestiae laudantium assumenda doloremque.</p>
            <Link to="/books">
              <button className='about-books-btn'>
                <h4>More about my books</h4>
                <span class="material-icons md-18">
                  arrow_forward_ios
                </span>
              </button>
            </Link>
          </div>
          <div className='about-section three'>
            <h2>Frontend Developer</h2>
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem distinctio ab eligendi, error sunt porro eum quas cum modi. Impedit nemo dignissimos, laboriosam officia praesentium aliquid voluptatum cum quis!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About