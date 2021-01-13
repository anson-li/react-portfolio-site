import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';
import anime from 'animejs';

import BackgroundSSCTE from '../../../web/assets/background/bg-sscte.png';
import WorkTemplate from '../common/WorkTemplate';
import withTransition from '../../../common/WithTransition';

class SSCTE extends PureComponent {
  constructor(props) {
    super(props);
    this.renderSkills = this.renderSkills.bind(this);
    this.renderProjectDescription = this.renderProjectDescription.bind(this);
    this.renderProjectOverview = this.renderProjectOverview.bind(this);
    this.renderProjectReflections = this.renderProjectReflections.bind(this);
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
    console.log('A');
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
    console.log('B');
    anime.remove(this.el);
    return anime({
      targets: this.el,
      translateY: -100,
      opacity: 0.5,
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
              Late 2015
            </p>
          </Col>
          <Col data-wow-delay="1s">
            <p className="center-sm paddingtop-0">
              <span className="b">SKILLS ++</span>
              <br />
              <br />
              Project development
              <br />
              Android
              {' '}
              <br />
              UI . UX
            </p>
          </Col>
          <Col data-wow-delay="1s">
            <p className="center-sm paddingtop-0">
              <span className="b">TECHNOLOGY ++</span>
              <br />
              <br />
              Android Studio
              <br />
              Sketchapp
              <br />
              Slack
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
                At the University of Alberta, my team was required to design and produce an android application that provided a single key feature – to allow the trading and borrowing of items. This product served as a first foray into product development, as well as offering a chance to develop management and leadership skills.
                <br />
                <br />
                <a href="https://github.com/CMPUT301F15T07/TradingApp" className="btn">Take a peek</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderProjectOverview() {
    return (
      <div className="wow fadeIn">
        <div className="col-md-12 no-padding">
          <h3 className="center-sm paddingtop-0">Initial Design</h3>
          <br />
          <br />
          <div className="col-md-3">
            <div className="box orange"><p>#FFB86F</p></div>
            &nbsp;&nbsp;&nbsp;
            <div className="box dark-pink"><p>#8E3B46</p></div>
            &nbsp;&nbsp;&nbsp;
            <div className="box light-pink"><p>#CF9295</p></div>
          </div>
          <div className="col-md-6">
            <br />
            <br />
            <p>
              SSCTE served as an introductory step into the world of UX design for myself, as well as a valuable insight into Android design.
              <br />
              <br />
              The artboards were designed using Sketch and Photoshop CS6. The design process took over four weeks, with extensive storyboarding and soft prototyping with the help of applications such as Sketchapp and Principle.
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderProjectReflections() {
    return (
      <div className="wow fadeIn">
        <h3 className="center-sm paddingtop-0">Development</h3>
        <br />
        <br />
        <div className="col-md-12 no-padding">
          <div className="col-md-6">
            <p>
              SSCTE was later developed in Android Studio, over the course of several months.
              <br />
              <br />
              In addition to serving as my strongest experience in Android, this project helped solidify my skills in project management - a key skill that proved invaluable in future projects.
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
    sections[3] = this.renderProjectReflections();
    return (
      <div ref={(e) => (this.el = e)}>
        <WorkTemplate
          background={BackgroundSSCTE}
          title="SSCTE"
          section={sections}
          nextTitle="Team Aqua - Ruby"
          nextURL="/teamaqua"
        />
      </div>
    );
  }
}

export default withTransition(SSCTE);
