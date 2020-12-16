
import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';

import BackgroundQuestionmark from '../../../web/assets/background/bg-questionmark.png';
import WorkTemplate from '../common/WorkTemplate';

class Questionmark extends PureComponent {
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

  renderSkills() {
    return (
      <Container>
        <Row>
          <Col data-wow-delay="1s">
              <p class="center-sm paddingtop-0">
                <span class="b">ERA ++</span><br /><br />
                2016 - 2019
              </p>
          </Col>
          <Col data-wow-delay="1.5s">
            <p class="center-sm paddingtop-0">
              <span class="b">SKILLS ++</span><br /><br />
              Full stack<br />
              Agile<br />
              API Development
            </p>
          </Col>
          <Col data-wow-delay="2s">
            <p class="center-sm paddingtop-0">
              <span class="b">TECHNOLOGY ++</span><br /><br />
              Drupal . PHP<br />
              Powershell<br />
              JQuery<br />
            </p>
          </Col>
        </Row>
      </Container>
    );
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
                Questionmark creates assessment technologies. These are tools that (primarily) deal with building technologies that involve assessments through their lifecycle - from creation to assessing to results.<br /><br />
                One product in particular is the LTI (Learning Tools Interoperability) tool, which integrates the Questionmark technology with LMSs such as Moodle, Desire2Learn, and Blackboard. This tool was first announced in 2013, and - with the exclusion of minor bugfixes - has not been maintained since 2014. Additionally, this tool was initially developed by a third party.<br /><br /> 
                In 2016, I was signed on to upgrade the existing LTI technology to suit our core customer base, as well as integrate any new components developed in previous systems.
                <br /><br />
                <a href="http://www.questionmark.com" class="btn">View the site</a>
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
          Over the course of two years, I was the primary developer attached on the LTI tool, and added / upgraded key features such as handling multiple results and viewing coaching reports (eg. reports that provided detailed result information on an assessment). As a result of the progress I had made, Questionmark was able to push a LTI Version 2 - a product of which is used by many large organizations today.
          <br /><br />
          Additionally, I worked on Drupal-based stories, which involved upgrading application features and repairing current functionalities. Throughout my time, I was able to work on several tasks that ranged from Drupal to Powershell scripting; allowing me to hone my full-stack development capabilities.
          <br /><br />
          Finally, I was involved in the UX team meetings, where platform and application design was discussed and optimised by team representatives. This gave me a stronger insight into the world of professional UX design and development - an aspect of which I bring into my work each day.
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
    sections[2] = this.renderProjectDeliverables();
    return (
      <WorkTemplate
        background={BackgroundQuestionmark}
        title="Questionmark"
        section={sections}
        nextTitle="Crude Monitor"
        nextURL="/crudemonitor"
      />
    )
  }
}

export default Questionmark;
