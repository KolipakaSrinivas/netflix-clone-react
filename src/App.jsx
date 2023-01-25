import { Fragment} from 'react'
// import './App.css'
// import '../src/components/movesection/move.css'
import { Routes,Route } from 'react-router-dom'



import Home from './components/Home/Homepage.component'
import Landing from './components/landing/landing.component'


function App() {
  

  return (

    
    <Fragment>
      {/* <NavBar/> */}
      
      
      <Routes>

        
        <Route path='/' element={<Home/>}/>
        <Route path='/landing' element={<Landing/>}/>
      
       

      </Routes>

    </Fragment>
    

      
       
    
  )
}

export default App
