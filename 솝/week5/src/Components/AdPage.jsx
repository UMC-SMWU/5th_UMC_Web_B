import React, { Component } from "react";

class AdPage extends Component {
  constructor(props) {
    super(props);

    this.state = { //초기상태 설정해주기
      isAdVisible: true,
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({ //이전상태 기반으로 컴포넌트 상태 업데이트
      isAdVisible: !prevState.isAdVisible, 
    }));
  };

  render() {
    const { img } = this.props;
    const { isAdVisible } = this.state;

    return (
      <>
        {isAdVisible && ( //inAdVisible이 true일 때만 광고이미지 렌더링
          <img src={img} alt="Advertisement" style={{width:"100%"}}/>
        )}
        {/* 버튼 클릭되면 함수 호출 */}
        <div>
          <button onClick={this.handleToggleClick}> 
            {isAdVisible ? "광고안보기" : "광고보기"}
          </button>
        </div>
      </>
    );
  }
}

export default AdPage;