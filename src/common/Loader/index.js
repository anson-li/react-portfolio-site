import React, { PureComponent } from 'react';
import Logo from '../../web/assets/logo_flat.png';

class Loader extends PureComponent {
  render() {
    return this.props.visible ? (
      <div id="loader-wrapper">
        <div id="loader" />
        <img className="loader-img" src={Logo} alt="Loader logo" />
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
    ) : null;
  }
}

export default Loader;
