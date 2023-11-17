import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./LoginBtn.css"

const LoginBtn = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();

      if (isEmailValid && isPasswordValid){
        alert(`${email}님, 로그인 되었습니다!`);
      }
      else {
        alert('이메일 또는 비밀번호 형식이 올바르지 않습니다.');
      }
    };

    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      validateEmail(newEmail);
    };
  
    const handlePasswordChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      validatePassword(newPassword);
    };
    
    const validateEmail = (email) => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setIsEmailValid(isValid);
    };

    const validatePassword = (password) => {
      const isValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(password);
      setIsPasswordValid(isValid);
    };
    
  return (
    <div className='loginbtn'>
        <div className='login_title'>이메일과 비밀번호를 입력해주세요</div>
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                <div className="name">이메일 주소</div>
                <input className="box" type="text" value={email} onChange={handleEmailChange} placeholder="umc@이메일주소"/>
                <div className={`text_${email&&!isEmailValid?"error":""}`}>올바른 이메일을 입력해주세요</div>
            </label>
            <label>
                <div className="name">비밀번호</div>
                <input className="box" type="password" value={password}
                  onChange={handlePasswordChange} placeholder="영문, 숫자, 특수문자 포함 8자 이상"/>
                <div className={`text_${password&&!isPasswordValid?"error":""}`}>올바른 비밀번호를 입력해주세요</div>
            </label>
            </div>
            <input className={`submit_${isEmailValid && isPasswordValid? "on":"off"}`} type="submit" value="확인" 
              disabled={!isEmailValid || !isPasswordValid} 
              onClick={() =>navigate(`/home`)}/>
        </form>
    </div>
  )
}

export default LoginBtn