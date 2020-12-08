import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';

import Loader from '../../common/Loader';
import MobileNavigation from '../../common/MobileNavigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import BackgroundAlbertaMES from '../../web/assets/bg-albertames.png';

class WorkTemplate extends PureComponent {
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
              <img class="bg-img" src={this.props.background} alt="Background" />
              <div class="horizontal"><p>← Let's continue</p></div>
              <div class="spacer-sm"></div>
              <div class="center-sm">
                <h2 class="scroll-title">{this.props.title}</h2>
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
                      2015
                    </p>
                  </Col>
                  <Col data-wow-delay="1s">
                  <p class="center-sm paddingtop-0">
                    <span class="b">SKILLS ++</span><br /><br />
                      Fullstack Development<br />
                      GIS Development<br />
                      MVC
                    </p>
                  </Col>
                  <Col data-wow-delay="1s">
                  <p class="center-sm paddingtop-0">
                    <span class="b">TECHNOLOGY ++</span><br /><br />
                    MVC . jquery<br />
                    arcgis api<br />
                    d3.js<br />
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
                        AlbertaMES is a heuristics-based web application to filter and isolate projects, models and stations related to environmental care. I was signed on as the primary developer of the application, which was developed over the course of 8 months. 
                        <br /><br />
                        <a href="http://www.blog.ansonli.ca/index.php/2016/01/04/35/" class="btn">Take a peek</a>
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
                    <h3 class="center-sm paddingtop-0">Overview</h3>
                    <br /><br />
                    <div class="col-md-3">
                    <div class="box dark-blue"><p>#2C3D51</p></div>
                    &nbsp;&nbsp;&nbsp;
                    <div class="box green"><p>#81B175</p></div>
                    &nbsp;&nbsp;&nbsp;
                    <div class="box white"><p>#FFFFFF</p></div>
                    </div>
                    <div class="col-md-6">
                    <div class="spacer-sm hidden-md hidden-lg"></div>
                    <p>
                      We used ArcGIS API for Javascript to develop this technology, alongside other supporting technologies such as MVC, JQuery and other libraries.
                      <br /><br />
                      Additionally, our team used a collection of software development methodologies, such as software requirements elicitations and post-mortems, to enhance both the quality of the team’s work as well as the team itself.
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
                  <h3 class="center-sm paddingtop-0">Reflection</h3>
                  <br /><br />
                  <div class="col-md-12 no-padding">
                    <div class="col-md-6">
                    <p>
                      This project served as my first foray into professional software experience. I learned many facets of work life that are invaluable today; both with regards to technical and soft skills.
                      <br /><br />
                      Many of the skills that are developed at this stage, including development frameworks and UX, were later explored and reintegrated into future projects.
                      <br /><br />
                      This project was later integrated into the workflow of the Government of Alberta, and is currently under further development.
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
                  <h3><a class="bigstrike" href="/dailyui">#DailyUI</a></h3>
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
    );
  }
}

export default WorkTemplate;