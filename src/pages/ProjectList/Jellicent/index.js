import React, { PureComponent } from 'react';
import anime from 'animejs';

import Background from '../../../common/Background';
import JellicentObject from './components/JellicentObject';
import withTransition from '../../../common/WithTransition';

class Jellicent extends PureComponent {
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
        <JellicentObject />
        <div id="bottom" />
      </div>
    );
  }
}

export default withTransition(Jellicent);
