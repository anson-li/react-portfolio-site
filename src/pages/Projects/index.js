import React, {
  PureComponent,
} from 'react';
import anime from 'animejs';
import {
  TweenLite, gsap,
} from 'gsap';
import {
  TextPlugin,
} from 'gsap/TextPlugin';
import PropTypes from 'prop-types';

import WithTransition from '../../common/WithTransition';

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
  constructor (props) {
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
        date: 'January 2020',
        description: 'three.js / react / exploration in web & 3D space',
        externalLink: 'https://awe.anson.li',
        image: AWEBackground,
        internalLink: undefined,
        ref: this.awe,
        title: 'Web Experiments',
      },
      {
        date: 'November 2019',
        description: 'three.js / flask / building a better financial future',
        externalLink: 'https://github.com/anson-li/flight-to-financial-freedom',
        image: FlightBackground,
        internalLink: undefined,
        ref: this.flight,
        title: 'Flight to Financial Freedom',
      },
      {
        date: 'June 2019',
        description: 'flask / google api / chat support tool',
        externalLink: 'https://github.com/anson-li/google-bot-flask-template',
        image: UnleashedBackground,
        internalLink: undefined,
        ref: this.unleashed,
        title: 'Google Bot app template',
      },
      {
        date: 'July 2018',
        description: 'php / learning platform integration',
        externalLink: 'https://github.com/questionmark/qm-lti',
        image: LTIBackground,
        internalLink: undefined,
        ref: this.lti,
        title: 'LTI',
      },
      {
        date: 'Late 2016',
        description: 'sketch / photoshop / design every day',
        externalLink: 'http://twitter.com/helloanson',
        image: DailyUIBackground,
        internalLink: undefined,
        ref: this.dailyui,
        title: '#DailyUI',
      },
      {
        date: 'Early 2016',
        description: 'ruby library for matrix calculations',
        externalLink: 'https://github.com/Team-Aqua',
        image: TeamAquaBackground,
        internalLink: undefined,
        ref: this.teamaqua,
        title: 'Team Aqua',
      },
      {
        date: 'Late 2015',
        description: 'android / ux / card trading application',
        externalLink: 'https://github.com/CMPUT301F15T07/TradingApp',
        image: SSCTEBackground,
        internalLink: undefined,
        ref: this.sscte,
        title: 'SSCTE',
      },
    ];
  }

  componentDidMount () {
    [
      DefaultBackground,
      FlightBackground,
      AWEBackground,
      LTIBackground,
      UnleashedBackground,
      SSCTEBackground,
      DailyUIBackground,
      TeamAquaBackground,
    ].forEach(() => {
      this.countImagesLoaded();
    });

    // Sets a default image
    this.prevRef = this.sscte.current;
    TweenLite.to(this.prevRef, 1, {
      opacity: 1,
    });
  }

  showDescription (description, background, ref) {
    TweenLite.to(this.description, 0, {
      text: description,
    });
    TweenLite.to(ref.current, 1, {
      // zIndex: 1,
      opacity: 1,
    });
    if (this.prevRef && this.prevRef !== ref.current) {
      TweenLite.to(this.prevRef, 1, {
        // zIndex: 0,
        opacity: 0,
      });
      this.prevRef = ref.current;
    }
  }

  hideDescription () {
    // TweenLite.to(this.description, 0, {
    //   text: 'Web Projects',
    // });
  }

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
    this.imagesLoaded = 0;
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

  countImagesLoaded () {
    this.imagesLoaded += 1;
    const {hideLoader} = this.props;
    if (this.imagesLoaded >= this.imageCount) {
      hideLoader();
    }
  }

  render () {
    const renderImages = this.projects.map((project) => {
      return <img
        alt='Project background'
        className='box-image-background'
        key={project.title}
        ref={project.ref}
        src={project.image}
      />;
    });
    const renderProjects = this.projects.map((project) => {
      return <BannerLink
        background={project.image}
        date={project.date}
        description={project.description}
        externalLink={project.externalLink}
        hideDescription={this.hideDescription}
        imageref={project.ref}
        internalLink={project.internalLink}
        key={project.title}
        showDescription={this.showDescription}
        title={project.title}
      />;
    });

    return (
      <SmoothScroll>
        <div
          id='scroll-page' ref={(element) => {
            this.el = element;
          }}>
          <div className='fixed-wrapper' id='fixed-wrapper'>
            <div className='main-container'>
              <div className='flex-container container ' id='scrollContainer'>
                <div className='hide-under col-md-12 project-top'>
                  <div className='row'>
                    <div className='col-lg-12 d-xl-none' style={{padding: '20%'}} />
                    <div className='col-xl-6 col-lg-12 d-none d-xl-block'>
                      <h3
                        className='description' ref={(element) => {
                          this.description = element;
                        }}>Web Projects</h3>
                      <div id='box-image'>
                        { renderImages }
                      </div>
                      <div className='spacer-sm d-xl-none' />
                    </div>
                    <div className='col-xl-6 col-lg-12'>
                      { renderProjects }
                    </div>
                  </div>
                </div>
                <div className='filler-bottom' />
                <div className='spacer-sm' />
              </div>
              <div id='bottom' />
            </div>
          </div>
        </div>
      </SmoothScroll>
    );
  }
}

Projects.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
};

export default WithTransition(Projects);
