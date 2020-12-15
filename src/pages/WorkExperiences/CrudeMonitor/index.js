
import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Container, Row, Col } from 'react-bootstrap';

import BackgroundCrudeMonitor from '../../../web/assets/bg-oil.png';
import WorkTemplate from '../common/WorkTemplate';

class CrudeMonitor extends PureComponent {
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
      live: false
    }).init();
  }

  renderProjectDescription() {
    return (
      <div class="col-md-12">
        <div class="wow fadeIn">
          <h3 class="center-sm paddingtop-0">The Project</h3>
          <br /><br />
          <div class="col-md-12 no-padding">
            <div class="col-md-6">
              <p>
                CQI is a Canadian-based company which specialises in monitoring the quality of North American crude oil. They had tasked me with upgrading their primary application, Crude Monitor, to fit the needs and demands of today's generation.
                <br /><br />
                <a href="http://www.crudemonitor.ca" class="btn">Take a peek</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderProjectOverview() {
    return (
      <div class="wow fadeIn">
        <div class="col-md-12 no-padding">
          <h3 class="center-sm paddingtop-0">Initial Design</h3>
          <br /><br />
          <div class="col-md-3">
            <div class="box blue"><p>#2E3F54</p></div>
            &nbsp;&nbsp;&nbsp;
            <div class="box yellow"><p>#FFF8BD</p></div>
            &nbsp;&nbsp;&nbsp;
            <div class="box gray"><p>#EEEEEE</p></div>
          </div>
          <div class="col-md-6">
            <br /><br />
            <p>
              The initial design was created in Sketchapp, using an iterative development method that helped streamline communication between design and development.
              <br /><br />
              In addition to restructuring the system to better reflect the new design, both frontend and backend technologies were revamped to ensure that the application could be extended in future development.
              <br /><br />
              The total process took over two months of development.
            </p>
          </div>
        </div>
      </div>
    )
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
                Fullstack Development<br />
                UI . UX<br />
                Agile Development
            </p>
          </Col>
          <Col data-wow-delay="1s">
            <span class="b">TECHNOLOGY ++</span><br /><br />
            PHP<br />
            HTML . CSS . JS<br />
            d3.js<br />
          </Col>
        </Row>
      </Container>
    )
  }

  renderReflections() {
    return (
      <div class="wow fadeIn">
        <div class="col-md-12 no-padding">
        <h3 class="center-sm paddingtop-0">Development</h3>
          <br /><br />
          <div class="col-md-12 no-padding">
            <div class="col-md-6">
            <p>
              The design eventually underwent multiple iterations throughout its two-month development phase. Development technologies largely involved PHP and JS development, including use of plugins such as Bootstrap and d3.js. 
            </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const sections = [];
    sections[0] = this.renderSkills();
    sections[1] = this.renderProjectDescription();
    sections[2] = this.renderProjectOverview();
    sections[3] = this.renderReflections();
    return (
      <WorkTemplate
        background={BackgroundCrudeMonitor}
        title="Crude Monitor"
        section={sections}
        nextTitle="AlbertaMES"
        nextURL="/albertames"
      />
    )
  }
}

export default CrudeMonitor;