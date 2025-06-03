import React from 'react';
import styles from './7.module.css';

const HelpCenter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2>סרטוני הדרכה לאתר</h2>
          <p>כאן תראו סרטוני הדרכה כיצד להפעיל את האתר, לשמור סיכומים, להיכנס לצ'אטים וכו'.</p>
        </div>

        <hr className={styles.separator} />

        <div className={styles.section}>
          <h2>שאלות תשובות</h2>
          <p>כאן תראו שאלות נפוצות שנשאלו על ידי המשתמשים וענו על ידי צוות התמיכה של האתר</p>
          <a href="mailto:support@example.com" className={styles.contactButton}>ליצירת קשר לחץ כאן</a>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
