import React, { useState, useEffect } from 'react';

export default function Quotes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchQuotes = async () => {
      const api = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
        headers: {
          'X-Api-Key': 'j6lZij02bFBGL73iDHbVSA==bDWhyfZiatgBIyiY',
        },
      });
      const response = await api.json();
      setData(response);
    };
    fetchQuotes();
  }, []);
  return (
    <>
      {console.log(data)}

    </>
  );
}
