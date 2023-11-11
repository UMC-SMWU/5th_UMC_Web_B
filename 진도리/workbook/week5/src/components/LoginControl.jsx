import React, { useState } from 'react'
import "./Ad.css"

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
      }
    
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <div className='login'>
            {isLoggedIn?(
                <div className='loginbox'>
                <button onClick={handleLogoutClick}>로그아웃</button>
                <div>환영합니다!</div>
                </div>
            ):(
                <div className='loginbox'>
                <button onClick={handleLoginClick}>로그인</button>
                <div>로그인 해주세요!</div>
                </div>
            )}
        </div>
    )
}

export default LoginControl

