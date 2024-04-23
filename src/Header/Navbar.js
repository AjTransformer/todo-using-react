import React,{useState} from 'react'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Login from '../Login/login'
import App from '../App.js'

function Navbar() {
    const [isLoggedIn , setIsLoggedIn] = useState(false)
    
  return (
    <div>
      <BrowserRouter>
        {isLoggedIn?<Link to="/home"></Link>:<Link to="/login"></Link>}
      
      
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/home" element={<App isLoggedIn={isLoggedIn}/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Navbar
