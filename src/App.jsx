import { Fragment} from 'react'
import './App.css'
import '../src/components/movesection/move.css'
import { Routes,Route } from 'react-router-dom'




import Login from '../src/components/loginpage/Login.component'
import Home from './components/homepage/HomePage.component'
import MoveSection from './components/movesection/MoveSection.component'

function App() {
  

  return (

    <Fragment>
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/movesection' element={<MoveSection/>}/>
      

      </Routes>

    </Fragment>
    

      
       
    
  )
}

export default App
