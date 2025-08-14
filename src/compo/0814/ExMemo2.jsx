import React, { useMemo, useState } from 'react';

const ExMemo2 = () => {
    const [num, setNum] = useState(1);
    const [theme, setTheme] = useState(false);
    const total = useMemo(() => {
        heavyCalculation(num);
    }, [num])

    return (
        <div style={{
            background: theme ? "#6e71ffff" : "#ff8282ff",
            color: theme ? "#fff" : "#000"
        }}>
            <input type="number" value={num} onChange={(e) => { setNum(e.target.value) }} />
            <p>결과 : {total}</p>
            <button onClick={() => { setTheme(!theme) }}>테마변경</button>
        </div>
    );
};

function heavyCalculation(num) {
    console.log(`무거운 계산 실행중`);
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
        //total +=num
        total = total + num;
    }
    return total;
}

export default ExMemo2;