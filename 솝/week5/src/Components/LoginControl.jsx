import React, { useState } from "react";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
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
