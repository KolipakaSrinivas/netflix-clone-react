import React, { Fragment,useState,useEffect } from 'react'
import axios from 'axios'
// import { json } from 'react-router-dom'

import './move.css'

import NavBar from '../NavBar/NavBar.component'

import Card from '../Cards/Card.component'



function MoveSection() {



  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {

    try {

      const url = `api.themoviedb.org/3/movie/157336?api_key=944509ad6c77ddf8ac96d3c771a60ecd&append_to_response=videos,images`
      let { data } = await axios.get(url);
      setMovies(data)

    } catch(error){
      console.log(error)
    }
    
            
    

}

useEffect(()=>{
  searchMovies()
})

  console.log(movies)
 
  
  return(
        <Fragment>
          <NavBar/>
            <Card/>
            



    
        
    




          
    
             

        </Fragment>
    )
}

export default MoveSection