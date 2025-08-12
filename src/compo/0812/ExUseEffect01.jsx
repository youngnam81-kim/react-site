import React, { useEffect } from "react";

const ExUseEffect01 = () => {
  useEffect(() => {
    console.log("컴포넌트가 마운트 되었습니다.");
  }, []);
  return (
    <div>
      <h3>안녕 ExUseEffect01</h3>
    </div>
  );
};

export default ExUseEffect01;
