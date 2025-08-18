import React, { useContext, useState } from 'react'
import { useGlobal } from './ExContProvider01';

const ExContProvider01_sub = () => {
    //const [count, setCount] = useState(0);
    // 이렇게 쓰는게 아니라 커스텀 훅 export 한 것을 쓴다.
    const { count, setCount } = useGlobal(2);

    return (
        <>
            <div>ExContProvider01_sub</div>
            <p>카운트 : {count} </p>
            <button onClick={() => { setCount(count + 1) }}> ++증가 </button>
        </>
    )
}

export default ExContProvider01_sub