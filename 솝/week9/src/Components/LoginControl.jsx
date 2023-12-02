import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useNavigate 훅을 사용하여 navigate 함수를 가져옵니다.
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    // '로그인' 버튼을 클릭하면 isLoggedIn을 true로 설정하고 '/Login' 경로로 이동합니다.
    navigate('/Login');
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="logout">
          <button onClick={handleLogoutClick} className="LogButton">
            로그아웃
          </button>
          <p className="alert">환영합니다!</p>
        </div>
      ) : (
        <div className="login">
          <button onClick={handleLoginClick} className="LogButton">
            로그인
          </button>
          <p className="alert">로그인 해주세요!</p>
        </div>
      )}
    </div>
  );
}

export default LoginControl;
