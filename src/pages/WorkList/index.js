import React, {
  PureComponent,
} from 'react';
import anime from 'animejs';
import PropTypes from 'prop-types';

import LineBreak from '../../web/assets/line-break.png';
import WorkBackground from '../../web/assets/background/bg-work.png';

import AlbertaMESPanel from '../../web/assets/panel/panel-albertames.png';
import CrudeMonitorPanel from '../../web/assets/panel/panel-crudemonitor.png';
import QuestionmarkPanel from '../../web/assets/panel/panel-questionmark.png';
import ATBFinancialPanel from '../../web/assets/panel/panel-atbfinancial.png';

import WithTransition from '../../common/WithTransition';
import WorkTemplate from './common/WorkTemplate';
import SmoothScroll from '../../common/SmoothScroll';
import BackgroundImage from '../../common/BackgroundImage';
import FixedScroll from '../../common/FixedScroll';

class WorkList extends PureComponent {
  constructor (props) {
    super(props);
    this.countImagesLoaded = this.countImagesLoaded.bind(this);
    this.imageCount = 5;
    this.imagesLoaded = 0;
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
                    afterLoad={this.countImagesLoaded}
                    alt='Background'
                    src={WorkBackground}
                  />
                  <FixedScroll
                    text='Let&rsquo;s continue →'
                  />
                  <div className='spacer-sm' />
                  <div className='center-sm'>
                    <h2 className='scroll-title'>Work</h2>
                    <div className='col-md-12'>
                      <img alt='Line break' className='line-break' src={LineBreak} />
                    </div>
                  </div>
                  <div className='spacer-xs' />
                  <br />

                  <div className='col-md-12'>
                    <WorkTemplate
                      afterLoad={this.countImagesLoaded}
                      animated={false}
                      description='ATB Financial is a financial institution
                      and Crown corporation owned by the Province of Alberta. I
                      was brought on to support the Team Member Tools initiative,
                      which is a system of tools designed to help our front line
                      team members excel at their work.'
                      lineBreak
                      link='/atbfinancial'
                      panel={ATBFinancialPanel}
                      title='ATB Financial'
                    />
                    <WorkTemplate
                      afterLoad={this.countImagesLoaded}
                      description='Questionmark creates assessment technologies.
                        These are tools that primarily deal with building technologies
                        that involve assessments through their lifecycle - from
                        creation to assessing to results. I was signed on to build a
                        key component of their technology - their Learning Tools
                        Interoperability tool - as well as aid in developing their
                        main software in Drupal.'
                      lineBreak
                      link='/questionmark'
                      panel={QuestionmarkPanel}
                      title='Questionmark'
                    />
                    <WorkTemplate
                      afterLoad={this.countImagesLoaded}
                      description='CQI is a Canadian-based company which specialises in monitoring
                        the quality of North American crude oil. They had tasked me
                        with upgrading their primary application, Crude Monitor,
                        to fit the needs and demands of today&rsquo;s generation.'
                      lineBreak
                      link='/crudemonitor'
                      panel={CrudeMonitorPanel}
                      title='CQI'
                    />
                    <WorkTemplate
                      afterLoad={this.countImagesLoaded}
                      description='AlbertaMES is a heuristics-based web application to filter
                        and isolate projects, models and stations associated with
                        Alberta Environment and Parks. I was signed on as the
                        primary developer of the application, which was developed
                        over the course of 8 months.'
                      lineBreak
                      link='/albertames'
                      panel={AlbertaMESPanel}
                      title='Environment &amp; Parks'
                    />
                  </div>
                </div>
                <div className='spacer-sm' />
                <div className='flex-container container'>
                  <br />
                  <br />
                  <div className='col-md-12 fixed-bottom' />
                </div>
              </div>
              <div id='bottom' />
            </div>
          </div>
        </div>
      </SmoothScroll>
    );
  }
}

WorkList.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
};

export default WithTransition(WorkList);
