import React, { PureComponent } from 'react';
import WOW from 'wowjs';

import Loader from '../../common/Loader';
import MobileNavigation from '../../common/MobileNavigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import WorkBackground from '../../web/assets/bg-work.png';

import AlbertaMESPanel from '../../web/assets/panel-albertames.png';
import CrudeMonitorPanel from '../../web/assets/panel-crudemonitor.png';
import DailyUIPanel from '../../web/assets/panel-dailyui.png';
import QuestionmarkPanel from '../../web/assets/panel-questionmark.png';
import SSCTEPanel from '../../web/assets/panel-sscte.png';
import TeamAquaPanel from '../../web/assets/panel-teamaqua.png';

class Work extends PureComponent {
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
                <img class="bg-img" src={WorkBackground} alt="Background"/>
                <div class="horizontal hidden-xs visible-lg"><p>hello@ansonli.ca</p></div>
                <div class="spacer-sm"></div>
                <div class="center-sm">
                  <h2 class="scroll-title">Projects</h2>
                  <div class="col-md-12">
                    <img class="line-break" src={LineBreak} alt="Line break"/>
                  </div>
                </div>
                <div class="spacer-xs"></div>
                <br />

                <div class="col-md-12">

                <div class="wow fadeIn">
                  <h3>Questionmark</h3>
                  <br />

                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <p>
                        Questionmark creates assessment technologies. These are tools that primarily deal with building technologies that involve assessments through their lifecycle - from creation to assessing to results. I was signed on to build a key component of their technology - their Learning Tools Interoperability tool - as well as aid in developing their main software in Drupal.
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <img class="img-panel" src={QuestionmarkPanel} alt="Questionmark Panel"/>
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <div class="spacer-xs"></div>
                      <p>
                        <a href="/questionmark" class="btn">View case study</a>
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <div class="col-md-12 no-padding">
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                    <div class="center-sm paddingtop-0">
                      <img class="line-break" src={LineBreak} alt="Line break"/>
                    </div>
                    <div class="spacer-xs"></div>
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                </div>

                <div class="wow fadeIn">
                  <h3>Crude Monitor</h3>
                  <br />

                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <p>
                        CQI is a Canadian-based company which specialises in monitoring the quality of North American crude oil. They had tasked me with upgrading their primary application, Crude Monitor, to fit the needs and demands of today's generation.
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <img class="img-panel" src={CrudeMonitorPanel} alt="Crude Monitor Panel"/>
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <div class="spacer-xs"></div>
                      <p>
                        <a href="/crudemonitor" class="btn">View case study</a>
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <div class="col-md-12 no-padding">
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                    <div class="center-sm paddingtop-0">
                      <img class="line-break" src={LineBreak} alt="Line break"/>
                    </div>
                    <div class="spacer-xs"></div>
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                </div>

                <div class="wow fadeIn">
                  <h3>AlbertaMES</h3>
                  <br />
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <p>
                        AlbertaMES is a heuristics-based web application to filter and isolate projects, models and stations associated with Alberta Environment and Parks. I was signed on as the primary developer of the application, which was developed over the course of 8 months.
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <img class="img-panel" src={AlbertaMESPanel} alt="AlbertaMES Panel"/>
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <div class="spacer-xs"></div>
                      <p>
                        <a href="/albertames" class="btn">View case study</a>
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <div class="col-md-12 no-padding">
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                    <div class="center-sm paddingtop-0">
                      <img class="line-break" src={LineBreak} alt="Line break"/>
                    </div>
                    <div class="spacer-xs"></div>
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                </div>

                <div class="wow fadeIn">
                  <h3>#DailyUI</h3>
                  <br />
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <p>
                        DailyUI is, as the name suggests, a daily exploration into UX and UI. For 100 days, UI and UX elements were designed and created for the creative community. 
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <img class="img-panel" src={DailyUIPanel} alt="DailyUI Panel"/>
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <div class="spacer-xs"></div>
                      <p>
                        <a href="/dailyui" class="btn">View case study</a>
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <div class="col-md-12 no-padding">
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                    <div class="center-sm paddingtop-0">
                      <img class="line-break" src={LineBreak} alt="Line break"/>
                    </div>
                    <div class="spacer-xs"></div>
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                </div>

                <div class="wow fadeIn">
                  <h3>SSCTE</h3>
                  <br />
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <p>
                        SSCTE is an android application that's designed for collecting and trading cards. It primarily served as an exploration of common UX and UI design behavior for Android technologies.
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <img class="img-panel" src={SSCTEPanel} alt="SSCTE Panel"/>
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <div class="spacer-xs"></div>
                      <p>
                        <a href="/sscte" class="btn">View case study</a>
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <div class="col-md-12 no-padding">
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                    <div class="center-sm paddingtop-0">
                      <img class="line-break" src={LineBreak} alt="Line break"/>
                    </div>
                    <div class="spacer-xs"></div>
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                </div>

                <div class="wow fadeIn">
                  <h3>Team Aqua</h3>
                  <br />
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <p>
                        Team Aqua is a development firm, created with the purpose of exploring Ruby development and design. Projects developed under this team include monitoring systems, libraries, and UI. 
                      </p>
                      <div class="spacer-xs"></div><br />
                    </div>
                  </div>
                  <img class="img-panel" src={TeamAquaPanel} alt="Team Aqua Panel"/>
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6 no-padding">
                      <div class="spacer-xs"></div>
                      <p>
                        <a href="/teamaqua" class="btn">View case study</a>
                      </p>
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <div class="col-md-12 no-padding">
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                    <div class="spacer-xs"></div>
                    <div class="visible-xs">
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="spacer-sm"></div>
            <div class="flex-container container">
              <br /><br />
              <div class="col-md-12 fixed-bottom">
              </div>
            </div>
          </div>
          <div id="bottom"></div>
        </div>
      </div>
    </div> 
    )
  }
}

export default Work;
