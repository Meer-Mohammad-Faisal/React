import React from 'react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'
import { useState } from 'react'
import './App.css'

function App() {
 const [isLoggedIn, setLoggedIn] = useState(false);


 return (
  <div>
    {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  </div>
 )

//  if(isLoggedIn){
//   return (
//      <LogoutBtn />
//   )
//  }
//   else {
//     return (
//       <LoginBtn />
//     )
//   }



}

export default App
