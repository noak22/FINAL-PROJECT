import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import styles from "./2.module.css";
import logo from "../../../assets/logo.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    birthDate: "",
    institution: "",
    degree: "",
    year: "",
    semester: "",
    track: "",
    email: "",
    password: "",
    confirmPassword: "",
    average: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("הסיסמאות לא תואמות");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError("אירעה שגיאה בהרשמה. נסה שוב.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <h2 className={styles.title}>יש למלא את הפרטים הבאים:</h2>
      <form className={styles.form} onSubmit={handleSignup}>
        <div className={styles.column}>
          <label>שם מלא</label>
          <input name="fullName" onChange={handleChange} />

          <label>תעודת זהות</label>
          <input name="idNumber" onChange={handleChange} />

          <label>תאריך לידה</label>
          <input type="date" name="birthDate" onChange={handleChange} />

          <label>באיזה מוסד אקדמי אתה לומד?</label>
          <input name="institution" onChange={handleChange} />

          <label>איזה תואר אתה לומד?</label>
          <input name="degree" onChange={handleChange} />

          <label>מה ההתמחות?</label>
          <input name="year" onChange={handleChange} />
        </div>
        <div className={styles.column}>
          <label>באיזה סמסטר אתה?</label>
          <input name="semester" onChange={handleChange} />

          <label>באיזה מסלול אתה? (בוקר/ערב)</label>
          <input name="track" onChange={handleChange} />

          <label>אימייל</label>
          <input name="email" type="email" onChange={handleChange} />

          <label>סיסמה</label>
          <input name="password" type="password" onChange={handleChange} />

          <label>אימות סיסמה</label>
          <input name="confirmPassword" type="password" onChange={handleChange} />

          <label>ממוצע ציונים</label>
          <input name="average" onChange={handleChange} />

          <button type="submit" className={styles.button}>signup</button>
        </div>

        {error && <p className={styles.error}>{error}</p>}
       
      </form>
    </div>
  );
};

export default Signup;
