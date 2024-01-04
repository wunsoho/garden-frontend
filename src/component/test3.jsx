import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test3 = () => {
  const [responseData, setResponseData] = useState('');
  const [responseHeaders, setResponseHeaders] = useState('')
  const [serverPort, setServerPort] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portResponse = await axios.get('https://00gym.shop/getPort');
        const port = portResponse.data;

        const dataResponse = await axios.get('https://00gym.shop/test1'); 
        const headers = dataResponse.headers;
        const data = dataResponse.data;

        setServerPort(port);
        setResponseHeaders(headers);
        setResponseData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {responseHeaders && (
        <div>
          <h2>헤더 정보</h2>
          <pre>{JSON.stringify(responseHeaders)}</pre>
        </div>
      )}
      {serverPort && (
        <p>서버 포트 번호: {serverPort}</p>
      )}
      <p>Response Data: {responseData}</p>
    </div>
  );
};

export default Test3;