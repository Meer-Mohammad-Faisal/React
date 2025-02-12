import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)

  //let counter = 5;

  const addValue = () => {
    if(counter < 20){
      console.log("clicked", counter);
      counter = counter + 1;
      setCounter(counter)
    }

  }

  const removeVlaue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
    
  }

  return (
    // when we click on button, and we want that the value
    //  of counter should be updated, but it is not updating, because we are not using hook
    // by hook we can update the value of counter at multiple places at one click 
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
    
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeVlaue}
      >Remove value {counter}</button>
      <br />
      <p>footer: {counter}</p>
    </>
  )
}

export default App
