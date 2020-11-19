
import React, { PureComponent } from 'react';
import WOW from 'wowjs';

import Loader from '../../common/Loader';
import MobileNavigation from '../../common/MobileNavigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import BackgroundCrudeMonitor from '../../web/assets/bg-oil.png';

class CrudeMonitor extends PureComponent {
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
                <img class="bg-img" src={BackgroundCrudeMonitor} alt="Background for CrudeMonitor" />
                <div class="horizontal"><p>← Let's continue</p></div>
                <div class="spacer-sm"></div>
                <div class="center-sm">
                  <h2 class="scroll-title">Crude Monitor</h2>
                  <div class="col-md-12">
                    <img class="line-break" src={LineBreak} alt="Line break" />
                  </div>
                </div>
                <div class="spacer-xs"></div>
                <br />

                <div class="col-md-12">
                  <br /><br />
                  <div class="col-md-3 wow fadeIn" data-wow-duration="1s">
                    <p class="center-sm paddingtop-0">
                      <span class="b">ERA ++</span><br /><br />
                      Early 2016
                    </p>
                  </div>
                  <div class="col-md-3 wow fadeIn" data-wow-duration="1.5s">
                    <p class="center-sm paddingtop-0">
                      <br class="visible-xs" />
                      <span class="b">SKILLS ++</span><br /><br />
                        Fullstack Development<br />
                        UI . UX<br />
                        Agile Development
                    </p>
                  </div><div class="col-md-3 wow fadeIn" data-wow-duration="2s">
                    <p class="center-sm paddingtop-0">
                      <br class="visible-xs" />
                      <span class="b">TECHNOLOGY ++</span><br /><br />
                      PHP<br />
                      HTML . CSS . JS<br />
                      d3.js<br />
                      <br class="visible-xs" />
                    </p>
                  </div>
                </div>

                <div class="col-md-12 wow fadeIn">
                  <div class="spacer-xs"></div>
                  <div class="center-sm paddingtop-0">
                    <img class="line-break" src={LineBreak} alt="Line break" />
                  </div>
                </div>

                <div class="col-md-12">
                  <br /><br />
                  <div class="wow fadeIn">
                  <h3 class="center-sm paddingtop-0">The Project</h3>
                  <br /><br />
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6">
                      <p>
                        CQI is a Canadian-based company which specialises in monitoring the quality of North American crude oil. They had tasked me with upgrading their primary application, Crude Monitor, to fit the needs and demands of today's generation.
                        <br /><br />
                        <a href="http://www.crudemonitor.ca" class="btn">Take a peek</a>
                      </p>
                      <br /><br /><br />
                    </div>
                  </div>
                  <div class="center-sm paddingtop-0">
                    <img class="line-break" src={LineBreak} alt="Line break" />
                  </div>
                  <br /><br /><br />
                  </div>
                  <div class="wow fadeIn">
                  <div class="col-md-12 no-padding">
                    <h3 class="center-sm paddingtop-0">Initial Design</h3>
                    <br /><br />
                    <div class="col-md-3">
                      <div class="box blue"><p>#2E3F54</p></div>
                      &nbsp;&nbsp;&nbsp;
                      <div class="box yellow"><p>#FFF8BD</p></div>
                      &nbsp;&nbsp;&nbsp;
                      <div class="box gray"><p>#EEEEEE</p></div>
                    </div>
                    <div class="col-md-6">
                      <div class="spacer-sm hidden-md hidden-lg"></div>
                      <p>
                        The initial design was created in Sketchapp, using an iterative development method that helped streamline communication between design and development.
                        <br /><br />
                        In addition to restructuring the system to better reflect the new design, both frontend and backend technologies were revamped to ensure that the application could be extended in future development.
                        <br /><br />
                        The total process took over two months of development.
                      </p>
                      <br /><br /><br />
                    </div>
                  </div>
                  <div class="center-sm paddingtop-0">
                    <img class="line-break" src={LineBreak} alt="Line break" />
                  </div>           
                  <br /><br /><br />
                  </div>
                  <div class="wow fadeIn">
                  <div class="col-md-12 no-padding">
                  <h3 class="center-sm paddingtop-0">Development</h3>
                    <br /><br />
                    <div class="col-md-12 no-padding">
                      <div class="col-md-6">
                      <p>
                        The design eventually underwent multiple iterations throughout its two-month development phase. Development technologies largely involved PHP and JS development, including use of plugins such as Bootstrap and d3.js. 
                        <br /><br /><br />
                      </p>
                      </div>
                      <div class="col-md-12">
                        <img class="img-panel" src={LineBreak} alt="Line break" />
                        <br /><br /><br /><br /><br />
                      </div>
                    </div>
                  </div>
                  <div class="center-sm paddingtop-0">
                    <img class="line-break" src={LineBreak} alt="Line break" />
                  </div>
                  <br /><br /><br /><br /><br />
                  </div>
                  <div class="wow fadeIn">
                  <p class="serif">Next Work →</p>
                  <h3><a class="bigstrike" href="albertames">AlbertaMES</a></h3>
                  </div>
                  <div class="spacer-sm"></div>
                </div>
              </div>
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

export default CrudeMonitor;