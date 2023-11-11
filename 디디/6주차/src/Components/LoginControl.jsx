import React, { useState } from 'react';
export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn((prev) => !prev);
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
