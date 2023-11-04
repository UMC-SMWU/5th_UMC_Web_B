import React, { Component } from 'react';
class LoginControl extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="click-login">
        <button
          className="loginButton"
          onClick={
            this.state.isLoggedIn
              ? this.handleLogoutClick
              : this.handleLoginClick
          }
        >
          {this.state.isLoggedIn ? '로그아웃' : '로그인'}
        </button>
        <li className="header-font">
          {this.state.isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}
        </li>
      </div>
    );
  }
}
export default LoginControl;
