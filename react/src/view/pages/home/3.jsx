import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase";
import styles from "./3.module.css";

function Home() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>הקורסים שלי</h2>
          <p className={styles.description}>
            כאן תראו את הקורסים אליהם אתם רשומים לפי סמסטר והודעות הקשורות לאותם קורסים שנרשמות על ידי הסטודנטים והמרצים
          </p>
        </div>

        <hr className={styles.separator} />

        <div className={styles.section}>
          <h2 className={styles.title}>הודעות</h2>
          {}
        </div>
      </div>
    </div>
  );
}

export default Home;
