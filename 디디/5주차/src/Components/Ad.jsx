import React, { Component } from 'react';
class Ad extends Component {
  constructor() {
    super();
    this.state = {
      isToggled: true,
    };
  }
  //버튼 클릭될 때 호출
  handleToggleClick = () => {
    this.setState((prevState) => ({
      isToggled: !prevState.isToggled,
    }));
  };

  render() {
    return (
      <div className="image-button">
        {this.state.isToggled ? (
          <img className="adImage" alt="adImage" src="ad.svg"></img>
        ) : null}

        <button className="adButton" onClick={this.handleToggleClick}>
          {this.state.isToggled ? '숨기기' : '보이기'}
        </button>
      </div>
    );
  }
}

//이벤트 핸들러
export default Ad;
