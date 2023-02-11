import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'> 
        <img src={props.img} alt={ props.title } />
        <p>{props.title}</p>
        <p>Year:{props.year}</p>
        {props.title}
    </div>
  )
}

export default Movie