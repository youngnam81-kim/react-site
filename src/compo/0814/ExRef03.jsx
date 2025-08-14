import React, { useRef, useState } from 'react'

function ExRef03() {
    const [count, setCount] = useState(0);
    
    return (
        <>
            <div>ExRef03</div>
            <p>COUNT : {count}</p>
        </>
    )
}

export default ExRef03