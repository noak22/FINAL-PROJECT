import { Link } from 'react-router-dom';
import styles from './navigate.module.css';

function Navigation() {
  return (
    <header>
      <div className={styles.topBar}>
        <div className={styles.settings}>
          <Link to="/setting">הגדרות</Link>
        </div>

        <div className={styles.logoContainer}>
          <div className={styles.bookIcon}>S&S</div>
          <p className={styles.logoText}>STUDENTS AND STUDIES</p>
          <p className={styles.username}>שלום משתמש:</p>
        </div>

        <div className={styles.management}>
          <Link to="/management">דף ניהול</Link>
        </div>
      </div>

      <nav className={styles.navbar}>
        <Link to="/">דף הבית</Link>
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
