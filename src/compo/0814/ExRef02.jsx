import React, { useRef, useState } from 'react'

function ExRef02() {
    const renderCnt = useRef(0);
    const [text, setText] = useState("");

    renderCnt.current += 1;

    return (
        <>
            <div>ExRef02</div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <p>렌더링 횟수 : {renderCnt.current}</p>
        </>
    )
}

export default ExRef02