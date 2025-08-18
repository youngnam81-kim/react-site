import React, { useContext, useState } from 'react'
import { useGlobal2 } from './ExContProvider02';


const ExContProvider02_sub = () => {
    //const [count, setCount] = useState(0);
    // 이렇게 쓰는게 아니라 커스텀 훅 export 한 것을 쓴다.
    const { count2, setCount2 } = useGlobal2(3);

    return (
        <>
            <div>ExContProvider02_sub</div>
            <p>카운트2 : {count2} </p>
            <button onClick={() => { setCount2(count2 + 1) }}> ++증가 </button>
        </>
    )
}

export default ExContProvider02_sub