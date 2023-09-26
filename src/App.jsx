import { Fragment} from 'react'
import './App.css'
// import '../src/components/movesection/move.css'
import { Routes,Route } from 'react-router-dom'



import Home from './components/Home/Homepage.component'
import Search from './components/landing/Search.component'


function App() {
  

  return (

    
    <Fragment>
      {/* <NavBar/> */}      
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<Search/>}/>     
      </Routes>
    </Fragment>
    

      
       
    
  )
}

export default App
