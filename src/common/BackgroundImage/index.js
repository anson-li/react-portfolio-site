import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import {
  TweenLite, Power0,
} from 'gsap';

import './style.scss';

class BackgroundImage extends PureComponent {
  constructor (props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll);
    const {afterLoad} = this.props;
    if (this.backgroundImage.complete) {
      afterLoad();
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll () {
    TweenLite.to(this.backgroundImage, 1, {
      ease: Power0,
      force3D: true,
      rotationY: 0.01,
      y: window.pageYOffset * 0.3,
    });
  }

  render () {
    const {src, alt, afterLoad} = this.props;

    return (
      <img
        alt={alt}
        className='bg-img'
        onLoad={afterLoad}
        ref={(ref) => {
          this.backgroundImage = ref;
        }}
        src={src}
      />
    );
  }
}

BackgroundImage.propTypes = {
  afterLoad: PropTypes.func,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

BackgroundImage.defaultProps = {
  afterLoad: () => {},
};

export default BackgroundImage;
