import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleClick() {
  //   val.current = val.current + 1;
  //   console.log(`Value has been updated to: ${val.current}`);
  //   setCount(count + 1);

  // }

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = 'red';
  //   btnRef.current.style.color = 'white';
  
  // }

  // useEffect(() => {
  //   console.log(`Count has been updated to: ${count}`);
  // });




  // STOP WATCH----------------------------------------------------------------------------------------
  const [time, setTime] = useState(0);  

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }
    , 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    // timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }



  return (
    <div>
      {/* <button ref={btnRef} onClick={handleClick}>
        Increment
      </button>
      <br /> <br />

    <button onClick={changeColor}>
      Change color of 1st button
    </button>
   

      <div>
        <p>Count: {count}</p>
      </div> */}


{/* STOP WATCH---------------------------------------------------------------------------------------------- */}

      <h1>Stop Watch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /><br />

      <button onClick={stopTimer}>
        Stop
      </button> 
      <br /><br />

      <button onClick={resetTimer}>
        Reset
      </button>













    </div>
  )
}

export default App
