import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import anime from 'animejs';

import withTransition from '../../common/WithTransition';

import AnsonBackground from '../../web/assets/background/bg-anson.png';
import LineBreak from '../../web/assets/line-break.png';
import GithubIcon from '../../web/assets/icon/ico-github.png';
import HoverGithubIcon from '../../web/assets/icon/ico-github-hover.png';
import LinkedInIcon from '../../web/assets/icon/ico-linkedin.png';
import HoverLinkedInIcon from '../../web/assets/icon/ico-linkedin-hover.png';

class Contact extends PureComponent {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
    }).init();
  }

  animateIn() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutExpo',
    }).finished;
  }

  animateOut() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      translateY: -100,
      opacity: 0.5,
      duration: 500,
      easing: 'easeOutExpo',
    }).finished;
  }

  render() {
    return (
      <div id="scroll-page" ref={(e) => { this.el = e; }}>
        <div id="fixed-wrapper" className="fixed-wrapper">
          <div className="main-container">
            <div id="scrollContainer" className="flex-container container ">
              <div className="hide-under col-md-12 left-top">
                <img className="bg-img" src={AnsonBackground} alt="Background with a portrait of Anson" />
                <div className="spacer-sm" />
                <div className="center-sm">
                  <h2 className="scroll-title">Contact</h2>
                  <div className="col-md-12">
                    <img className="line-break" src={LineBreak} alt="Line break" />
                  </div>
                </div>
                <div className="spacer-xs" />
                <br />
                <div className="col-md-12">
                  <div className="col-md-6 wow fadeIn">
                    <p>
                      Hi, I&rsquo;m
                      {' '}
                      <span className="b"> Anson Li</span>
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
                      <div className="crossfade wow fadeIn item-one" data-wow-duration="2s">
                        <a className="img-icon" href="http://github.com/anson-li">
                          <img className="bottom" src={HoverGithubIcon} alt="Anson's Github, hightlighted" />
                          <img className="top" src={GithubIcon} alt="Anson's Github" />
                        </a>
                      </div>
                      <div className="crossfade wow fadeIn item-two" data-wow-duration="3s">
                        <a className="img-icon" href="https://www.linkedin.com/in/anson-ii">
                          <img className="bottom" src={HoverLinkedInIcon} alt="Anson's LinkedIn, highlighted" />
                          <img className="top" src={LinkedInIcon} alt="Anson's LinkedIn" />
                        </a>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-container container">
              <br />
              <br />
              <div className="spacer-sm" />
              <div className="spacer-sm" />
              <div className="spacer-sm" />
              <div className="col-md-12 fixed-bottom" />
            </div>
          </div>
        </div>
        <div id="bottom" />
      </div>
    );
  }
}

export default withTransition(Contact);
