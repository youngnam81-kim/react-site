import { useState } from "react"

export default function InputMirror() {
    const [textInput, setTextInput] = useState("")
    return (
        <>
            <h2>InputMirror.jsx String 값의 상태변화 </h2>
            <input type="text" value={textInput} placeholder="입력하세요." onChange={(e) => setTextInput(e.target.value)} />
            <p>입력된 값 : {textInput}</p>
        </>
    )
}