import { FC, useState, useEffect, useMemo } from 'react';

import {
  HOURS_ON_CLOCK,
  HOUR_IN_DEGREES,
  MINUTE_IN_DEGREES,
  ONE_SECOND,
} from './constants';

import styles from './Clock.module.css';

interface Degrees {
  hours: number;
  minutes: number;
  seconds: number;
}

const Clock: FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    const intervalId = setInterval(() => {
      setDate((prevDate) => new Date(prevDate.getTime() + ONE_SECOND));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const degrees: Degrees = useMemo(() => {
    const hoursDeg = date.getHours() * HOUR_IN_DEGREES;
    const minutesDeg = date.getMinutes() * MINUTE_IN_DEGREES;
    const secondsDeg = date.getSeconds() * MINUTE_IN_DEGREES;

    return {
      hours: hoursDeg + minutesDeg / HOURS_ON_CLOCK,
      minutes: minutesDeg,
      seconds: secondsDeg,
    };
  }, [date]);

  const time: string = useMemo(() => date.toLocaleTimeString(), [date]);

  return (
    <div className={styles.wrapper}>
      {isMounted && (
        <>
          <div className={styles.time}>{time}</div>
          <div className={styles.clock}>
            <span className={styles.clock__twelve} />
            <span className={styles.clock__three} />
            <span className={styles.clock__six} />
            <span className={styles.clock__nine} />

            <div className={styles.clock__rounder} />
            <div
              className={styles.clock__hour}
              style={{ transform: `rotateZ(${degrees.hours}deg)` }}
            />
            <div
              className={styles.clock__minutes}
              style={{ transform: `rotateZ(${degrees.minutes}deg)` }}
            />
            <div
              className={styles.clock__seconds}
              style={{ transform: `rotateZ(${degrees.seconds}deg)` }}
            />
          </div>
        </>
      )}
      <div className={styles.semicircle} />
    </div>
  );
};

export default Clock;
