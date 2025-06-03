import React from 'react';
import styles from './4.module.css';

const ForumPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>פורומים לפי הקורסים שלי</h2>
          <p>כאן תראו את הפורומים שלכם לפי הקורסים שאתם רשומים אליהם בכל סמסטר</p>
        </section>

        <hr className={styles.separator} />

        <section className={styles.section}>
          <h2>פורומים לפי תואר</h2>
          <p>
            כאן תראו את הפורומים שלכם לפי התואר שלכם. תוכלו לדבר עם אנשים בוגרים יותר מאותו התואר, סטודנטים
            מכל המסלולים באותו התואר וכו'.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ForumPage;
