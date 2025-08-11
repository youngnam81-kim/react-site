import { useState } from "react"

export default function Counter() {
    //훅 useState 사용하기
    //const [상수이름, 세터함수(보통 set상수이름)] = useState(초기값);
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Counter.jsx useState number 상태 변화 채크</h2>
            <h3>카운트 : {count}</h3>
            <button onClick={() => setCount(count + 1)}>++</button>
            <button onClick={() => setCount(count - 1)}>--</button>
        </>
    )
}

// function Counter() {
//     return (
//         <h1>Counter.jsx</h1>
//     )
// }
// export default Counter

