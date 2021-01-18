import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';
import anime from 'animejs';

import BackgroundAlbertaMES from '../../../web/assets/background/bg-albertames.png';
import WorkTemplate from '../common/WorkTemplate';
import withTransition from '../../../common/WithTransition';
import SmoothScroll from '../../../common/SmoothScroll';

class AlbertaMES extends PureComponent {
  constructor(props) {
    super(props);
    this.renderSkills = this.renderSkills.bind(this);
    this.renderProjectDescription = this.renderProjectDescription.bind(this);
    this.renderProjectOverview = this.renderProjectOverview.bind(this);
    this.renderReflections = this.renderReflections.bind(this);
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
    }).init();
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
      duration: 500,
      easing: 'easeOutExpo',
    }).finished;
  }

  renderSkills() {
    return (
      <Container>
        <Row>
          <Col data-wow-delay="1s">
            <p className="center-sm paddingtop-0">
              <span className="b">ERA ++</span>
              <br />
              <br />
              2015
            </p>
          </Col>
          <Col data-wow-delay="1s">
            <p className="center-sm paddingtop-0">
              <span className="b">SKILLS ++</span>
              <br />
              <br />
              Fullstack Development
              <br />
              GIS Development
              <br />
              MVC
            </p>
          </Col>
          <Col data-wow-delay="1s">
            <p className="center-sm paddingtop-0">
              <span className="b">TECHNOLOGY ++</span>
              <br />
              <br />
              MVC . jquery
              <br />
              arcgis api
              <br />
              d3.js
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    );
  }

  renderProjectDescription() {
    return (
      <div className="col-md-12">
        <div className="wow fadeIn">
          <div className="col-md-12 no-padding">
            <h3 className="center-sm paddingtop-0">The Project</h3>
            <br />
            <br />
            <div className="col-md-6">
              <p>
                AlbertaMES is a heuristics-based web application to filter
                and isolate projects, models and stations related to
                environmental care. I was signed on as the primary developer
                of the application, which was developed over the course of 8 months.
                <br />
                <br />
                <a href="http://www.blog.ansonli.ca/index.php/2016/01/04/35/" className="btn">Take a peek</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderProjectOverview() {
    return (
      <div className="col-md-12 no-padding">
        <div className="wow fadeIn">
          <h3 className="center-sm paddingtop-0">Overview</h3>
          <br />
          <br />
          <div className="col-md-3">
            <div className="box dark-blue"><p>#2C3D51</p></div>
              &nbsp;&nbsp;&nbsp;
            <div className="box green"><p>#81B175</p></div>
              &nbsp;&nbsp;&nbsp;
            <div className="box white"><p>#FFFFFF</p></div>
          </div>
          <br />
          <br />
          <div className="col-md-6">
            <p>
              We used ArcGIS API for Javascript to develop this technology,
              alongside other supporting technologies such as MVC, JQuery and other libraries.
              <br />
              <br />
              Additionally, our team used a collection of software development
              methodologies, such as software requirements elicitations and
              post-mortems, to enhance both the quality of the team’s work
              as well as the team itself.
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderReflections() {
    return (
      <div className="col-md-12 no-padding">
        <div className="wow fadeIn">
          <h3 className="center-sm paddingtop-0">Reflection</h3>
          <br />
          <br />
          <div className="col-md-6">
            <p>
              This project served as my first foray into professional
              software experience. I learned many facets of work life
              that are invaluable today; both with regards to technical
              and soft skills.
              <br />
              <br />
              Many of the skills that are developed at this stage, including
              development frameworks and UX, were later explored and
              reintegrated into future projects.
              <br />
              <br />
              This project was later integrated into the workflow of the
              Government of Alberta, and is currently under further development.
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const sections = [];
    sections[0] = this.renderSkills();
    sections[1] = this.renderProjectDescription();
    sections[2] = this.renderProjectOverview();
    sections[3] = this.renderReflections();
    return (
      <SmoothScroll>
        <div ref={(e) => { this.el = e; }}>
          <WorkTemplate
            background={BackgroundAlbertaMES}
            title="AlbertaMES"
            section={sections}
            nextTitle="#DailyUI"
            nextURL="/dailyui"
          />
        </div>
      </SmoothScroll>
    );
  }
}

export default withTransition(AlbertaMES);
