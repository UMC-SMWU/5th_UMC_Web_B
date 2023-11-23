import { useNavigate } from 'react-router-dom';
import styles from './LogoutButton.module.css';

export default function LogoutButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    // 로그아웃
  };
  return (
    <button className={styles.logout} onClick={handleClick}>
      로그아웃
    </button>
  );
}
