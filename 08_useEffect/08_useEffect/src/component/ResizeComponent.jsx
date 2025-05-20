import React, { useState, useEffect } from 'react';

function ResizeComponent() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => 
            setWindowSize(
                window.innerWidth
            );
        

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <h1>Window width : {windowSize}</h1>
        </div>
    );
}

export default ResizeComponent;