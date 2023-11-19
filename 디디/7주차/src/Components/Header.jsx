import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import LoginControl from './LoginControl';

export default function Header() {
  return (
    <div className="Header">
      <div className="header-container">
        <div className="header-content flex">
          <div className="header-logo">
            <Link to="/">
              <img
                style={{ width: '154px', height: '20px' }}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="로고"
              />
            </Link>
          </div>
          <div className="header-nav">
            <ul>
              <li>
                <Link to="/movie" className="header-font">
                  영화
                </Link>
              </li>
              <li>
                <Link to="/tv" className="header-font">
                  TV프로그램
                </Link>
              </li>
              <li>
                <Link to="/celebrity" className="header-font">
                  인물
                </Link>
              </li>
              <li className="login">
                <LoginControl />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
