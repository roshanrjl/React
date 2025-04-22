import { useEffect, useState } from 'react';

function useCurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((response) => response.json())
      .then((json) => setData(json[currency]))
      .catch((error) => {
        console.error("Failed to fetch currency data:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrency;
