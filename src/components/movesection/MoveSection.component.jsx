import React, { Fragment,useState,useEffect } from 'react'
import axios from 'axios'
import { json } from 'react-router-dom'




function MoveSection() {


  const [move,setMove] = useState({})


  const getMoveDetals  = async () => {

    const url = 'api.themoviedb.org/3/movie/157336?api_key=944509ad6c77ddf8ac96d3c771a60ecd&append_to_response=videos,images'

    let response = await fetch(url);

if (response.ok) { // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert("HTTP-Error: " + response.status);
}

    
  }

  console.log(move)

  useEffect(()=>{
    getMoveDetals()
  },[])


  




    return(
        <Fragment>
          
    
             

        </Fragment>
    )
}

export default MoveSection