//rafce
import React, { useState } from 'react'
import { store_public } from './js/store_public';

const ExJs02 = () => {
    const [count, setCount] = useState(store_public.count);

    const handleclick_in = () => {
        store_public.increment();
        setCount(store_public.count);
    }
    const handleclick_de = () => {
        store_public.decrement();
        setCount(store_public.count);
    }
    const handleclick_reset = () => {
        store_public.reset();
        setCount(store_public.count);
    }
    return (
        <>
            <h3>ExJs02</h3>
            카운트 : {count}
            <button onClick={handleclick_in}> ++증가 </button>
            <button onClick={handleclick_de}> --감소 </button>
            <button onClick={handleclick_reset}> 리셋 </button>
        </>
    )
}

export default ExJs02;