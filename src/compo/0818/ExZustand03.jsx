import React from 'react'
import { store_zustand } from './js/store_zustand'

const ExZustand03 = () => {
    const { count, increment, decrement, reset } = store_zustand();

    // const aa = () => {

    // }

    return (
        <>
            <h3>ExZustand03</h3>
            <p>카운트 : {count}</p>
            <button onClick={increment}>++증가</button>
            <button onClick={decrement}>--감소</button>
            <button onClick={reset}>리셋</button>
        </>
    )
}

export default ExZustand03;