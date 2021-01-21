import React, { PureComponent } from 'react';
import anime from 'animejs';

import LineBreak from '../../web/assets/line-break.png';
import WorkBackground from '../../web/assets/background/bg-project.png';
import withTransition from '../../common/WithTransition';

import ProjectTemplate from './common/ProjectTemplate';
import SmoothScroll from '../../common/SmoothScroll';

class Projects extends PureComponent {
  constructor(props) {
    super(props);
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
      opacity: 0,
      duration: 0,
      easing: 'easeOutExpo',
    }).finished;
  }

  render() {
    return (
      <SmoothScroll>
        <div id="scroll-page" ref={(e) => { this.el = e; }}>
          <div id="fixed-wrapper" className="fixed-wrapper">
            <div className="main-container">
              <div id="scrollContainer" className="flex-container container ">
                <div className="hide-under col-md-12 left-top">
                  <img className="bg-img" src={WorkBackground} alt="Background" />
                  <div className="spacer-sm" />
                  <div className="center-sm">
                    <h2 className="scroll-title">Projects</h2>
                    <div className="col-md-12">
                      <img className="line-break" src={LineBreak} alt="Line break" />
                    </div>
                  </div>
                  <div className="spacer-xs" />
                  <br />
                  <ProjectTemplate
                    title="Jellicent"
                    description="Testing three.js basic React templating with
                      passthroughs, scene design and camera manipulation."
                    internalLink="/jellicent"
                    lineBreak
                    {...this.props}
                  />
                  <ProjectTemplate
                    title="LTI"
                    description="Learning Interoperability Tool developed for Questionmark systems."
                    externalLink="https://github.com/questionmark/qm-lti"
                    {...this.props}
                  />
                </div>
                <div className="spacer-sm" />
                <div className="flex-container container">
                  <br />
                  <br />
                  <div className="col-md-12 fixed-bottom" />
                </div>
              </div>
              <div id="bottom" />
            </div>
          </div>
        </div>
      </SmoothScroll>
    );
  }
}

export default withTransition(Projects);
