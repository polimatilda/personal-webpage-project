import React from 'react'
import './Book.css'
import { Fade } from "react-awesome-reveal"

function Book({ book }) {

  return (
    <div className='book-details'>
      <Fade triggerOnce={true} duration={2000} direction={"left"}>
        <div className='book-image'>
          <img src={require(`../pictures/${book.image}`)} alt="book cover" />
        </div>
        <div className='book-text'>
          <h1 className='book-title'>{book.title}</h1>
          <h3 className='book-series'>{book.series}</h3>
          <p className='book-description'>{book.description}</p>
          <div className='book-btn'>
            <a href={book.link} target="_blank" rel='noreferrer'>
              <button className='books-link-btn'>
                <h4>Find out more</h4>
                <span className="material-icons md-18">
                  arrow_forward_ios
                </span>
              </button>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Book