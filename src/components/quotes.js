import React, { useState, useEffect } from 'react';

export default function Quotes() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchQuotes = async () => {
      setIsLoading(true);
      try {
        const api = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
          headers: {
            'X-Api-Key': 'j6lZij02bFBGL73iDHbVSA==bDWhyfZiatgBIyiY',
          },
        });

        const response = await api.json();
        setData(response[0].quote);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchQuotes();
  }, [setData, setIsLoading]);

  if (isError) {
    return (
      <>
        <p className="error">oops womething went wrong!!!!</p>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        <p className="loading">Loading...</p>
      </>
    );
  }
  return (
    <>
      <div className="qoutes-container">
        <p>{data}</p>
      </div>
    </>
  );
}
