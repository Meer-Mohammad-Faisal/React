import { useState } from 'react'

import './App.css'

function App() {
  function handleClick() {
    alert('i am clicked');
  }

  function handleMouseOver() {
    alert('i am mouse over of para');
  }

  function handleInputChange(e) {
    // console.log('input changed');
    console.log("value till now", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    // i am writing my custom behaviour
    alert('Form submitted');
  }

  return (
    <>
    <button onClick={handleClick}>
      click me
    </button>

    <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>I am para</p>

    <form onSubmit={handleSubmit}>
      <input type="text" onChange={ handleInputChange} />
      <button type='submit'>Submit</button>
    </form>
{/* 
   <button onClick={alert('i am clicked')}>    this is imidiate invocation this will not work 
      click me
    </button> */} 
    </>
  )
}

export default App
