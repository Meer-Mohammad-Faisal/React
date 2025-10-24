import React, { useEffect, useState } from 'react'

const MultiEffectComponents = () => {
    const [count, setCount] = useState(0);
    const [second, setSceond] = useState(0);

    useEffect(() => {
        console.log('Count changed: ', count);
    }, [count]);
    // side effect logic will run on only when count is changed

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSceond(prevSecond => prevSecond + 1)
      }, 1000);
    
      return () => clearInterval(intervalId);
    }, [second]);
    // it will run only on first render
    

  return (
    <div>
      <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment Count</button>
    <h2>Seconds: {second}</h2>
    </div>
  );
}

export default MultiEffectComponents
