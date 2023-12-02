import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedIn} from '../redux/actions';
import "./Ad.css"

const LoginControl = () => {
    const { userId, isLoggedIn } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleLogoutClick = () => {
        dispatch(setLoggedIn(false));
      };

    return (
        <div className='login'>
            {isLoggedIn?(
                <div className='loginbox'>
                    <Link to="/home"><button onClick={handleLogoutClick}>로그아웃</button></Link>
                <div>{userId}님, 환영합니다!</div>
                </div>
            ):(
                <div className='loginbox'>
                    <Link to="/login"><button>로그인</button></Link>
                <div>로그인 해주세요!</div>
                </div>
            )}
        </div>
    )
}

export default LoginControl

