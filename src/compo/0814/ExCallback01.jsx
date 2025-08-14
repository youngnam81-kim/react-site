import React, { useCallback, useState } from 'react'

function ExCallback01() {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((prev)=>prev+1);
    console.log(count);
  }, []);

  const handleIncrement2 = useCallback(() => {
    setCount((prev)=>prev+1);
    console.log(count);
  }, [count]);

  return (
    <>
      <div>ExCallback01</div>
      <p>COUNT : {count}</p>
      <p>(디버깅 창 열어서 count 값 확인 할것)</p>
      <button onClick={handleIncrement}>+1 증가 함수 안변함.</button>
      <button onClick={handleIncrement2}>+1 증가 함수 다시 생성.</button>
    </>
  )
}

export default ExCallback01