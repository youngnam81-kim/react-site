import React, { useEffect, useState } from 'react'

function Example5() {
    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])





    return (
        <>
            <h3>Example5</h3>
            {width} px
        </>

    )
}

export default Example5;