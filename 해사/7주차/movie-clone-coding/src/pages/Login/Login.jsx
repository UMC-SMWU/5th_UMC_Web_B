import { useState } from 'react';
import InputValidator from '../../components/InputValidator/InputValidator';
import styles from './Login.module.css';

export default function Login() {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;
  const hadleChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };
  const isValidEmail = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isValidPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/.test(password);
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>이메일과 비밀번호를 입력해주세요</h1>
      <form className={styles.login}>
        <label htmlFor='email'>이메일 주소</label>
        <input
          className={styles.input}
          id='email'
          type='text'
          onChange={hadleChange}
          value={email}
          placeholder='이메일'
        />
        <InputValidator
          condition={isValidEmail}
          message='올바른 이메일을 입력해주세요.'
          value={email}
        />
        <label htmlFor='password'>비밀번호</label>
        <input
          className={styles.input}
          id='password'
          type='password'
          onChange={hadleChange}
          value={password}
          placeholder='영문, 숫자, 특수문자 포함 8자 이상'
        />
        <InputValidator
          condition={isValidPassword}
          message='영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.'
          value={password}
        />
        <button>확인</button>
      </form>
    </div>
  );
}
