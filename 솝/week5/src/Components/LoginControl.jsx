import React, { Component } from "react";


class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false, // 초기값을 false로 설정하기->아래의 삼항연산자에 따라서 로그인이 첫 화면에 뜸
    };
  }

  handleLoginClick = () => { //로그인 버튼을 클릭했을 때
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogoutClick = () => { //로그아웃 버튼을 클릭했ㅇ르 떄
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        {isLoggedIn ? ( //inline if문으로 구성. inline으로 하지 않는게 더 가독성이 좋을 것 같긴 함
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
