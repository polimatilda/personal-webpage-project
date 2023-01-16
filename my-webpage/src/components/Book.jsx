import React from 'react'
import './Book.css'

function Book({ book }) {

  return (
    <div className='book-details'>
      <div className='book-image'>
        <img src={require(`../pictures/${book.image}`)} alt="book cover" />
      </div>
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
  )
}

export default Book