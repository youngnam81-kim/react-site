import React, { useMemo, useState } from 'react'

function ExMemo1() {
    const [count, setCount] = useState(0);
    const double = useMemo(() => {
        console.log(`double 계산중`);
        return (count * 2);
    }, [count]);

    return (
        <>
            <h3>count : {count}</h3>
            <h3>double : {double}</h3>
            <button onClick={() => { setCount(count + 1) }}>증가 버튼</button>
        </>
    )
}

export default ExMemo1;