
import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';

import Loader from '../../common/Loader';
import MobileNavigation from '../../common/MobileNavigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import BackgroundSSCTE from '../../web/assets/bg-sscte.png';

class SSCTE extends PureComponent {
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
              <img class="bg-img" src={BackgroundSSCTE} alt="Background" />
              <div class="horizontal"><p>← Let's continue</p></div>
              <div class="spacer-sm"></div>
              <div class="center-sm">
                <h2 class="scroll-title">SSCTE</h2>
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
                      Late 2015
                    </p>
                  </Col>
                  <Col data-wow-delay="1s">
                    <p class="center-sm paddingtop-0">
                      <span class="b">SKILLS ++</span><br /><br />
                      Project development<br />
                      Android <br />
                      UI . UX
                    </p>
                  </Col>
                  <Col data-wow-delay="1s">
                    <p class="center-sm paddingtop-0">
                      <span class="b">TECHNOLOGY ++</span><br /><br />
                      Android Studio<br />
                      Sketchapp<br />
                      Slack
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
                        At the University of Alberta, my team was required to design and produce an android application that provided a single key feature – to allow the trading and borrowing of items. This product served as a first foray into product development, as well as offering a chance to develop management and leadership skills.
                        <br /><br />
                        <a href="https://github.com/CMPUT301F15T07/TradingApp" class="btn">Take a peek</a>
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
                    <div class="box orange"><p>#FFB86F</p></div>
                    &nbsp;&nbsp;&nbsp;
                    <div class="box dark-pink"><p>#8E3B46</p></div>
                    &nbsp;&nbsp;&nbsp;
                    <div class="box light-pink"><p>#CF9295</p></div>
                    </div>
                    <div class="col-md-6">
                    <div class="spacer-sm hidden-md hidden-lg"></div>
                    <p>
                      SSCTE served as an introductory step into the world of UX design for myself, as well as a valuable insight into Android design. 
                      <br /><br />
                      The artboards were designed using Sketch and Photoshop CS6. The design process took over four weeks, with extensive storyboarding and soft prototyping with the help of applications such as Sketchapp and Principle.
                      <br /><br />
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
                  <h3 class="center-sm paddingtop-0">Development</h3>
                  <br /><br />
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6">
                    <p>
                      SSCTE was later developed in Android Studio, over the course of several months.
                      <br /><br />
                      In addition to serving as my strongest experience in Android, this project helped solidify my skills in project management - a key skill that proved invaluable in future projects.
                      <br /><br /><br />
                    </p>
                    </div>
                  </div>
                  <div class="center-sm paddingtop-0">
                    <img class="line-break" src={LineBreak} alt="Line break" />
                  </div>
                  <br /><br /><br /><br /><br />
                </div>
                <div class="wow fadeIn">
                  <p class="serif">Next Work →</p>
                  <h3><a class="bigstrike" href="/teamaqua">Team Aqua - Ruby</a></h3>
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

export default SSCTE;