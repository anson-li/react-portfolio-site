import React, { PureComponent } from 'react';
import Logo from '../../web/assets/logo_flat.png';
import { TweenLite } from 'gsap';

class Loader extends PureComponent {
  constructor(props) {
    super(props);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
  }

  fadeIn(e) {
    TweenLite.to(this.loader, 0.9, {
      opacity: 1,
    });
  }

  fadeOut(e) {
    TweenLite.to(this.loader, 1, {
      opacity: 0,
      delay: 1,
    });
  }

  render() {
    return (
      <div id="loader-wrapper" ref={(ref) => { this.loader = ref; }}>
        <div id="loader" />
        <img className="loader-img" src={Logo} alt="Loader logo" />
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
    );
  }
}

export default Loader;
