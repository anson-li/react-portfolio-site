import React, { PureComponent } from 'react';
import anime from 'animejs';

import LineBreak from '../../web/assets/line-break.png';
import WorkBackground from '../../web/assets/background/bg-work.png';

import AlbertaMESPanel from '../../web/assets/panel/panel-albertames.png';
import CrudeMonitorPanel from '../../web/assets/panel/panel-crudemonitor.png';
import DailyUIPanel from '../../web/assets/panel/panel-dailyui.png';
import QuestionmarkPanel from '../../web/assets/panel/panel-questionmark.png';
import SSCTEPanel from '../../web/assets/panel/panel-sscte.png';
import TeamAquaPanel from '../../web/assets/panel/panel-teamaqua.png';

import withTransition from '../../common/WithTransition';
import WorkTemplate from './common/WorkTemplate';
import SmoothScroll from '../../common/SmoothScroll';

class WorkList extends PureComponent {
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
                  <div className="horizontal d-none d-sm-block"><p>hello@ansonli.ca</p></div>
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
                      animated={false}
                      {...this.props}
                    />
                    <WorkTemplate
                      title="Crude Monitor"
                      description="CQI is a Canadian-based company which specialises in monitoring
                        the quality of North American crude oil. They had tasked me
                        with upgrading their primary application, Crude Monitor,
                        to fit the needs and demands of today&rsquo;s generation."
                      panel={CrudeMonitorPanel}
                      link="/crudemonitor"
                      lineBreak
                      {...this.props}
                    />
                    <WorkTemplate
                      title="AlbertaMES"
                      description="AlbertaMES is a heuristics-based web application to filter
                        and isolate projects, models and stations associated with
                        Alberta Environment and Parks. I was signed on as the
                        primary developer of the application, which was developed
                        over the course of 8 months."
                      panel={AlbertaMESPanel}
                      link="/albertames"
                      lineBreak
                      {...this.props}
                    />
                    <WorkTemplate
                      title="#DailyUI"
                      description="DailyUI is, as the name suggests, a daily exploration into UX
                        and UI. For 100 days, UI and UX elements were designed and
                        created for the creative community."
                      panel={DailyUIPanel}
                      link="/dailyui"
                      lineBreak
                      {...this.props}
                    />
                    <WorkTemplate
                      title="SSCTE"
                      description="SSCTE is an android application that&rsquo;s designed for collecting and
                        trading cards. It primarily served as an exploration of common UX
                        and UI design behavior for Android technologies."
                      panel={SSCTEPanel}
                      link="/sscte"
                      lineBreak
                      {...this.props}
                    />
                    <WorkTemplate
                      title="Team Aqua"
                      description="Team Aqua is a development firm, created with the
                        purpose of exploring Ruby development and design.
                        Projects developed under this team include monitoring
                        systems, libraries, and UI."
                      panel={TeamAquaPanel}
                      link="/teamaqua"
                      {...this.props}
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

export default withTransition(WorkList);
