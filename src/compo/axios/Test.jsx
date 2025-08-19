import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('오류 발생:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Spring Boot + React 연동 테스트</h1>
      <p>백엔드에서 받은 메시지: {message}</p>
    </div>
  );
}

export default Test;