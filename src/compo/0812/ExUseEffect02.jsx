import React, { useEffect, useState } from "react";

const ExUseEffect02 = () => {
  const [count, setCount] = useState(0);
  const [count22, setCount22] = useState(0);

  useEffect(() => {
    console.log(`카운트 바뀔때마다 실행 ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`카운트 바뀔때마다 실행22 ${count22}`);
  }, [count22]);

  return (
    <div>
      <h3>안녕 ExUseEffect02</h3>
      <p>count : {count}</p>
      <p>count22 : {count22}</p>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        클릭
      </button>
      <button
        onClick={(e) => {
          setCount22(count22 + 1);
        }}
      >
        클릭22
      </button>
    </div>
  );
};

export default ExUseEffect02;
