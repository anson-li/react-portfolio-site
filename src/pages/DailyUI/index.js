
import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';

import Loader from '../../common/Loader';
import MobileNavigation from '../../common/MobileNavigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import BackgroundDailyUI from '../../web/assets/bg-dailyui.png';

class DailyUI extends PureComponent {
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
              <img class="bg-img" src={BackgroundDailyUI} alt="Background" />
              <div class="horizontal"><p>← Let's continue</p></div>
              <div class="spacer-sm"></div>
              <div class="center-sm">
                <h2 class="scroll-title">#DailyUI</h2>
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
                      Late 2016
                    </p>
                  </Col>
                  <Col data-wow-delay="1s">
                    <p class="center-sm paddingtop-0">
                      <span class="b">SKILLS ++</span><br /><br />
                      UI . UX<br />
                      Animation<br />
                      Design
                    </p>
                  </Col>
                  <Col data-wow-delay="1s">
                    <p class="center-sm paddingtop-0">
                      <span class="b">TECHNOLOGY ++</span><br /><br />
                      Sketchapp<br />
                      Principle<br />
                      Marvel<br />
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
                        DailyUI is, as the name suggests, a daily exploration into UX and UI. For 100 days, UI and UX elements were designed and created for the creative community. Each day, a new project or requirement is issued. As a designer, it was my goal to identify the best way to convey or provide that feature through design.
                        <br /><br />
                        <a href="http://twitter.com/helloanson" class="btn">Take a peek</a>
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
                    Over the course of several months, I honed my skills in UX development. Through various technologies (primarily Sketch for Mac), I developed a collection of UX inspirations for future projects. 
                    <br /><br />
                    Included is a sample of my best work - however, for a view of the progression of work, you can look at Twitter for all #DailyUI updates.
                    </p>
                    <br /><br /><br /><br />
                    </div>
                    <img class="line-break" src={LineBreak} alt="Line break" />
                    <div class="spacer-xs"></div>
                  </div>
                </div>
                <div class="wow fadeIn">
                  <p class="serif">Next Work →</p>
                  <h3><a class="bigstrike" href="/sscte">SSCTE - Android</a></h3>
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

export default DailyUI;