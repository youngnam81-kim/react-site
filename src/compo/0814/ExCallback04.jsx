import React, { useCallback, useEffect, useState } from 'react'

function ExCallback04() {
  const [count, setCount] = useState(0);

  const logCount = useCallback(() => {
    console.log("현재카운트 :", count);
  }, [count])

  useEffect(() => {
    console.log(`useEffect 실행`);
    logCount();
  }, [logCount])

  return (
    <>
      <div>ExCallback04</div>
      <p>COUNT : {count}</p>
      <button onClick={() => { setCount((pre) => (pre + 1)) }}>+++</button>
    </>
  )
}

export default ExCallback04