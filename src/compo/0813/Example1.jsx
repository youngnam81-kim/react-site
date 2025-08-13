import React, { useEffect } from 'react';


const Example1 = () => {

    useEffect(() => {
        console.log("컴포넌트가 마운트 되었습니다.");
    }, [])



    return (
        <div>
            <h2>예 1 : 마운트 시 콘솔 출력 </h2>
        </div>
    );
};

export default Example1;