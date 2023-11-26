import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUserId, setUserPassword } from '../redux/actions';
import './LoginBtn.css';

const LoginBtn = () => {
  const dispatch = useDispatch();
  const { userId, userPassword } = useSelector((state) => state);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // axios 통신 전에 버튼 비활성화
    setIsLoading(true);

    try {
      await axios.post('http://localhost:8000/user/login', {
        id: userId,
        pw: userPassword,
      });

      // 통신 성공 시 처리
      setTimeout(() =>{
      }, 1500);
      alert('로그인 성공!');

    } catch (error) {
      // 통신 실패 시 처리
      if (error.response) {
        if (error.response.status === 400) {
          alert('입력값이 비어 있습니다.');
        } else if (error.response.status === 404) { //if, if 쓰면 좀 더 깔끔!
          alert('아이디 또는 비밀번호가 틀렸습니다.');
        }
      } else {
        alert('서버와의 통신 중 오류가 발생했습니다.');
      }
    } finally {
      // axios 통신 후 Loading 표시, 버튼 활성화
      setIsLoading(false);
    }
  };

  const handleIdChange = (e) => {
    dispatch(setUserId(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setUserPassword(e.target.value));
  };

  const isButtonDisabled = !userId || !userPassword || isLoading;

  return (
    <div className='loginbtn'>
      <div className='login_title'>로그인</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <div className="name">아이디</div>
            <input className="box" type="text" value={userId} onChange={handleIdChange} placeholder="아이디" />
          </label>
          <label>
            <div className="name">비밀번호</div>
            <input className="box" type="password" value={userPassword} onChange={handlePasswordChange} placeholder="비밀번호" />
          </label>
        </div>
        <input className={`submit_${(isButtonDisabled)? "off" : "on"}`} type="submit" value={isLoading ? "Loading..." : "확인"}/>
      </form>
    </div>
  );
};

export default LoginBtn;

