import React, { Component } from 'react';
import Ad from './Ad.jsx';

class AdPage extends Component {
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
      <Ad
        isToggled={this.state.isToggled}
        handleToggleClick={this.handleToggleClick}
      />
    );
  }
}

export default AdPage;

//export default function AdPage() {
//const location = useLocation();
//const isHomePage = location.pathname === '/';
//return <div>{isHomePage && <Ad />}</div>;
//}
