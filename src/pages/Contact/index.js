import React, { PureComponent } from 'react';
import WOW from 'wowjs';

import Loader from '../../common/Loader';
import MobileNavigation from '../../common/MobileNavigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import AnsonBackground from '../../web/assets/bg-anson.png';
import LineBreak from '../../web/assets/line-break.png';
import GithubIcon from '../../web/assets/ico-github.png';
import HoverGithubIcon from '../../web/assets/ico-github-hover.png';
import LinkedInIcon from '../../web/assets/ico-linkedin.png';
import HoverLinkedInIcon from '../../web/assets/ico-linkedin-hover.png';

class Contact extends PureComponent {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false
    }).init();
  }

  render() {
    return (
      <div id="scroll-page">
        <Loader />
        <div id="fixed-wrapper" className="fixed-wrapper">
          <div className="fixed-header">
            <Border />
            <MobileNavigation />
            <MainLogo />
          </div>
          <div className="main-container">
            <div id="scrollContainer" className="flex-container container ">
              <div className="hide-under col-md-12 left-top">
               <img class="bg-img" src={AnsonBackground} alt="Background with a portrait of Anson" />
                <div class="spacer-sm"></div>
                  <div class="center-sm">
                      <h2 class="scroll-title">Contact</h2>
                      <div class="col-md-12">
                      <img class="line-break" src={LineBreak} alt="Line break" />
                      </div>
                  </div>
                  <div class="spacer-xs"></div>
                  <br />
                  <div class="col-md-12">
                    <div class="col-md-6 wow fadeIn">
                    <p>
                        Hi, I'm <span class="b"> Anson Li</span>. I'm currently out and about, working as a software developer at ATB. When I'm not busy learning the ins and outs of React and NodeJS development, I dedicate my learning to full-stack development, scripting languages, and coffee culture.
                        <br /><br />
                        Feel free to shoot me a message about my works, my experiences, or anything else that you'd like to know -- I'm ready.
                        <br /><br />
                    <div class="crossfade wow fadeIn item-one" data-wow-duration="2s">
                        <a class="img-icon" href="http://github.com/anson-li">
                            <img class="bottom" src={HoverGithubIcon} alt="Anson's Github, hightlighted" />
                            <img class="top" src={GithubIcon} alt="Anson's Github" />
                        </a>
                    </div>
                    <div class="crossfade wow fadeIn item-two" data-wow-duration="3s">
                        <a class="img-icon" href="https://www.linkedin.com/in/anson-ii">
                            <img class="bottom" src={HoverLinkedInIcon} alt="Anson's LinkedIn, highlighted" />
                            <img class="top" src={LinkedInIcon} alt="Anson's LinkedIn" />
                        </a>
                    </div>
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-container container">
                <br /><br />
                <div class="spacer-sm"></div>
                <div class="spacer-sm"></div>
                <div class="spacer-sm"></div>
                <div class="col-md-12 fixed-bottom"></div>
              </div>
            </div>
          </div>
        <div id="bottom"></div>
      </div>
    )
  }
}

export default Contact;
