import { useState, useEffect } from "react";

export const useWorldTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate((prevDate) => {
        const newDate = new Date(prevDate.getTime() + 1000);
        return newDate;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const getDateFromApi = async () => {
      try {
        const response = await fetch("https://worldtimeapi.org/api/ip");
        const { datetime } = await response.json();
        const apiDate = new Date(datetime);
        setDate(apiDate);
      } catch (e) {
        console.error(e);
      }
    };

    getDateFromApi();
  }, []);

  return date;
};
