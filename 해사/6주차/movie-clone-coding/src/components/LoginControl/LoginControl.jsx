import { useState } from 'react';
import styles from './LoginControl.module.css';

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleToggleButton = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className={styles.loginControl}>
      <button className={styles.button} onClick={handleToggleButton}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <p className={styles.text}>
        {isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}
      </p>
    </div>
  );
}
