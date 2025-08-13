import React, { useEffect, useState } from 'react';

const Example2 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        //console.log(`useEffect 호출 : ${count}`);
        console.log("useEffect 호출 : " + { count });
    }, [count])

    return (
        <>
            <h2>Example2 : 상태변경 감지</h2>
            <p>카운트 : {count}</p>
            <button onClick={() => { setCount(count + 1); }}> 증가 ++ </button>
            <button onClick={() => { setCount(count - 1); }}> 감소 -- </button>
        </>
    );

};

export default Example2;