import React, { useRef } from 'react'

function ExRef01() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
        inputRef.current.value = "포커스 와서 입력됨.";
    }

    return (
        <>
        <div>ExRef01</div>
        <input type="text" ref={inputRef} placeholder='여기에 입력'/>
        <button onClick={focusInput}>포커스 추가</button>
        </>
    )
}

export default ExRef01