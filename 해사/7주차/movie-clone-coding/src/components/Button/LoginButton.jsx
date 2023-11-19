import { useNavigate } from 'react-router-dom';
import styles from './LoginButton.module.css';

export default function LoginButton() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/login');
  return (
    <button className={styles.login} onClick={handleClick}>
      로그인
    </button>
  );
}
