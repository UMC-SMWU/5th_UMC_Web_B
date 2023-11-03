import React, { Component } from "react";

class Ad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdVisible: true,
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      isAdVisible: !prevState.isAdVisible,
    }));
  };

  render() {
    const { img } = this.props;
    const { isAdVisible } = this.state;

    return (
      <>
        {isAdVisible && (
          <img src={img} alt="Advertisement" style={{width:"100%"}}/>
        )}
        <div>
          <button onClick={this.handleToggleClick}>
            {isAdVisible ? "광고안보기" : "광고보기"}
          </button>
        </div>
      </>
    );
  }
}

export default Ad;
