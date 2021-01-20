import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../web/assets/logo.svg';

class MainLogo extends PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <Link 
        to="/"
        id="logo-main"
        className="d-none d-md-block logo-main"
        href="/"
        onMouseEnter={() => this.props.cursorHover()}
        onMouseLeave={() => this.props.cursorUnhover()}
      >
          <img height="150px" id="id-light" src={Logo} alt="Logo" />
      </Link>
    );
  }
}

export default MainLogo;
