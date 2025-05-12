import { useState } from "react";

function init() {
    console.log("init was executed");
    return Math.random();
}

export default function Counter () {
    //let [stateVariable, setStateVariable] = useState(10);
    let [count, setCount] = useState(init());
    console.log("component was re-render");



    let IncCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
    };


    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={IncCount}>Increase Count </button>
        </div>
    );
}