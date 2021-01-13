/* eslint-disable no-return-assign */
import anime from 'animejs';
import React, { PureComponent } from 'react';

import Border from '../../common/Border';
import Background from '../../common/Background';
import MainLogo from '../../common/MainLogo';
import Navigation from '../../common/Navigation';
import ThreeSphere from './components/ThreeSphere';
import MainText from './components/MainText';

import withTransition from '../../common/WithTransition';

class Home extends PureComponent {
  animateIn() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
    }).finished;
  }

  animateOut() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      translateX: -100,
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
    }).finished;
  }

  render() {
    return (
      <div id="main-page" ref={(e) => (this.el = e)}>
        <Background />
        <div className="fixed">
          <Border
            scroll={false}
          />
          <Navigation />
          <ThreeSphere />
          <MainLogo />
          <MainText />
        </div>
      </div>
    );
  }
}

export default withTransition(Home);
