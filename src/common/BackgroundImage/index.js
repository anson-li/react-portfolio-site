import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TweenLite, Power0 } from 'gsap';

import './style.scss';

class BackgroundImage extends PureComponent {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    TweenLite.to(this.backgroundImage, 1, {
      y: window.pageYOffset * 0.3,
      ease: Power0,
    });
  }

  render() {
    const { src, alt } = this.props;
    return (
      <img className="bg-img" src={src} alt={alt} ref={(ref) => { this.backgroundImage = ref; }} />
    );
  }
}

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BackgroundImage;
