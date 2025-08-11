import { useState } from "react"

export default function ToggleButton() {
    const [isOn, setIsOn] = useState(false)
    const [toggleBgColor, setToggleBgColor] = useState("gray")
    return (
        <>
            <h2>ToggleButton.jsx</h2>
            <div>
                <button style={{ backgroundColor: toggleBgColor }} onClick={e => {
                    setIsOn(!isOn);
                    if (isOn == true) {
                        setToggleBgColor("gray");
                    } else {
                        setToggleBgColor("green");
                    }
                }}>
                    버튼 상태 : {isOn ? "ON" : "OFF"}
                </button>
            </div >
        </>
    )
}