import anime from 'animejs';
import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

import Background from '../../common/Background';
import ThreeSphere from './components/ThreeSphere';
import MainText from './components/MainText';

import WithTransition from '../../common/WithTransition';

class Home extends PureComponent {
  hidePage () {
    anime.remove(this.el);

    return anime({
      duration: 0,
      opacity: 0,
      targets: this.el,
    }).finished;
  }

  animateIn () {
    anime.remove(this.el);

    return anime({
      delay: 1000,
      duration: 1000,
      easing: 'easeOutExpo',
      opacity: [0, 1],
      targets: this.el,
    }).finished;
  }

  animateOut () {
    anime.remove(this.el);
    const {showLoader} = this.props;
    showLoader();

    return anime({
      duration: 1000,
      easing: 'easeOutExpo',
      opacity: 0,
      targets: this.el,
    }).finished;
  }

  render () {
    const {hideLoader} = this.props;

    return (
      <div
        id='main-page' ref={(element) => {
          this.el = element;
        }}>
        <Background />
        <div className='fixed'>
          <ThreeSphere
            hideLoader={hideLoader}
          />
          <MainText />
        </div>
        <div id='bottom' />
      </div>
    );
  }
}

Home.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
};

export default WithTransition(Home);
