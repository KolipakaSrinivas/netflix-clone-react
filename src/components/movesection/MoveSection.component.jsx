import React, { Fragment,useState,useEffect } from 'react'
import axios from 'axios'
import { json } from 'react-router-dom'




function MoveSection() {


  const [move,setMove] = useState([])


  const getMoveDetals = async () => {

    // const url = 'api.themoviedb.org/3/movie/157336?api_key=944509ad6c77ddf8ac96d3c771a60ecd&append_to_response=videos,images'
    const url = 'https://api.themoviedb.org/3/movie/157336?api_key=944509ad6c77ddf8ac96d3c771a60ecd'

      const sri = await  axios.get(url)

    setMove(sri)
    
  }

  // console.log(move.data.budget)

  useEffect(()=>{
    getMoveDetals()
  },[])


  




    return(
        <Fragment>

          {move.map((move)=>(
            <h1>{move.budget}</h1>
        ))}
          
          
    
             

        </Fragment>
    )
}

export default MoveSection