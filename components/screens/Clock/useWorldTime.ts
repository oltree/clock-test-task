import { useState, useEffect } from 'react';

export const useWorldTime = () => {
  const [apiDate, setApiDate] = useState(new Date());

  useEffect(() => {
    const getDateFromApi = async () => {
      try {
        const response = await fetch('https://worldtimeapi.org/api/ip');
        const { datetime } = await response.json();
        const apiDate = new Date(datetime);
        setApiDate(apiDate);
      } catch (e) {
        console.error(e);
      }
    };

    getDateFromApi();
  }, []);

  return apiDate;
};
