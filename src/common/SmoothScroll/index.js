import React from 'react';
import { TweenLite, Power0 } from 'gsap';
import WOW from 'wowjs';
import PropTypes from 'prop-types';

import './style.scss';

class SmoothScroll extends React.Component {
  ro = new ResizeObserver((elements) => {
    for (const elem of elements) {
      const crx = elem.contentRect;
      this.setState({
        height: crx.height,
      });
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.ro.observe(this.viewport);
    const { height } = this.state;
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: height - 500,
      mobile: true,
      live: false,
    }).init();
    this.el = null;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    this.ro.disconnect();
  }

  onScroll = () => {
    TweenLite.to(this.viewport, 1, {
      y: -window.pageYOffset,
      ease: Power0,
      force3D: true,
      rotationY: 0.01,
    });
  };

  render() {
    const { children } = this.props;
    const { height } = this.state;
    return (
      <>
        <div className="viewport" ref={(ref) => { this.viewport = ref; }}>
          {children}
        </div>
        <div
          ref={(ref) => { this.fake = ref; }}
          style={{
            height,
          }}
        />
      </>
    );
  }
}

SmoothScroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SmoothScroll;
