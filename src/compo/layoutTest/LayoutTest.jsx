import React from "react";
import "./LayoutTest.css";

export default function LayoutTest() {
    return (
        <div className="container">
            {/* 헤더 */}
            <header className="header">
                <div className="logo">로고</div>
                <nav className="menu">
                    <div className="menu-item">
                        MENU-1
                        <div className="submenu">
                            <span>SubMenu-1</span>
                            <span>SubMenu-2</span>
                            <span>SubMenu-3</span>
                            <span>SubMenu-4</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        MENU-2
                        <div className="submenu">
                            <span>SubMenu-1</span>
                            <span>SubMenu-2</span>
                            <span>SubMenu-3</span>
                            <span>SubMenu-4</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        MENU-3
                        <div className="submenu">
                            <span>SubMenu-1</span>
                            <span>SubMenu-2</span>
                            <span>SubMenu-3</span>
                            <span>SubMenu-4</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        MENU-4
                        <div className="submenu">
                            <span>SubMenu-1</span>
                            <span>SubMenu-2</span>
                            <span>SubMenu-3</span>
                            <span>SubMenu-4</span>
                        </div>
                    </div>
                </nav>
            </header>

            {/* 이미지 슬라이드 */}
            <section className="slide">이미지 슬라이드</section>

            {/* 콘텐츠 */}
            <section className="content">
                <div className="notice">
                    <div className="tabs">
                        <button>공지사항</button>
                        <button>갤러리</button>
                    </div>
                    <div className="notice-body">내용</div>
                </div>
                <div className="banner">배너(C.3)</div>
                <div className="shortcut">바로가기(C.4)</div>
            </section>

            {/* 푸터 */}
            <footer className="footer">
                <div>로고</div>
                <div>Copyright</div>
                <div>SNS</div>
            </footer>
        </div>
    );
}