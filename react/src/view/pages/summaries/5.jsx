import React, { useEffect, useState } from 'react';
import styles from './5.module.css';
import { auth } from '../../../firebase/firebase';

const Summaries = () => {
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
          <h2>כל הסיכומים לפי הקורסים</h2>
          <p>
            כאן תראו את כל הסיכומים של כלל הסטודנטים לפי הקורסים שאתם לומדים באותו הסמסטר
          </p>
        </div>

        <hr className={styles.separator} />

        <div className={styles.section}>
          <h2>כל הסיכומים לפי תואר</h2>
          <p>
            כאן תראו את כל הסיכומים של כלל הסטודנטים שלומדים את התואר שלכם בכל המסלולים והשנים.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summaries;
