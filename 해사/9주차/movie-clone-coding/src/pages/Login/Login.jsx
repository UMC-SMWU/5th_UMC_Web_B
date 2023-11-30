import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ id: '', pw: '' });
  const [loading, setLoading] = useState(false);
  const { id, pw } = inputs;

  const hadleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const LoginFunc = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:8000/user/login', {
        id,
        pw,
      });
      localStorage.setItem('token', res.data.result.AccessToken);
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>이메일과 비밀번호를 입력해주세요</h1>
      <form className={styles.login} onSubmit={LoginFunc}>
        <label htmlFor='id'>아이디</label>
        <input
          className={styles.input}
          id='id'
          type='text'
          onChange={hadleChange}
          value={id}
          placeholder='아이디'
        />
        <label htmlFor='pw'>비밀번호</label>
        <input
          className={styles.input}
          id='pw'
          type='password'
          onChange={hadleChange}
          value={pw}
          placeholder='비밀번호'
          autoComplete='off'
        />
        <button disabled={loading}>확인</button>
        {loading && <div className={styles.loading}>Loading...</div>}
      </form>
    </div>
  );
}
