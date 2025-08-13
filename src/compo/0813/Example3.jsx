import React, { useEffect, useState } from 'react'

function Example3() {
    const [seconds, setSeconds] = useState(0);


    useEffect(
        () => {
            const timer = setInterval((
                setSeconds(seconds + 1)
                , console.log(`setInterval`)
            ), 1000)

            return () => {
                clearInterval(timer)
                console.log(`clearInterval`);
            }

        }, []);

    return (
        <div>{seconds} 초 경과</div>
    )
}

export default Example3;