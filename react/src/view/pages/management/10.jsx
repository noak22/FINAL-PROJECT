import React from "react";
import styles from "./10.module.css";

const Management = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.stats}>
          <div className={styles.item}>כמות משתמשים</div>
          <div className={styles.item}>כמות צ'אטים (פורומים)</div>
          <div className={styles.item}>כמות סיכומים</div>
          <div className={styles.item}>כמות קורסים</div>
        </div>
      </div>
    </div>
  );
};

export default Management;
