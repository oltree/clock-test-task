import { FC } from "react";

import { useWorldTime } from "./useWorldTime";
import { useTime } from "./useTime";

import { DEGREES_IN_CIRCLE } from "./constants";

import styles from "./Clock.module.css";

const Clock: FC = () => {
  const date = useWorldTime();
  const { seconds, minutes, hours, time } = useTime(date);

  return (
    <div className={styles.wrapper}>
      <div className={styles.time}>{time}</div>
      <div className={styles.clock}>
        <div className={styles.hour_3} />
        <div className={styles.hour_6} />
        <div className={styles.hour_9} />
        <div className={styles.hour_12} />
        <div className={styles.clockCenter} />
        <div
          className={styles.hourHand}
          style={{ transform: `rotate(${hours * DEGREES_IN_CIRCLE}deg)` }}
        />
        <div
          className={styles.minuteHand}
          style={{ transform: `rotate(${minutes * DEGREES_IN_CIRCLE}deg)` }}
        />
        <div
          className={styles.secondHand}
          style={{ transform: `rotate(${seconds * DEGREES_IN_CIRCLE}deg)` }}
        />
      </div>
      <div className={styles.semicircle} />
    </div>
  );
};

export default Clock;
