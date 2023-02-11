import React from 'react'
import './movecard.css'



function MoveCard({movie}) {

    // const {title} = props.move
    return(
        <div className='card'>
            <div className='img'><img src={'https://www.themoviedb.org/t/p/w440_and_h660_face/' +movie.backdrop_path} alt='poster' /></div>
            <h2>{movie.title}</h2>

        </div>
    )
}

export default MoveCard