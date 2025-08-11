import React from "react";


const comments = [
    {
        name: "이인재",
        comment: "안녕하세요 1",
    },
    {
        name: "유재석",
        comment: "test 1",
    },
    {
        name: "영남",
        comment: "하이",
    }
];

export default function Comment() {

    return (
        <>
            <h2>게시판</h2>
            <div>
                {
                    comments.map(
                        (comment)
                    )
                }
            </div>
        </>
    )
}