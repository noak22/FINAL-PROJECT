import React, { useEffect, useState } from 'react';
import styles from './6.module.css';
import { auth } from '../../../firebase/firebase';

const SavedSummaries = () => {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("קובץ שהועלה:", file.name);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2>סיכומים שמורים</h2>
          <p>כאן תראו את כל הסיכומים ששמרו ממאגר הסיכומים.</p>
        </div>

        <hr className={styles.separator} />

        <div className={styles.section}>
          <div className={styles.headerRow}>
            <h2>סיכומים אישיים</h2>
            <label className={styles.uploadButton}>
              העלאת קבצים
              <input type="file" onChange={handleFileUpload} hidden />
            </label>
          </div>
          <p>כאן תראו את כל הסיכומים שהעלתם.</p>
        </div>
      </div>
    </div>
  );
};

export default SavedSummaries;
