import { Fragment} from 'react'
// import './App.css'
// import '../src/components/movesection/move.css'
import { Routes,Route } from 'react-router-dom'


import NavBar from './components/NavBar/NavBar.component'

import Login from './components/Login/Login.component'


function App() {
  

  return (

    
    <Fragment>
      <NavBar/>
      
      <Routes>
        {/* <Route  path='/' element={<Login/>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/movesection' element={<MoveSection/>}/> */}
      

      </Routes>

    </Fragment>
    

      
       
    
  )
}

export default App
