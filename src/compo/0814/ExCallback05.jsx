import React, { useCallback, useEffect, useState } from 'react'

function ExCallback05() {
  const [count, setCount] = useState(0);

  const handleKeyPress = useCallback((e) => {
    if (e.key === "ArrowUp") {
      setCount((prev) => prev + 1);
    } else if (e.key === "ArrowDown") {
      setCount((prev) => prev - 1);
    }
  }, []);

  useEffect(() => {
    console.log(`useEffect handleKeyPress 가기전`);
    window.addEventListener(("keydown"), handleKeyPress);
    console.log(`useEffect handleKeyPress 만들고왔음`);

    return () => {
      window.removeEventListener(("keydown"), handleKeyPress)
      console.log(`나가는거 볼수있나?`);
    };

  }, [handleKeyPress]);

  return (
    <>
      <div>ExCallback05 ArrowUp 키를 눌러증가 화살표</div>
      <p>count : {count}</p>
    </>
  )
}

export default ExCallback05