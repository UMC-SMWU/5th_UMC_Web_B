import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/login`);
    setIsLoggedIn(true);
    //isLoggedIn을 바꾸는 건 handleSubmit
    //handleSubmit이 true 면 isloggedIn true가 됨
  };
  return (
    <div className="click-login">
      <div>
        <button className="loginButton" onClick={handleClick}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </button>
        <li className="header-font">
          {isLoggedIn ? '환영합니다' : '로그인 해주세요'}
        </li>
      </div>
    </div>
  );
}
