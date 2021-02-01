import React from 'react';
import { TweenLite, Power0 } from 'gsap';
import WOW from 'wowjs';

import './style.scss';

export default class SmoothScroll extends React.Component {
  state = {
    height: window.innerHeight,
  };

  ro = new ResizeObserver((elements) => {
    for (const elem of elements) {
      const crx = elem.contentRect;
      this.setState({
        height: crx.height,
      });
    }
  });

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.ro.observe(this.viewport);
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: this.state.height - 500,
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
    });
  };

  render() {
    return (
      <>
        <div className="viewport" ref={(ref) => (this.viewport = ref)}>
          {this.props.children}
        </div>
        <div
          ref={(ref) => (this.fake = ref)}
          style={{
            height: this.state.height,
          }}
        />
      </>
    );
  }
}
