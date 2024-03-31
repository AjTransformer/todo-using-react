import React,{useState} from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import login from '../Login/login'
import App from '../App.js'

function Navbar() {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    
  return (
    <div>
      <BrowserRouter>
        {isLoggedIn?<link to="/home"></link>:<link to="/"></link>}
      
      
      <Routes>
        <Route path="/" element={<login isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/home" element={<App isLoggedIn={isLoggedIn}/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Navbar
