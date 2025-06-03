import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import styles from "./navigate.module.css";
import logo from "../../../assets/logo.png";

function Navigation() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.settings}>
          <Link to="/setting">הגדרות</Link>
        </div>

        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logoImage} />
          <p className={styles.username}>שלום משתמש: {userEmail}</p>
        </div>

        <div className={styles.management}>
          <Link to="/management">דף ניהול</Link>
        </div>
      </div>

      <nav className={styles.navbar}>
        <Link to="/home">דף הבית</Link>
        <Link to="/forums">פורום</Link>
        <Link to="/summaries">מאגר סיכומים</Link>
        <Link to="/saved-summaries">סיכומים שמורים</Link>
        <Link to="/help-center">תמיכה והכנה ושאלות</Link>
        <Link to="/personal-zone">אזור אישי</Link>
      </nav>
    </header>
  );
}

export default Navigation;
