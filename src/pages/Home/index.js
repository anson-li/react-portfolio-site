/* eslint-disable no-return-assign */
import anime from 'animejs';
import React, { PureComponent } from 'react';

import Background from '../../common/Background';
import ThreeSphere from './components/ThreeSphere';
import MainText from './components/MainText';

import withTransition from '../../common/WithTransition';

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  animateIn() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutExpo',
    }).finished;
  }

  animateOut() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      opacity: 0,
      duration: 500,
      easing: 'easeOutExpo',
    }).finished;
  }

  render() {
    return (
      <div id="main-page" ref={(e) => { this.el = e; }}>
        <Background />
        <div className="fixed">
          <ThreeSphere />
          <MainText 
            {...this.props}
          />
        </div>
        <div id="bottom" />
      </div>
    );
  }
}

export default withTransition(Home);
