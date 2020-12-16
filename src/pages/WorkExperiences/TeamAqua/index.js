
import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';

import BackgroundTeamAqua from '../../../web/assets/background/bg-teamaqua.png';
import WorkTemplate from '../common/WorkTemplate';

class TeamAqua extends PureComponent {
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
                <span class="b">TECHNOLOGY ++</span><br /><br />
                Ruby<br />
                Gosu<br />
                Sketchapp<br />
                <br class="visible-xs" />
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
                  Team Aqua is a student-led development group that focused on ruby and ruby on rails technology. Using the latest development platforms, Team Aqua developed a series of five modules which explored the boundaries of Ruby. 
                  <br /><br />
                  <a href="http://www.teamaqua.ca" class="btn">Take a peek</a>
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
            Each module explored a different facet of ruby technology; whether that be integrating with command line interfaces, or developing a GUI - Team Aqua was an outlet for creativity in development.
            <br /><br />
            Each module created was created under GPL, and as such is available for future development.
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
        background={BackgroundTeamAqua}
        title="Team Aqua"
        section={sections}
        nextTitle="Questionmark"
        nextURL="/questionmark"
      />
    )
  }
}

export default TeamAqua;