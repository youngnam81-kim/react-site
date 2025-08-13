import React, { useMemo, useState } from 'react'

export default function ExMemo5() {
    const [price, setPrice] = useState(1000);
    const [quantity, setQuantity] = useState(1);
    const [discount, setDiscount] = useState(0.1);

    const total = useMemo(() => {
        console.log(`총액 계산`);
        return (
            price * quantity * (1 - discount)
        )
    }, [price, quantity, discount]);

    return (
        <>
            <div>ExMemo5</div>
            <label>가격:{""}</label><input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
            <label>수량:{""}</label><input type="number" value={quantity} onChange={(e) => setQuantity(+e.target.value)} />
            <label>할인율:{""}</label><input type="number" step={"0.01"} value={discount} onChange={(e) => setDiscount(+e.target.value)} />
            <h2>총액:{total.toLocaleString()} 원입니다.</h2>
        </>

    )
}
