import React, { PureComponent } from 'react';
import anime from 'animejs';
import PropTypes from 'prop-types';

import LineBreak from '../../web/assets/line-break.png';
import WorkBackground from '../../web/assets/background/bg-work.png';

import AlbertaMESPanel from '../../web/assets/panel/panel-albertames.png';
import CrudeMonitorPanel from '../../web/assets/panel/panel-crudemonitor.png';
import QuestionmarkPanel from '../../web/assets/panel/panel-questionmark.png';
import ATBFinancialPanel from '../../web/assets/panel/panel-atbfinancial.png';

import withTransition from '../../common/WithTransition';
import WorkTemplate from './common/WorkTemplate';
import SmoothScroll from '../../common/SmoothScroll';
import BackgroundImage from '../../common/BackgroundImage';
import FixedScroll from '../../common/FixedScroll';

class WorkList extends PureComponent {
  constructor(props) {
    super(props);
    this.countImagesLoaded = this.countImagesLoaded.bind(this);
    this.imageCount = 5;
    this.imagesLoaded = 0;
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
    this.props.showLoader();
    return anime({
      targets: this.el,
      translateY: -100,
      opacity: 0,
      duration: 1000,
      easing: 'easeOutExpo',
    }).finished;
  }

  countImagesLoaded() {
    this.imagesLoaded++;
    if (this.imagesLoaded >= this.imageCount) {
      this.props.hideLoader();
    }
  }

  render() {
    return (
      <SmoothScroll>
        <div id="scroll-page" ref={(e) => { this.el = e; }}>
          <div id="fixed-wrapper" className="fixed-wrapper">
            <div className="main-container">
              <div id="scrollContainer" className="flex-container container ">
                <div className="hide-under col-md-12 left-top">
                  <BackgroundImage
                    src={WorkBackground}
                    alt="Background"
                    afterLoad={this.countImagesLoaded}
                  />
                  <FixedScroll
                    text="Let&rsquo;s continue →"
                  />
                  <div className="spacer-sm" />
                  <div className="center-sm">
                    <h2 className="scroll-title">Work</h2>
                    <div className="col-md-12">
                      <img className="line-break" src={LineBreak} alt="Line break" />
                    </div>
                  </div>
                  <div className="spacer-xs" />
                  <br />

                  <div className="col-md-12">
                    <WorkTemplate
                      title="ATB Financial"
                      description="ATB Financial is a financial institution
                      and Crown corporation owned by the Province of Alberta. I
                      was brought on to support the Team Member Tools initiative,
                      which is a system of tools designed to help our front line
                      team members excel at their work."
                      panel={ATBFinancialPanel}
                      link="/atbfinancial"
                      lineBreak
                      animated={false}
                      afterLoad={this.countImagesLoaded}
                    />
                    <WorkTemplate
                      title="Questionmark"
                      description="Questionmark creates assessment technologies.
                        These are tools that primarily deal with building technologies
                        that involve assessments through their lifecycle - from
                        creation to assessing to results. I was signed on to build a
                        key component of their technology - their Learning Tools
                        Interoperability tool - as well as aid in developing their
                        main software in Drupal."
                      panel={QuestionmarkPanel}
                      link="/questionmark"
                      lineBreak
                      afterLoad={this.countImagesLoaded}
                    />
                    <WorkTemplate
                      title="CQI"
                      description="CQI is a Canadian-based company which specialises in monitoring
                        the quality of North American crude oil. They had tasked me
                        with upgrading their primary application, Crude Monitor,
                        to fit the needs and demands of today&rsquo;s generation."
                      panel={CrudeMonitorPanel}
                      link="/crudemonitor"
                      lineBreak
                      afterLoad={this.countImagesLoaded}
                    />
                    <WorkTemplate
                      title="Environment &amp; Parks"
                      description="AlbertaMES is a heuristics-based web application to filter
                        and isolate projects, models and stations associated with
                        Alberta Environment and Parks. I was signed on as the
                        primary developer of the application, which was developed
                        over the course of 8 months."
                      panel={AlbertaMESPanel}
                      link="/albertames"
                      lineBreak
                      afterLoad={this.countImagesLoaded}
                    />
                  </div>
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

WorkList.propTypes = {
  showLoader: PropTypes.func.isRequired,
  hideLoader: PropTypes.func.isRequired,
}

export default withTransition(WorkList);
