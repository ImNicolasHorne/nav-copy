import React from 'react'
import { auth } from '../firebase/init'
import {  
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
   } from "firebase/auth";


function Work() {
    function register() {
        createUserWithEmailAndPassword(auth, 'I@DidIt.com', 'HeardIsTheWord!')
            .then((user) => {
                console.log(user)
            })
            .catch((error) => {
                console.log(`error`)
            })
    }

    return (
        <div className="nav">

            <div className="row">
                <h1 className="nav__title">Frontend <span className="purple">Simplified</span></h1>

                <div className="nav__buttons">
                    <button className="login">Login</button>
                    <button className="register" onClick={ register}>Register</button>
                </div>
            </div>

        </div>

    )
}

export default Work