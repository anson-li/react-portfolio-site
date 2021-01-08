import React, { PureComponent } from 'react';
import WOW from 'wowjs';

import Loader from '../../common/Loader';
import Navigation from '../../common/Navigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import WorkBackground from '../../web/assets/background/bg-work.png';

import AlbertaMESPanel from '../../web/assets/panel/panel-albertames.png';
import CrudeMonitorPanel from '../../web/assets/panel/panel-crudemonitor.png';
import DailyUIPanel from '../../web/assets/panel/panel-dailyui.png';
import QuestionmarkPanel from '../../web/assets/panel/panel-questionmark.png';
import SSCTEPanel from '../../web/assets/panel/panel-sscte.png';
import TeamAquaPanel from '../../web/assets/panel/panel-teamaqua.png';

class WorkList extends PureComponent {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
    }).init();
  }

  render() {
    return (
      <div id="scroll-page">
        <Loader />
        <div id="fixed-wrapper" className="fixed-wrapper">
          <div className="fixed-header">
            <Border />
            <Navigation scroll />
            <MainLogo />
          </div>
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

                  <div className="wow fadeIn">
                    <h3>Questionmark</h3>
                    <br />

                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <p>
                          Questionmark creates assessment technologies. These are tools that primarily deal with building technologies that involve assessments through their lifecycle - from creation to assessing to results. I was signed on to build a key component of their technology - their Learning Tools Interoperability tool - as well as aid in developing their main software in Drupal.
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <img className="img-panel" src={QuestionmarkPanel} alt="Questionmark Panel" />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <div className="spacer-xs" />
                        <p>
                          <a href="/workexp/questionmark" className="btn">View case study</a>
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <div className="col-md-12 no-padding">
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                      <div className="center-sm paddingtop-0">
                        <img className="line-break" src={LineBreak} alt="Line break" />
                      </div>
                      <div className="spacer-xs" />
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                    </div>
                  </div>

                  <div className="wow fadeIn">
                    <h3>Crude Monitor</h3>
                    <br />

                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <p>
                          CQI is a Canadian-based company which specialises in monitoring the quality of North American crude oil. They had tasked me with upgrading their primary application, Crude Monitor, to fit the needs and demands of today's generation.
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <img className="img-panel" src={CrudeMonitorPanel} alt="Crude Monitor Panel" />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <div className="spacer-xs" />
                        <p>
                          <a href="/workexp/crudemonitor" className="btn">View case study</a>
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <div className="col-md-12 no-padding">
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                      <div className="center-sm paddingtop-0">
                        <img className="line-break" src={LineBreak} alt="Line break" />
                      </div>
                      <div className="spacer-xs" />
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                    </div>
                  </div>

                  <div className="wow fadeIn">
                    <h3>AlbertaMES</h3>
                    <br />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <p>
                          AlbertaMES is a heuristics-based web application to filter and isolate projects, models and stations associated with Alberta Environment and Parks. I was signed on as the primary developer of the application, which was developed over the course of 8 months.
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <img className="img-panel" src={AlbertaMESPanel} alt="AlbertaMES Panel" />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <div className="spacer-xs" />
                        <p>
                          <a href="/workexp/albertames" className="btn">View case study</a>
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <div className="col-md-12 no-padding">
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                      <div className="center-sm paddingtop-0">
                        <img className="line-break" src={LineBreak} alt="Line break" />
                      </div>
                      <div className="spacer-xs" />
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                    </div>
                  </div>

                  <div className="wow fadeIn">
                    <h3>#DailyUI</h3>
                    <br />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <p>
                          DailyUI is, as the name suggests, a daily exploration into UX and UI. For 100 days, UI and UX elements were designed and created for the creative community.
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <img className="img-panel" src={DailyUIPanel} alt="DailyUI Panel" />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <div className="spacer-xs" />
                        <p>
                          <a href="/workexp/dailyui" className="btn">View case study</a>
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <div className="col-md-12 no-padding">
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                      <div className="center-sm paddingtop-0">
                        <img className="line-break" src={LineBreak} alt="Line break" />
                      </div>
                      <div className="spacer-xs" />
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                    </div>
                  </div>

                  <div className="wow fadeIn">
                    <h3>SSCTE</h3>
                    <br />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <p>
                          SSCTE is an android application that's designed for collecting and trading cards. It primarily served as an exploration of common UX and UI design behavior for Android technologies.
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <img className="img-panel" src={SSCTEPanel} alt="SSCTE Panel" />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <div className="spacer-xs" />
                        <p>
                          <a href="/workexp/sscte" className="btn">View case study</a>
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <div className="col-md-12 no-padding">
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                      <div className="center-sm paddingtop-0">
                        <img className="line-break" src={LineBreak} alt="Line break" />
                      </div>
                      <div className="spacer-xs" />
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                    </div>
                  </div>

                  <div className="wow fadeIn">
                    <h3>Team Aqua</h3>
                    <br />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <p>
                          Team Aqua is a development firm, created with the purpose of exploring Ruby development and design. Projects developed under this team include monitoring systems, libraries, and UI.
                        </p>
                        <div className="spacer-xs" />
                        <br />
                      </div>
                    </div>
                    <img className="img-panel" src={TeamAquaPanel} alt="Team Aqua Panel" />
                    <div className="col-md-12 no-padding">
                      <div className="col-md-6 no-padding">
                        <div className="spacer-xs" />
                        <p>
                          <a href="/workexp/teamaqua" className="btn">View case study</a>
                        </p>
                        <div className="spacer-xs" />
                      </div>
                    </div>
                    <div className="col-md-12 no-padding">
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                      <div className="spacer-xs" />
                      <div className="visible-xs">
                        <div className="spacer-xs" />
                      </div>
                    </div>
                  </div>

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
    );
  }
}

export default WorkList;
