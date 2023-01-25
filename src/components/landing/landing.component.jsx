import React from 'react'
import { useEffect } from 'react'
import { Fragment } from 'react'
import axios from 'axios'

import './card.css'


import NavBar from '../NavBar/NavBar.component'
import { useState } from 'react'








function Landing() {

    const [moveCollection,setmoveCollection] = useState([])

    const getMoveCollection  =  ()=>{

        const url ='https://api.themoviedb.org/3/tv/popular?api_key=944509ad6c77ddf8ac96d3c771a60ecd&language=en-US&page=1'
        fetch(url)
        .then(data=>data.json())
        .then(data=>setmoveCollection(data.results))
    }



    
    useEffect(()=>{
        getMoveCollection()
    })

    const element = moveCollection.map(item=>(item.name))
    
    
    
    
    
    return(
        <Fragment>
            <NavBar/>

            <div className='cards'>

    
<div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
      <h1>Bright</h1>
      <h4>2017, David Ayer</h4>
      <span className="minutes">117 min</span>
      <p className="type">Action, Crime, Fantasy</p>
    </div>
    <div className="movie_desc">
      <p className="text">
        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
      </p>
    </div>
    <div className="movie_social">
      <ul>
        <li><i className="material-icons">share</i></li>
        <li><i className="material-icons"></i></li>
        <li><i className="material-icons">chat_bubble</i></li>
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back"></div>
</div>


<div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
      <h1>Bright</h1>
      <h4>2017, David Ayer</h4>
      <span className="minutes">117 min</span>
      <p className="type">Action, Crime, Fantasy</p>
    </div>
    <div className="movie_desc">
      <p className="text">
        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
      </p>
    </div>
    <div className="movie_social">
      <ul>
        <li><i className="material-icons">share</i></li>
        <li><i className="material-icons"></i></li>
        <li><i className="material-icons">chat_bubble</i></li>
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back"></div>
</div>


<div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
      <h1>Bright</h1>
      <h4>2017, David Ayer</h4>
      <span className="minutes">117 min</span>
      <p className="type">Action, Crime, Fantasy</p>
    </div>
    <div className="movie_desc">
      <p className="text">
        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
      </p>
    </div>
    <div className="movie_social">
      <ul>
        <li><i className="material-icons">share</i></li>
        <li><i className="material-icons"></i></li>
        <li><i className="material-icons">chat_bubble</i></li>
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back"></div>
</div>

<div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"/>
      <h1>Bright</h1>
      <h4>2017, David Ayer</h4>
      <span className="minutes">117 min</span>
      <p className="type">Action, Crime, Fantasy</p>
    </div>
    <div className="movie_desc">
      <p className="text">
        Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. 
      </p>
    </div>
    <div className="movie_social">
      <ul>
        <li><i className="material-icons">share</i></li>
        <li><i className="material-icons"></i></li>
        <li><i className="material-icons">chat_bubble</i></li>
      </ul>
    </div>
  </div>
  <div className="blur_back bright_back"></div>
</div>


            </div>
             
    
        </Fragment>
    )
}

export default Landing