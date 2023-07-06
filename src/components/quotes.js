import React, { useState, useEffect } from 'react';

export default function Quotes() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchQuotes = async () => {
      setIsLoading(true);
      const api = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
        headers: {
          'X-Api-Key': 'j6lZij02bFBGL73iDHbVSA==bDWhyfZiatgBIyiY',
        },
      });
      const response = await api.json();
      setData(response[0].quote);
      setIsLoading(false);
    };
    fetchQuotes();
  }, [setData, setIsLoading]);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <p>{data}</p>

    </>
  );
}
