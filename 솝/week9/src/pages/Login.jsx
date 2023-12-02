import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('아이디와 비밀번호를 모두 입력하세요.');
      return;
    }

    setLoading(true);
    
    await axios.post('http://localhost:8000/user/login', {
      id: username,
      pw: password,
    }).then((response) => {
      console.log(response);
      const { AccessToken, id } = response.data.result; // 수정: AccessToken으로 변경
        
      const code = response.status;
      setTimeout(() => {
        if (code === 200) {
          alert('로그인 성공');
    
          // 토큰을 localStorage에 설정
          if (AccessToken) {
            localStorage.setItem('token', AccessToken); // 수정: AccessToken으로 변경
          }
          if (id) {
            localStorage.setItem('id', id); // 로컬 스토리지 키를 'userId'로 수정
          }
        }
        setLoading(false);
      }, 1500);
    })
    };
      
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          아이디:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          비밀번호:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          확인
        </button>
      </form>
      {loading && <p>Loading...</p>}
    </div>
  );

  };
export default Login;
