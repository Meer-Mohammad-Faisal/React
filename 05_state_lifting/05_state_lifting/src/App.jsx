import Card from './components/Card';
import React, { useState } from 'react'

function App() {
  // create state
  // manage state
  // change state
  // sabhi child me state ko sink krwa dunga

  const [name, setName] = useState("");

  return (
    <div>
      <Card title="card1"  name ={name} setName={setName}/>
      <Card title="card2"  name ={name} setName={setName}/>
      {/* <p>Name state variable ki value inside App: {name}</p> */}
    </div>
  )
}

export default App
