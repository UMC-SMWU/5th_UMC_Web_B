import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../reducer/userSlice';
import axios from 'axios';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ id: '', pw: '' });
  const [loading, setLoading] = useState(false);
  const { id, pw } = inputs;

  const hadleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const LoginFunc = async (e) => {
    e.preventDefault();

    let body = {
      id,
      pw,
    };

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:8000/user/login', body);

      dispatch({ type: 'user/loginUser', payload: res.data.result });
      navigate('/');
    } catch (error) {
      const status = error.response.status;
      if (status === 400) {
        alert('비어있는 내용입니다.');
        return;
      }
      if (status === 404) {
        alert('아이디 또는 비밀번호가 틀렸습니다.');
        return;
      }
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
