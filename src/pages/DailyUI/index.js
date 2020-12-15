
import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';

import BackgroundDailyUI from '../../web/assets/bg-dailyui.png';
import WorkTemplate from '../../common/WorkTemplate';

class DailyUI extends PureComponent {
  constructor(props) {
    super(props);
    this.renderSkills = this.renderSkills.bind(this);
    this.renderProjectDescription = this.renderProjectDescription.bind(this);
    this.renderProjectDeliverables = this.renderProjectDeliverables.bind(this);
  }

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
    const sections = [];
    sections[0] = this.renderSkills();
    sections[1] = this.renderProjectDescription();
    sections[2] = this.renderProjectDeliverables();
    return (
      <WorkTemplate
        background={BackgroundDailyUI}
        title="#DailyUI"
        section={sections}
        nextTitle="SSCTE - Android"
        nextURL="/sscte"
      />
    )
  }

  renderSkills() {
    return (
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
    )
  }

  renderProjectDescription() {
    return (
      <div class="col-md-12">
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
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderProjectDeliverables() {
    return (
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
          </div>
      </div>
    </div>
    );
  }
}

export default DailyUI;