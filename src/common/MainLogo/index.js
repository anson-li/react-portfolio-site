import React, {
  PureComponent,
} from 'react';
import {
  Link,
} from 'react-router-dom';

import Logo from '../../web/assets/logo.svg';

class MainLogo extends PureComponent {
  render () {
    return (
      <Link className='d-none d-md-block logo-main' href='/' id='logo-main' to='/'><img alt='Logo' height='150px' id='id-light' src={Logo} /></Link>
    );
  }
}

export default MainLogo;
