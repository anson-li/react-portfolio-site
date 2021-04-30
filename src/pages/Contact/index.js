import React, {
  PureComponent,
} from 'react';
import anime from 'animejs';
import PropTypes from 'prop-types';

import WithTransition from '../../common/WithTransition';

import AnsonBackground from '../../web/assets/background/bg-anson.png';
import LineBreak from '../../web/assets/line-break.png';
import GithubIcon from '../../web/assets/icon/ico-github.png';
import HoverGithubIcon from '../../web/assets/icon/ico-github-hover.png';
import LinkedInIcon from '../../web/assets/icon/ico-linkedin.png';
import HoverLinkedInIcon from '../../web/assets/icon/ico-linkedin-hover.png';
import SmoothScroll from '../../common/SmoothScroll';
import BackgroundImage from '../../common/BackgroundImage';

class Contact extends PureComponent {
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
      translateY: [-100, 0],
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
      translateY: -100,
    }).finished;
  }

  render () {
    const {hideLoader} = this.props;

    return (
      <SmoothScroll>
        <div
          id='scroll-page' ref={(element) => {
            this.el = element;
          }}>
          <div className='fixed-wrapper' id='fixed-wrapper'>
            <div className='main-container'>
              <div className='flex-container container ' id='scrollContainer'>
                <div className='hide-under col-md-12 left-top'>
                  <BackgroundImage
                    afterLoad={hideLoader}
                    alt='Background with Anson'
                    src={AnsonBackground}
                  />
                  <div className='spacer-sm' />
                  <div className='center-sm'>
                    <h2 className='scroll-title'>Contact</h2>
                    <div className='col-md-12'>
                      <img alt='Line break' className='line-break' src={LineBreak} />
                    </div>
                  </div>
                  <div className='spacer-xs' />
                  <br />
                  <div className='col-md-12'>
                    <div className='col-md-6'>
                      <p>
                        Hi, I&rsquo;m
                        {' '}
                        <span className='b'> Anson Li</span>
                        . I&rsquo;m currently out and about, working as a software developer
                        at ATB. When I&rsquo;m not busy learning the ins and outs of React
                        and NodeJS development, I dedicate my learning to full-stack
                        development, scripting languages, and coffee culture.
                        <br />
                        <br />
                        Feel free to shoot me a message about my works,
                        my experiences, or anything else that you&rsquo;d
                        like to know -- I&rsquo;m ready.
                        <br />
                        <br />
                        <div className='crossfade item-one' data-wow-duration='2s'>
                          <a className='img-icon' href='http://github.com/anson-li'>
                            <img alt="Anson's Github, hightlighted" className='bottom' src={HoverGithubIcon} />
                            <img alt="Anson's Github" className='top' src={GithubIcon} />
                          </a>
                        </div>
                        <div className='crossfade item-two' data-wow-duration='3s'>
                          <a className='img-icon' href='https://www.linkedin.com/in/anson-ii'>
                            <img alt="Anson's LinkedIn, highlighted" className='bottom' src={HoverLinkedInIcon} />
                            <img alt="Anson's LinkedIn" className='top' src={LinkedInIcon} />
                          </a>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-container container'>
                <br />
                <br />
                <div className='spacer-sm' />
                <div className='spacer-sm' />
                <div className='spacer-sm' />
                <div className='col-md-12 fixed-bottom' />
              </div>
            </div>
          </div>
          <div id='bottom' />
        </div>
      </SmoothScroll>
    );
  }
}

Contact.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
};

export default WithTransition(Contact);
