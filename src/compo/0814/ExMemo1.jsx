import React, { useMemo, useRef, useState } from 'react'

function ExMemo1() {
    const [count, setCount] = useState(1);
    const double = useMemo(() => {
        console.log(`double 계산중`);
        return (count * 2);
    }, [count]);

    let [three, setThree] = useState(0);
    three = useMemo(() => {
        console.log(`double 계산중`);
        return (count * 2);
    }, [count]);

    return (
        <>
            <h3>count : {count}</h3>
            <h3>double : {double}</h3>
            <h3>three : {three}</h3>
            <button onClick={() => { setCount(count - 1) }}> - useState</button>
            <button onClick={() => { setCount(count + 1)  }}> + useState</button>
        </>
    )
}

export default ExMemo1;