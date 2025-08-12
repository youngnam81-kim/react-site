import React, { useEffect, useState } from "react";

const ExUseEffect05 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // const hResize = () => setWidth(width / innerWidth);
    const hResize = () => setWidth(window.innerWidth);
    const reScroll = () => window.alert(`스크롤 했음`);

    window.addEventListener("resize", hResize);
    console.log(`윈도우 리사이즈 리스너 등록`);
    // addEventListener("scroll",reScroll);

    return()=>{
      window.removeEventListener("resize",hResize);
      console.log(`윈도우 리사이즈 리스너 해제`);
      // window.removeEventListener("scroll",reScroll);
    }
  });
  return (
    <div>
      <h3>useEffect 05</h3>
      <h2>현재의 너비 {width}</h2>
    </div>
  );
};
export default ExUseEffect05;
