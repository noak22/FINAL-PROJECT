import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import styles from "./1.module.css";
import logo from "../../../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      setError('פרטי התחברות שגויים');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.pageContent}>
        <div className={styles.loginContainer}>
          <form onSubmit={handleLogin} className={styles.form}>
            <label className={styles.label}>שם משתמש</label>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={styles.label}>סיסמה</label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.link}>
              <Link to="/signup">להרשמה</Link>
            </div>
            <button className={styles.button} type="submit">login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
