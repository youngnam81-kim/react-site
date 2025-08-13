import { useState } from "react";
import "./Bpp.css";

import App from './App.jsx'

export default function Bpp() {
    const [activeMenu, setActiveMenu] = useState(0);

    const contents = [
        "🏠 홈 화면입니다. 여기에 첫 페이지 내용을 넣으세요.",
        "📄 페이지 1 내용입니다. 여기에 두 번째 페이지 내용을 넣으세요.",
        "📄 페이지 2 내용입니다. 여기에 세 번째 페이지 내용을 넣으세요.",
        "📞 연락처 페이지입니다. 여기에 연락처를 넣으세요."
    ];

    return (
        <div className="container">
            {/* 왼쪽 메뉴 */}
            <nav className="menu">
                {["홈", "페이지1", "페이지2", "연락처"].map((item, index) => (
                    <button
                        key={index}
                        className={activeMenu === index ? "active" : ""}
                        onClick={() => setActiveMenu(index)}
                    >
                        {item}
                    </button>
                ))}
            </nav>

            {/* 가운데 컨텐츠 */}
            <main className="content">
                {contents[activeMenu]}
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                    Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem
                    at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                </p> */}
                <App></App>
            </main>

            {/* 오른쪽 광고 */}
            <aside className="ad">광고 영역</aside>
        </div>
    );
}