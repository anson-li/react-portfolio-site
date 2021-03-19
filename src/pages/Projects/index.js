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
import AWEBackground from '../../web/assets/projects/jellicent.jpg';
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
    this.imageCount = 7;
    this.imagesLoaded = 0;

    this.awe = React.createRef();
    this.flight = React.createRef();
    this.unleashed = React.createRef();
    this.lti = React.createRef();
    this.dailyui = React.createRef();
    this.teamaqua = React.createRef();
    this.sscte = React.createRef();

    this.projects = [
      {
        image: AWEBackground,
        title: 'Web Experiments',
        description: 'three.js / react / exploration in web & 3D space',
        internalLink: undefined,
        externalLink: 'https://awe.anson.li',
        date: 'January 2020',
        ref: this.awe,
      },
      {
        image: FlightBackground,
        title: 'Flight to Financial Freedom',
        description: 'three.js / flask / building a better financial future',
        internalLink: undefined,
        externalLink: 'https://github.com/anson-li/flight-to-financial-freedom',
        date: 'November 2019',
        ref: this.flight,
      },
      {
        image: UnleashedBackground,
        title: 'Google Bot app template',
        description: 'flask / google api / chat support tool',
        internalLink: undefined,
        externalLink: 'https://github.com/anson-li/google-bot-flask-template',
        date: 'June 2019',
        ref: this.unleashed,
      },
      {
        image: LTIBackground,
        title: 'LTI',
        description: 'php / learning platform integration',
        internalLink: undefined,
        externalLink: 'https://github.com/questionmark/qm-lti',
        date: 'July 2018',
        ref: this.lti,
      },
      {
        image: DailyUIBackground,
        title: '#DailyUI',
        description: 'sketch / photoshop / design every day',
        internalLink: undefined,
        externalLink: 'http://twitter.com/helloanson',
        date: 'Late 2016',
        ref: this.dailyui,
      },
      {
        image: TeamAquaBackground,
        title: 'Team Aqua',
        description: 'ruby library for matrix calculations',
        internalLink: undefined,
        externalLink: 'https://github.com/Team-Aqua',
        date: 'Early 2016',
        ref: this.teamaqua,
      },
      {
        image: SSCTEBackground,
        title: 'SSCTE',
        description: 'android / ux / card trading application',
        internalLink: undefined,
        externalLink: 'https://github.com/CMPUT301F15T07/TradingApp',
        date: 'Late 2015',
        ref: this.sscte,
      },
    ];
  }

  componentDidMount() {
    [
      DefaultBackground, FlightBackground, AWEBackground,
      LTIBackground, UnleashedBackground, SSCTEBackground,
      DailyUIBackground, TeamAquaBackground,
    ].forEach((picture) => {
      const img = new Image();
      img.src = picture.fileName;
      this.countImagesLoaded();
    });
    // Sets a default image
    this.prevRef = this.sscte.current;
    TweenLite.to(this.prevRef, 1, {
      opacity: 1,
    });
  }

  showDescription(description, background, ref) {
    TweenLite.to(this.description, 0, {
      text: description,
    });
    TweenLite.to(ref.current, 1, {
      // zIndex: 1,
      opacity: 1,
    });
    if (this.prevRef && this.prevRef != ref.current) {
      TweenLite.to(this.prevRef, 1, {
        // zIndex: 0,
        opacity: 0,
      });
      this.prevRef = ref.current;
    }
  }

  hideDescription() {
    // TweenLite.to(this.description, 0, {
    //   text: 'Web Projects',
    // });
  }

  hidePage() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      opacity: 0,
      duration: 0,
    }).finished;
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
    const renderImages = this.projects.map((project) =>
      <img
        className="box-image-background"
        src={project.image}
        alt="Project background"
        ref={project.ref}
      />
    );
    const renderProjects = this.projects.map((project) =>
      <BannerLink
        title={project.title}
        description={project.description}
        date={project.date}
        internalLink={project.internalLink}
        externalLink={project.externalLink}
        showDescription={this.showDescription}
        hideDescription={this.hideDescription}
        background={project.image}
        imageref={project.ref}
      />
    );
    return (
      <SmoothScroll>
        <div id="scroll-page" ref={(e) => { this.el = e; }}>
          <div id="fixed-wrapper" className="fixed-wrapper">
            <div className="main-container">
              <div id="scrollContainer" className="flex-container container ">
                <div className="hide-under col-md-12 project-top">
                  <div className="row">
                    <div className="col-lg-12 d-xl-none" style={{ padding: '20%' }} />
                    <div className="col-xl-6 col-lg-12 d-none d-xl-block">
                      <h3 className="description" ref={(e) => { this.description = e; }}>Web Projects</h3>
                      <div id="box-image">
                        { renderImages }
                      </div>
                      <div className="spacer-sm	d-xl-none" />
                    </div>
                    <div className="col-xl-6 col-lg-12">
                      { renderProjects }
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
