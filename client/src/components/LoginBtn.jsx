import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserId, setUserPassword, setLoggedIn} from '../redux/actions';
import './LoginBtn.css';

const LoginBtn = () => {
  const dispatch = useDispatch();
  const { userId, userPassword } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // axios 통신 전에 버튼 비활성화
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        id: userId,
        pw: userPassword,
      });

      // 통신 성공 시 처리
      if (response.status === 200) {
        setTimeout(() =>{
        }, 1500);
        localStorage.setItem('token', response.data.result.AccessToken);
        localStorage.setItem('userId', response.data.result.userId);
        alert('로그인 성공!');

        dispatch(setLoggedIn(true));
        navigate('/home');
      }

      else{
        const { status, data } = response;
  
        if (status === 400) {
          alert(data.message);
        } else if (status === 401 || status === 419) {
          alert(data.message);
          // 토큰과 아이디 초기화
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          dispatch(setUserId(null)); // Redux store도 초기화
        } else if (status === 404) {
          alert(data.message);
        } else {
          alert("알 수 없는 오류가 발생했습니다.");
        }
      }
    } catch (error) {
      // 통신 실패 시 처리
      if (error.response) {
        if (error.response.status === 400) {
          alert(error.response.data.message);
        }
        if (error.response.status === 404) {
          alert(error.response.data.message);
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

