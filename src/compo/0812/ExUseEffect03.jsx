import React, { useEffect, useState } from "react";

const ExUseEffect03 = () => {
  const [seconds, setSeconds] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        setSeconds(seconds + 1);
      }
    }, 100);
    return () => {
      clearInterval(timer);
      console.log(`타이머종료`);
    };
  }, []);

  return (
    <div>
      <h3>ExUseEffect03</h3>
      <h3>{seconds} 초경과</h3>
    </div>
  );
};

export default ExUseEffect03;
