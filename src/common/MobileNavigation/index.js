
import React, { PureComponent } from 'react';

class MobileNavigation extends PureComponent {
  constructor(props) {
    super(props);
    this.setState({
      visible: false,
    })
  }

  render() {
    return this.visible ? (
      <div className="zindex-100 col-md-12 hidden-sm hidden-md hidden-lg hidden-xl paddingleft-0">
        <h5 className="toggle menuhead">
          <span className="title">Anson Li</span>
          <div className="hamburger-menu">&#9776;</div>
        </h5>
        <div className="dropdown">
          <h5>
          <ul className="menu" hidden="true">
            <li><a className="strikethrough menulink" href="/">HOME</a></li>
            <li><a className="strikethrough menulink" href="resume">RESUME</a></li>
            <li><a className="strikethrough menulink" href="work">WORK</a></li>
            <li><a className="strikethrough menulink" href="contact">CONTACT</a></li>
          </ul>
          </h5>
        </div>
      </div>
    ) : null;
  }
}

export default MobileNavigation;