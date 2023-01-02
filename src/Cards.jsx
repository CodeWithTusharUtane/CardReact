import React from 'react'
import './index.css'

const Cards = (props) => {
  return (
    <div>
      <div className="container1">
        <img src={props.source} alt="image of the movie"  className='imgS'/>
        <p className='headI'>{props.span}</p>
        <h2 className='titleN'>{props.title}</h2>
        <a className='btn' href={props.link} target="_blank">Watch Now</a>
      </div>
    </div>
  )
}

export default Cards
