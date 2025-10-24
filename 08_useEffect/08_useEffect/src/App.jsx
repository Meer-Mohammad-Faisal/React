import { use, useState } from 'react'
import React from 'react'
import './App.css'
import { useEffect } from 'react'
import LoggerComponent from './component/LoggerComponent'
import TimerComponent from './component/TimerComponent'
import DataFetcher from './component/DataFetcher'
import ResizeComponent from './component/ResizeComponent'
import MultiEffectComponents from './component/MultiEffectComponents'


function App() {

  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(0);
  // first -> side-effect function
  // second -> cleanup function
  // third -> comma separated dependencies list


// variation 1
// runs on every render
  // useEffect(() => {
  //   alert('useEffect called')
  // })


// variation 2
// runs only on first render
// useEffect(() => {
//     alert('i will run only on 1st render');
//   }, [])



// variation 3
// runs on first render and when count changes
  // useEffect(() => {
  //   alert('i will run only on 1st render and when count is updated');
  // }, [count])

// variation 4
// multiple dependencies
// useEffect(()=> {
//     alert('i will run only on 1st render and when count or total is updated');
  
// }, [count, total])

// variation 5
// cleanup function
// useEffect(() => {
//   alert('count is updated');
//   return () => {
//     alert('COUNT  IS unmounted from UI'); 
//   }
// }, [count])


  // function handleClick() {
  //   setCount(count + 1); 
  // }
  // function handleTotalClick() {
  //   setTotal(total + 1);
  // }
  

  return (
    <>

    {/* <LoggerComponent /> */}
    <MultiEffectComponents />


  {/* <DataFetcher /> */}
    {/* <LoggerComponent />  */}
    {/* <TimerComponent /> */}
    {/* <button onClick={handleClick}>
      Update count
    </button>
    <br />
    count is {count};

    <br />
    <button onClick={handleTotalClick}>
      update total
    </button>
    <br />
    total is {total}; */}
    </>
  )
}

export default App
