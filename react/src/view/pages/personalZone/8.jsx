import React, { useEffect, useState } from 'react';
import styles from './8.module.css';
import { auth } from '../../../firebase/firebase';

const PersonalZone = () => {
  const [userEmail, setUserEmail] = useState('');

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
          <p>כאן תראו את רשימת הקורסים שלכם</p>
        </div>

        <hr className={styles.separator} />

        <div className={styles.section}>
          <h2>המשימות שלי</h2>
          <p>כאן תראו את רשימת ההמשימות / עבודות שלכם עם שם הקורס ומועד ההגשה</p>
        </div>

        <hr className={styles.separator} />

        <div className={styles.section}>
          <h2>פרטי התואר שלי</h2>
          <p>כאן תראו את הפרטים של התואר והמכללה, שעות פעילות, מספר הטלפון של מנהל הסטודנטים ליצירת קשר וכו'.</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalZone;
