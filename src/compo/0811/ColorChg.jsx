import { useState } from "react"

export default function ColorChg() {

    const [bgColorChg, setBgColorChg] = useState("skyblue")
    const [colorChg, setColorChg] = useState("white")

    return (
        <>
            <h2 style={{ background: bgColorChg, color: colorChg }}>ColorChg.jsx style 컬러 체인지</h2>
            <button onClick={e => { setBgColorChg("red"); setColorChg("black") }}>빨강</button >
            <button onClick={e => { setBgColorChg("blue"); setColorChg("white") }}>파랑</button>
            <button onClick={e => { setBgColorChg("yellow"); setColorChg("black") }}>노랑</button>
            <button onClick={e => { setBgColorChg("green"); setColorChg("white") }}>초록</button>
        </>
    )
}