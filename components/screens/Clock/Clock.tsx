import { FC, useState } from 'react';

import { useWorldTime } from './useWorldTime';

import styles from './Clock.module.css';

const Clock: FC = () => {
  const apiDate = useWorldTime();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
      mm = date.getMinutes() * 6,
      ss = date.getSeconds() * 6;

    setHours(hh + mm / 12);
    setMinutes(mm);
    setSeconds(ss);
  };
  setInterval(clock, 1000);

  return (
    <div className={styles.clock__circle}>
      <span className={styles.clock__twelve}></span>
      <span className={styles.clock__three}></span>
      <span className={styles.clock__six}></span>
      <span className={styles.clock__nine}></span>

      <div className={styles.clock__rounder}></div>
      <div
        className={styles.clock__hour}
        style={{ transform: `rotateZ(${hours + minutes / 12}deg)` }}
      ></div>
      <div
        className={styles.clock__minutes}
        style={{ transform: `rotateZ(${minutes}deg)` }}
      ></div>
      <div
        className={styles.clock__seconds}
        style={{ transform: `rotateZ(${seconds}deg)` }}
      ></div>
    </div>
  );
};

export default Clock;
