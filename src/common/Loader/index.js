import React, { PureComponent } from 'react';
import Logo from '../../web/assets/logo_flat.png';

class Loader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    this.setState({ visible: false });
  }

  render() {
    return this.state.visible ? (
      <div id="loader-wrapper">
        <div id="loader"></div>
        <img className="loader-img" src={Logo} alt="Loader logo"></img>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    ) : null;
  }
}

export default Loader;