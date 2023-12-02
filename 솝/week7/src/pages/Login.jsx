import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();

  const checkEmail = (e) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const isValidEmail = regExp.test(e.target.value);
    setIsEmailValid(isValidEmail);
    updateButtonState(isValidEmail, isPasswordValid); 
  };

  const checkPassword = (e) => {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,100}$/;
    const isValidPassword = regExp.test(e.target.value);
    setIsPasswordValid(isValidPassword); 
    updateButtonState(isEmailValid, isValidPassword);
  };

  const updateButtonState = (isValidEmail, isValidPassword) => {
    setIsButtonEnabled(isValidEmail && isValidPassword);
  };

  const handleConfirmation = () => {
    if (!isButtonEnabled) {
      return;
    }
    navigate('/');
  };

  return (
    <div>
      <p>이메일과 비밀번호를<br />입력해주세요</p>
      <div>
        <p>이메일 주소</p>
        <input style={{ width: '300px'}} type='email' placeholder='이메일을 입력해주세요' onBlur={checkEmail} />
        {!isEmailValid && <p style={{ color: 'red' }}>올바른 이메일을 입력해주세요</p>}
      </div>
      <div>
        <p>비밀번호</p>
        <input style={{width: '300px' }}type='password' placeholder='영문,숫자,특수문자포함 8글자 이상' onBlur={checkPassword} />
        {!isPasswordValid && <p style={{ color: 'red' }}>올바른 비밀번호를 입력해주세요</p>}
      </div>
      <button disabled={!isButtonEnabled} onClick={handleConfirmation}>
        확인
      </button>
    </div>
  );
}
