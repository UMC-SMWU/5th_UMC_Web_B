import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginButton from '../../components/Button/LoginButton';
import LogoutButton from '../Button/LogoutButton';
import styles from './Header.module.css';

export default function Header() {
  const { name } = useSelector((state) => state.user);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to='/'>
          <img
            style={{ width: '154px', height: '20px' }}
            src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
            alt='로고'
          />
        </Link>
        <Link to='/movies'>영화</Link>
        <Link to='/tv'>TV 프로그램</Link>
        <Link to='/person'>인물</Link>
      </nav>
      {name ? <LogoutButton /> : <LoginButton />}
      {name && <div className={styles.username}>{name}</div>}
    </header>
  );
}
