import React, { Component } from "react";


class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false, // 초기값을 false로 설정
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
    const { isLoggedIn } = this.state;

    return (
      <div>
        {isLoggedIn ? (
         <div className="logout">
          <button onClick={this.handleLogoutClick} className="LogButton">로그아웃</button>
          <p className="alert">환영합니다!</p>
          </div>
        ) : (
         <div className="login"> 
          <button onClick={this.handleLoginClick} className="LogButton">로그인</button>
          <p className="alert">로그인 해주세요!</p>
          </div>
        )}
      </div>
      
    );
  }
}

export default LoginControl;
