
import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';

import Loader from '../../common/Loader';
import MobileNavigation from '../../common/MobileNavigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import BackgroundTeamAqua from '../../web/assets/bg-teamaqua.png';

class TeamAqua extends PureComponent {
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
              <img class="bg-img" src={BackgroundTeamAqua} alt="Background" />
              <div class="horizontal"><p>← Let's continue</p></div>
              <div class="spacer-sm"></div>
              <div class="center-sm">
                  <h2 class="scroll-title">Team Aqua</h2>
                  <div class="col-md-12">
                    <img class="line-break" src={LineBreak} alt="Line break" />
                  </div>
              </div>
              <div class="spacer-xs"></div>
              <br />

              <Container>
                <Row>
                  <Col data-wow-delay="1s">
                  <p class="center-sm paddingtop-0">
                      <span class="b">ERA ++</span><br /><br />
                      Early 2016
                  </p>
                  </Col>
                  <Col data-wow-delay="1s">
                    <p class="center-sm paddingtop-0">
                        <span class="b">SKILLS ++</span><br /><br />
                        Ruby . Rails<br />
                        C++<br />
                        UI . UX
                    </p>
                  </Col>
                  <Col>
                    <p class="center-sm paddingtop-0">
                        <br class="visible-xs" />
                        <span class="b">TECHNOLOGY ++</span><br /><br />
                        Ruby<br />
                        Gosu<br />
                        Sketchapp<br />
                        <br class="visible-xs" />
                    </p>
                  </Col>
                </Row>
              </Container>

              <div class="col-md-12 wow fadeIn">
                  <div class="spacer-xs"></div>
                  <div class="center-sm paddingtop-0">
                  <img class="line-break" src={LineBreak} alt="Line break" />
                  </div>
              </div>

              <div class="col-md-12">
                  <br /><br />
                  <div class="wow fadeIn">
                  <div class="col-md-12 no-padding">
                      <h3 class="center-sm paddingtop-0">The Project</h3>
                      <br /><br />
                      <div class="col-md-6">
                      <p>
                          Team Aqua is a student-led development group that focused on ruby and ruby on rails technology. Using the latest development platforms, Team Aqua developed a series of five modules which explored the boundaries of Ruby. 
                          <br /><br />

                          <a href="http://www.teamaqua.ca" class="btn">Take a peek</a>
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
                      <h3 class="center-sm paddingtop-0">Deliverables</h3>
                      <br /><br />
                      <div class="col-md-6">
                      <p>
                        Each module explored a different facet of ruby technology; whether that be integrating with command line interfaces, or developing a GUI - Team Aqua was an outlet for creativity in development.
                        <br /><br />
                        Each module created was created under GPL, and as such is available for future development.
                      </p>
                      <br /><br /><br /><br />
                      </div>
                      <img class="line-break" src={LineBreak} alt="Line break" />
                      <div class="spacer-xs"></div>
                    </div>
                  </div>
                  <div class="wow fadeIn">
                  <p class="serif">Next Work →</p>
                  <h3><a class="bigstrike" href="/questionmark">Questionmark</a></h3>
                  </div>
                  <br /><br /><br /><br /><br />
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
    )
  }
}

export default TeamAqua;