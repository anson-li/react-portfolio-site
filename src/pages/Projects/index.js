import React, { PureComponent } from 'react';
import anime from 'animejs';
import { TweenLite, gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import PropTypes from 'prop-types';

import withTransition from '../../common/WithTransition';

import BannerLink from './common/BannerLink';
import SmoothScroll from '../../common/SmoothScroll';
import './style.scss';

import DefaultBackground from '../../web/assets/projects/default.jpg';
import FlightBackground from '../../web/assets/projects/flight.jpg';
import JellicentBackground from '../../web/assets/projects/jellicent.jpg';
import LTIBackground from '../../web/assets/projects/lti.jpg';
import UnleashedBackground from '../../web/assets/projects/unleashedbot.jpg';
import SSCTEBackground from '../../web/assets/projects/sscte.jpg';
import DailyUIBackground from '../../web/assets/projects/dailyui.jpg';
import TeamAquaBackground from '../../web/assets/projects/teamaqua.jpg';

gsap.registerPlugin(TextPlugin);

class Projects extends PureComponent {
  constructor(props) {
    super(props);
    this.showDescription = this.showDescription.bind(this);
    this.hideDescription = this.hideDescription.bind(this);
    this.countImagesLoaded = this.countImagesLoaded.bind(this);
    this.imageCount = 8;
    this.imagesLoaded = 0;
  }

  componentDidMount() {
    [
      DefaultBackground, FlightBackground, JellicentBackground,
      LTIBackground, UnleashedBackground, SSCTEBackground,
      DailyUIBackground, TeamAquaBackground,
    ].forEach((picture) => {
      const img = new Image();
      img.src = picture.fileName;
      this.countImagesLoaded();
    });
  }

  showDescription(description, background) {
    TweenLite.to(this.description, 0, {
      text: description,
    });
    TweenLite.to(this.background, 0, {
      attr: {
        src: background,
      },
    });
  }

  hideDescription() {
    // TweenLite.to(this.description, 0, {
    //   text: 'Web Projects',
    // });
  }

  animateIn() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 1000,
      easing: 'easeOutExpo',
    }).finished;
  }

  animateOut() {
    anime.remove(this.el);
    this.imagesLoaded = 0;
    const { showLoader } = this.props;
    showLoader();
    return anime({
      targets: this.el,
      translateY: -100,
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
    }).finished;
  }

  countImagesLoaded() {
    this.imagesLoaded += 1;
    const { hideLoader } = this.props;
    if (this.imagesLoaded >= this.imageCount) {
      hideLoader();
    }
  }

  render() {
    return (
      <SmoothScroll>
        <div id="scroll-page" ref={(e) => { this.el = e; }}>
          <div id="fixed-wrapper" className="fixed-wrapper">
            <div className="main-container">
              <div id="scrollContainer" className="flex-container container ">
                <div className="hide-under col-md-12 project-top">
                  <div className="row">
                    <div className="col-xl-6 col-lg-12">
                      <h3 className="description" ref={(e) => { this.description = e; }}>Web Projects</h3>
                      <div id="box-image">
                        <img
                          className="box-image-background"
                          src={DefaultBackground}
                          alt="Default project background"
                          onLoad={this.countImagesLoaded}
                          ref={(e) => { this.background = e; }}
                        />
                      </div>
                      <div className="spacer-sm	d-xl-none" />
                    </div>
                    <div className="col-xl-6 col-lg-12">
                      <BannerLink
                        title="Jellicent"
                        description="three.js / react / exploration in web design and 3D space"
                        date="January 2020"
                        internalLink="/jellicent"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                        background={JellicentBackground}
                      />
                      <BannerLink
                        title="Flight to Financial Freedom"
                        description="three.js / flask / building a better financial future"
                        externalLink="https://github.com/anson-li/flight-to-financial-freedom"
                        date="November 2019"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                        background={FlightBackground}
                      />
                      <BannerLink
                        title="Google Bot app template"
                        description="flask / google api / support tool developed for ease of use"
                        externalLink="https://github.com/anson-li/google-bot-flask-template"
                        date="June 2019"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                        background={UnleashedBackground}
                      />
                      <BannerLink
                        title="LTI"
                        description="php / web tool made for Questionmark integration"
                        externalLink="https://github.com/questionmark/qm-lti"
                        date="July 2018"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                        background={LTIBackground}
                      />
                      <BannerLink
                        title="#DailyUI"
                        description="sketch / photoshop / design every day"
                        externalLink="http://twitter.com/helloanson"
                        date="Late 2016"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                        background={DailyUIBackground}
                      />
                      <BannerLink
                        title="Team Aqua"
                        description="ruby library development for matrix calculation support"
                        externalLink="https://github.com/Team-Aqua"
                        date="Early 2016"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                        background={TeamAquaBackground}
                      />
                      <BannerLink
                        title="SSCTE"
                        description="android / ux / card trading application"
                        externalLink="https://github.com/CMPUT301F15T07/TradingApp"
                        date="Late 2015"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                        background={SSCTEBackground}
                      />
                    </div>
                  </div>
                </div>
                <div className="filler-bottom" />
                <div className="spacer-sm" />
              </div>
              <div id="bottom" />
            </div>
          </div>
        </div>
      </SmoothScroll>
    );
  }
}

Projects.propTypes = {
  showLoader: PropTypes.func.isRequired,
  hideLoader: PropTypes.func.isRequired,
};

export default withTransition(Projects);
