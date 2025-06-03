import React, { useEffect, useState } from 'react';
import styles from './9.module.css';
import { auth } from '../../../firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [userEmail, setUserEmail] = useState('');
  const [username, setUsername] = useState('');
  const [sendNotifications, setSendNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setUsername(data.username || '');
          setSendNotifications(data.sendNotifications || false);
          setShowProfile(data.showProfile || false);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      await setDoc(doc(db, 'users', user.uid), {
        username,
        sendNotifications,
        showProfile,
        email: userEmail
      });

      window.confirm('הפרטים נשמרו בהצלחה!');
    } catch (error) {
      console.error('שגיאה בשמירת ההגדרות:', error);
      alert('אירעה שגיאה בשמירה');
    }
  };

  const handleLogout = () => {
    if (window.confirm('האם את/ה בטוח/ה שברצונך להתנתק?')) {
      signOut(auth).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>הגדרות</h2>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>אימייל:</label>
          <input type="text" value={userEmail} disabled />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>שם משתמש:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <label>
            <input
              type="checkbox"
              checked={sendNotifications}
              onChange={() => setSendNotifications(!sendNotifications)}
            />
            שלח התראות למייל
          </label>
          <label>
            <input
              type="checkbox"
              checked={showProfile}
              onChange={() => setShowProfile(!showProfile)}
            />
            אפשר לראות את הפרופיל שלי בפומבי
          </label>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.saveButton} onClick={handleSave}>
            שמור
          </button>
          <button className={styles.logoutButton} onClick={handleLogout}>
            התנתק
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
