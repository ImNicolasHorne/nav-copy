import React from 'react'
import { auth } from './firebase/init'
import {  
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
   } from "firebase/auth";

function nav() {

    function register(){
        createUserWithEmailAndPassword(auth, 'I@DidIt.com', 'HeardIsTheWord')
            .then(({user}) => {
                console.log(user)
            })
    }

  return (
    <div className="nav">
        <div className="row">
            <h2 className="nav__title">
                Frontend <span className="purple">Simplified</span>
            </h2>
            <div className="nav__buttons">
                <button className="login">Login</button>
                <button className="register">Register</button>
            </div>
        </div>
    </div>
  )
}

export default nav