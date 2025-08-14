import React, { useCallback, useState, memo } from 'react'

const Child = memo(({onClick})=>{
  return( <button onClick={onClick}> 자식한테 카운트 증가 함수 재생성</button> );
} );

function ExCallback03() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
      setCount((prev)=>prev+1);
      console.log(count);
    }, [count]);

  return (
   <>
      <div>ExCallback03</div>
      <p>COUNT : {count}</p>
      <Child onClick={increment}></Child>
    </>
  )
}

export default ExCallback03