import { useState, useEffect } from "react";

type Time = {
  seconds: number;
  minutes: number;
  hours: number;
  time: string;
};

const initialData: Time = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  time: "",
};

export const useTime = (apiDate: Date): Time => {
  const [time, setTime] = useState<Time>(initialData);

  useEffect(() => {
    const secondsFraction = apiDate.getSeconds() / 60;
    const minutesFraction = (secondsFraction + apiDate.getMinutes()) / 60;
    const hoursFraction = (minutesFraction + apiDate.getHours()) / 12;
    const formattedTime = apiDate.toLocaleTimeString();

    setTime({
      seconds: secondsFraction,
      minutes: minutesFraction,
      hours: hoursFraction,
      time: formattedTime,
    });
  }, [apiDate]);

  return time;
};
