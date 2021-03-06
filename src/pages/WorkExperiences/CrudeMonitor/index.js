import React, {
  PureComponent,
} from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import anime from 'animejs';
import PropTypes from 'prop-types';

import BackgroundCrudeMonitor from '../../../web/assets/background/bg-oil.png';
import WorkTemplate from '../common/WorkTemplate';
import WithTransition from '../../../common/WithTransition';
import SmoothScroll from '../../../common/SmoothScroll';

class CrudeMonitor extends PureComponent {
  constructor (props) {
    super(props);
    this.renderSkills = this.renderSkills.bind(this);
    this.renderProjectDescription = this.renderProjectDescription.bind(this);
    this.renderProjectOverview = this.renderProjectOverview.bind(this);
    this.renderReflections = this.renderReflections.bind(this);
  }

  hidePage () {
    anime.remove(this.el);

    return anime({
      duration: 0,
      opacity: 0,
      targets: this.el,
    }).finished;
  }

  animateIn () {
    anime.remove(this.el);

    return anime({
      delay: 1000,
      duration: 1000,
      easing: 'easeOutExpo',
      opacity: [0, 1],
      targets: this.el,
      translateY: [-100, 0],
    }).finished;
  }

  animateOut () {
    anime.remove(this.el);
    const {showLoader} = this.props;
    showLoader();

    return anime({
      duration: 1000,
      easing: 'easeOutExpo',
      opacity: 0,
      targets: this.el,
      translateY: -100,
    }).finished;
  }

  renderProjectDescription () {
    return (
      <div className='col-md-12'>
        <div className='wow fadeIn'>
          <h3 className='center-sm paddingtop-0'>The Project</h3>
          <br />
          <br />
          <div className='col-md-12 no-padding'>
            <div className='col-md-6'>
              <p>
                CQI is a Canadian-based company which specialises in monitoring the
                quality of North American crude oil. They had tasked me with
                upgrading their primary application, Crude Monitor, to fit the
                needs and demands of today&rsquo;s generation.
                <br />
                <br />
                <a className='btn' href='http://www.crudemonitor.ca'>Take a peek</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderProjectOverview () {
    return (
      <div className='wow fadeIn'>
        <div className='col-md-12 no-padding'>
          <h3 className='center-sm paddingtop-0'>Initial Design</h3>
          <br />
          <br />
          <div className='col-md-3'>
            <div className='box blue'><p>#2E3F54</p></div>
            &nbsp;&nbsp;&nbsp;
            <div className='box yellow'><p>#FFF8BD</p></div>
            &nbsp;&nbsp;&nbsp;
            <div className='box gray'><p>#EEEEEE</p></div>
          </div>
          <div className='col-md-6'>
            <br />
            <br />
            <p>
              The initial design was created in Sketchapp,
              using an iterative development method that helped
              streamline communication between design and development.
              <br />
              <br />
              In addition to restructuring the system to better
              reflect the new design, both frontend and backend
              technologies were revamped to ensure that the application
              could be extended in future development.
              <br />
              <br />
              The total process took over two months of development.
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderSkills () {
    return (
      <Container>
        <Row>
          <Col data-wow-delay='1s'>
            <p className='center-sm paddingtop-0'>
              <span className='b'>ERA ++</span>
              <br />
              <br />
              Early 2016
            </p>
          </Col>
          <Col data-wow-delay='1s'>
            <p className='center-sm paddingtop-0'>
              <span className='b'>SKILLS ++</span>
              <br />
              <br />
              Fullstack Development
              <br />
              UI . UX
              <br />
              Agile Development
            </p>
          </Col>
          <Col data-wow-delay='1s'>
            <p className='center-sm paddingtop-0'>
              <span className='b'>TECHNOLOGY ++</span>
              <br />
              <br />
              PHP
              <br />
              HTML . CSS . JS
              <br />
              d3.js
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    );
  }

  renderReflections () {
    return (
      <div className='wow fadeIn'>
        <div className='col-md-12 no-padding'>
          <h3 className='center-sm paddingtop-0'>Development</h3>
          <br />
          <br />
          <div className='col-md-12 no-padding'>
            <div className='col-md-6'>
              <p>
                The design eventually underwent multiple iterations
                throughout its two-month development phase. Development
                technologies largely involved PHP and JS development,
                including use of plugins such as Bootstrap and d3.js.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render () {
    const sections = [];
    sections[0] = this.renderSkills();
    sections[1] = this.renderProjectDescription();
    sections[2] = this.renderProjectOverview();
    sections[3] = this.renderReflections();
    const {hideLoader} = this.props;

    return (
      <SmoothScroll>
        <div ref={(element) => {
          this.el = element;
        }}>
          <WorkTemplate
            background={BackgroundCrudeMonitor}
            hideLoader={hideLoader}
            nextTitle='Environment &amp; Parks'
            nextURL='/albertames'
            section={sections}
            title='CQI'
          />
        </div>
      </SmoothScroll>
    );
  }
}

CrudeMonitor.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
};

export default WithTransition(CrudeMonitor);
