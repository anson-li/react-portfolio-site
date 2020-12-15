import React, { PureComponent } from 'react';
import Logo from '../../web/assets/logo.svg';

class MainLogo extends PureComponent {
  render() {
    return (
      <a href="/" className="d-none d-md-block logo-main"><img height="150px" id="id-light" src={Logo} alt="Logo"/></a>
    );
  }
}

export default MainLogo;