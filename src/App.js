import React from 'react'
import { auth } from './firebase/init'
import {  
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
   } from "firebase/auth";

import './App.css';
import Work from './components/Work';




function App() {
  return (
    <div className="App">
      <Work />
    </div>
  );
}

export default App;
