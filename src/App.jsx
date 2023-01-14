import { Fragment} from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'




import Login from '../src/components/loginpage/Login.component'
import Home from './components/homepage/HomePage.component'

function App() {
  

  return (

    <Fragment>
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route path='/home' element={<Home></Home>}/>
      

      </Routes>

    </Fragment>
    

      
       
    
  )
}

export default App
