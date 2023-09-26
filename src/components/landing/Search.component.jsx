import {React,useEffect,useState} from 'react'
import './card.css'
import axios from 'axios';
import NavBar from '../NavBar/NavBar.component'
// import background from './img/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg';



import MoveCard from '../MoveCard/MoveCard.component';



function Search() {


    const [movesList,setMovesList] = useState(null)


    const getmoves = async () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=944509ad6c77ddf8ac96d3c771a60ecd&language=en-US&page=1'
        const response  = await axios.get(url)
        setMovesList(response.data.results)
    }

    useEffect(()=>{
        getmoves()
      
    },[])

    // console.log(searchmovies)



    return(
        <div className='container'> 
            <NavBar/>

         {/* <main className='main'> */}
            <div className="card-list">
                {movesList && movesList.filter(movie => movie.poster_path).map(movie => (
                   <MoveCard movie={movie} key={movie.id}/>
                ))}
            </div>
        {/* </main> */}
        </div>
    )
}


export default Search










