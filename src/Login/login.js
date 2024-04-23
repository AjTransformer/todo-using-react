import React from 'react'
import './login.css'
import { redirect, useNavigate } from 'react-router-dom'

function Login(props) {
   const navigate = useNavigate();

   function enterHomePage(){
      props.setIsLoggedIn(true);
      navigate('/home')
   }
  return (
    <div className="wrapper">
        <div className="card-switch">
            <label className="switch">
               <input type="checkbox" className="toggle"/>
               <span className="slider"></span>
               <span className="card-side"></span>
               <div className="flip-card__inner">
                  <div className="flip-card__front">
                     <div className="title">Log in</div>
                     <form className="flip-card__form" action="">
                        <input className="flip-card__input" name="email" placeholder="Email" type="email"/>
                        <input className="flip-card__input" name="password" placeholder="Password" type="password"/>
                        <button className="flip-card__btn" id="entry" onClick={enterHomePage}>Let`s go!</button>
                     </form>
                  </div>
                  <div className="flip-card__back">
                     <div className="title">Sign up</div>
                     <form className="flip-card__form" action="">
                        <input className="flip-card__input" placeholder="Name" type="name"/>
                        <input className="flip-card__input" name="email" placeholder="Email" type="email"/>
                        <input className="flip-card__input" name="password" placeholder="Password" type="password"/>
                        <button className="flip-card__btn" id="setUp">Confirm!</button>
                     </form>
                  </div>
               </div>
            </label>
        </div>   
   </div>
  )
}

export default Login
