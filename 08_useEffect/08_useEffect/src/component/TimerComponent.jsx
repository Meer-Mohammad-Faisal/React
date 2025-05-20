import React , {useState, useEffect} from 'react';

function TimerComponent() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log('time to stop');
            clearInterval(interval);
         }; // Cleanup function to clear the interval
    }, []);

    return (
        <div>
            <h1>Seconds: {seconds} </h1>
        </div>
    );
}

export default TimerComponent;