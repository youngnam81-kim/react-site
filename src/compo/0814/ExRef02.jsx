import React, { useRef, useState } from 'react'

function ExRef02() {
    const [count, setCount] = useState(0);
    const timeRef = useRef(null);

    const startTimer = () => {
        if (!timeRef.current) {
            timeRef.current = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 500);
        }
    };
    const stopTimer = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    };
    return (
        <>
            <div>ExRef02</div>
            <p>COUNT : {count}</p>
            <button onClick={startTimer}>시작</button>
            <button onClick={stopTimer}>정지</button>
        </>
    )
}

export default ExRef02