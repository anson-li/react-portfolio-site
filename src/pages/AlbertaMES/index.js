
import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';

import Loader from '../../common/Loader';
import MobileNavigation from '../../common/MobileNavigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import BackgroundAlbertaMES from '../../web/assets/bg-albertames.png';

import WorkTemplate from '../../common/WorkTemplate';

class AlbertaMES extends PureComponent {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false
    }).init();
  }

  render() {
    return (
      <WorkTemplate
        background={BackgroundAlbertaMES}
      />
    )
  }
}

export default AlbertaMES;