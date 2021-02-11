import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import anime from 'animejs';
import PropTypes from 'prop-types';

import BackgroundATBFinancial from '../../../web/assets/background/bg-atbfinancial.png';
import WorkTemplate from '../common/WorkTemplate';
import withTransition from '../../../common/WithTransition';
import SmoothScroll from '../../../common/SmoothScroll';

class ATBFinancial extends PureComponent {
  constructor(props) {
    super(props);
    this.renderSkills = this.renderSkills.bind(this);
    this.renderProjectDescription = this.renderProjectDescription.bind(this);
    this.renderProjectOverview = this.renderProjectOverview.bind(this);
    this.renderReflections = this.renderReflections.bind(this);
  }

  hidePage() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      opacity: 0,
      duration: 0,
    }).finished;
  }

  animateIn() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 1000,
      easing: 'easeOutExpo',
    }).finished;
  }

  animateOut() {
    anime.remove(this.el);
    const { showLoader } = this.props;
    showLoader();
    return anime({
      targets: this.el,
      translateY: -100,
      opacity: 0,
      duration: 1000,
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
              2019 - Now
            </p>
          </Col>
          <Col data-wow-delay="1s">
            <p className="center-sm paddingtop-0">
              <span className="b">SKILLS ++</span>
              <br />
              <br />
              Enterprise
              <br />
              Frontend
              <br />
              Large Projects
            </p>
          </Col>
          <Col data-wow-delay="1s">
            <p className="center-sm paddingtop-0">
              <span className="b">TECHNOLOGY ++</span>
              <br />
              <br />
              React
              <br />
              node.js
              <br />
              Google App Engine
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
                I joined ATB as part of its transformation journey, which lead 3 years
                of innovation, technology and discovery. During that journey, I was able to
                work on a suite of projects - from Google App bots that eased our workflow, to
                building the Unleashed initiative to support our front line team members.
                <br />
                <br />
                As part of the Unleashed project, we were tasked with building
                a holistic platform of team member tools to simplify,
                streamline and curate the perfect customer experience.
                <br />
                <br />
                <a href="https://www.atb.com/personal/" className="btn">Take a peek</a>
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
            <div className="box atb-blue"><p>#005EB8</p></div>
            &nbsp;&nbsp;&nbsp;
            <div className="box atb-blue-3"><p>#009BDE</p></div>
            &nbsp;&nbsp;&nbsp;
            <div className="box atb-blue-2"><p>#002385</p></div>
          </div>
          <br />
          <br />
          <div className="col-md-6">
            <p>
              Unleashed, as part of the Team Member Tools initiative, was built
              on top of a React front end, which was supported by node.js and an
              enterprise backend. My role was primarily to develop key features
              on the React Frontend, and building connections to our backend to
              support delivery.
              <br />
              <br />
              Additionally, I was part of the UI Center of Excellence,
              which worked with key teams across ATB to unify and develop best
              practice across all front end software.
              <br />
              <br />
              Finally, I worked with key product members to identify, plan
              and execute on key features that would improve our team members&apos;
              everyday lives.
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
              ATB Financial offered me a chance to hone my experience at a large
              enterprise, using larger systems and processes than I have ever worked on.
              This allowed me the opportunity to improve my skills at assessing the
              &lsquo;big picture&rsquo; of software development.
              <br />
              <br />
              Thanks to the transformation phase that ATB went through,
              I had the chance to explore a ton of different technologies through
              various programs including internal Hackathons,
              including:
              <br />
              <br />
              ●&nbsp;ThreeJS with
              {' '}
              <a className="project" href="https://github.com/anson-li/flight-to-financial-freedom">Flight to Financial Future</a>
              <br />
              ●&nbsp;Google App Engine with
              {' '}
              <a className="project" href="https://github.com/anson-li/google-bot-flask-template">various bots, including a MIO tracker and a support bot</a>
              <br />
              ●&nbsp;Various NoSQL database solutions including Google Firestore
              <br />
              <br />
              Finally, I had the chance to work with a ton of industry experts and high-class
              software developers, which gave me the chance to improve my own skills at a
              rapid pace.
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
    const { hideLoader } = this.props;
    return (
      <SmoothScroll>
        <div ref={(e) => { this.el = e; }}>
          <WorkTemplate
            background={BackgroundATBFinancial}
            title="ATB Financial"
            section={sections}
            nextTitle="Questionmark"
            nextURL="/questionmark"
            hideLoader={hideLoader}
          />
        </div>
      </SmoothScroll>
    );
  }
}

ATBFinancial.propTypes = {
  showLoader: PropTypes.func.isRequired,
  hideLoader: PropTypes.func.isRequired,
};

export default withTransition(ATBFinancial);
