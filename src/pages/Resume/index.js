import React, {
  PureComponent,
} from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import anime from 'animejs';
import PropTypes from 'prop-types';

import AlbertaBackground from '../../web/assets/background/bg-alberta.png';
import LineBreak from '../../web/assets/line-break.png';
import DownloadIcon from '../../web/assets/icon/ico-download.png';
import ResumePDF from '../../web/assets/resume_ansonli.pdf';

import TextSection from './common/TextSection';
import TextHeader from './common/TextHeader';
import TextBody from './common/TextBody';
import TextList from './common/TextList';

import WithTransition from '../../common/WithTransition';
import SmoothScroll from '../../common/SmoothScroll';
import BackgroundImage from '../../common/BackgroundImage';

import './style.scss';

class Resume extends PureComponent {
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

  render () {
    const {hideLoader} = this.props;

    return (
      <SmoothScroll>
        <div
          id='scroll-page' ref={(element) => {
            this.el = element;
          }}>
          <div className='fixed-wrapper' id='fixed-wrapper'>
            <div className='main-container'>
              <div className='flex-container container ' id='scrollContainer'>
                <div className='hide-under col-md-12 left-top'>
                  <BackgroundImage
                    afterLoad={hideLoader}
                    alt='Background showing Alberta'
                    src={AlbertaBackground}
                  />
                  <div className='center-sm'>
                    <h2 className='scroll-title'>
                      Anson Li
                      <a download='resume_ansonli.pdf' href={ResumePDF}><img alt='Download the resume' className='download-img' src={DownloadIcon} /></a>
                    </h2>
                    <div className='col-md-12'>
                      <img alt='Line separator' className='line-break' src={LineBreak} />
                    </div>
                  </div>

                  <TextSection animated={false}>
                    <TextHeader text='Overview' />
                    <TextBody>
                      <p>
                        Versatile software engineer with solid experience in full-stack technologies,
                        a strong suite of supplementary languages, and a passion for user experience.
                        Strong background in team management and support with hands-on experience in
                        project development and management. Passion for learning and adapting to new
                        technologies to produce professional-level code.
                        <br />
                        <TextList
                          id='overview'
                          items={[
                            '7+ years of combined experience in full-stack and front-end development',
                            'Experience in project management and agile development methods with startups and ' +
                            'established business solution providers; projects ranged from $2k - $3m',
                            'Strong experience in web design and front-end development through both personal projects and professional business applications',
                            'Proven ability to work in multidisciplinary teams of 4 - 30 members to meet project deliverables and deadlines',
                          ]}
                        />
                      </p>
                    </TextBody>
                  </TextSection>

                  <TextSection>
                    <TextHeader text='Technical Experience' />
                    <TextBody>
                      <Container className='container-border'>
                        <Row>
                          <Col data-wow-delay='0.5s' sm={4}><p><b>Web &amp; Frontend Development</b></p></Col>
                          <Col data-wow-delay='1s' sm={8}>
                            <p>React, React Native, node.js, Javascript, PHP, HTML/CSS/SASS, three.js, GSAP, Webpack, Babel</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col data-wow-delay='0.5s' sm={4}><p><b>Agile</b></p></Col>
                          <Col data-wow-delay='1s' sm={8}><p>Scrum, Kanban, SAFE, Scrumban</p></Col>
                        </Row>
                        <Row>
                          <Col data-wow-delay='0.5s' sm={4}><p><b>Architectures</b></p></Col>
                          <Col data-wow-delay='1s' sm={8}><p>JamSTACK, LAMP, MERN, Django, AngularJS, Nginx</p></Col>
                        </Row>
                        <Row>
                          <Col data-wow-delay='0.5s' sm={4}><p><b>Additional Languages</b></p></Col>
                          <Col data-wow-delay='1s' sm={8}><p>Java, Ruby, Powershell, Python</p></Col>
                        </Row>
                        <Row>
                          <Col data-wow-delay='0.5s' sm={4}><p><b>Source Control &amp; CICD</b></p></Col>
                          <Col data-wow-delay='1s' sm={8}><p>Git, SVN, Github, Gitlab, Github Actions, Jenkins, GCP</p></Col>
                        </Row>
                        <Row>
                          <Col data-wow-delay='0.5s' sm={4}><p><b>Backend Development</b></p></Col>
                          <Col data-wow-delay='1s' sm={8}><p>SQLite, MySQL, Google Firestore</p></Col>
                        </Row>
                        <Row>
                          <Col data-wow-delay='0.5s' sm={4}><p><b>UX, UI</b></p></Col>
                          <Col data-wow-delay='1s' sm={8}><p>Sketch, Photoshop, Figma, Adobe After Effects</p></Col>
                        </Row>
                      </Container>
                    </TextBody>
                  </TextSection>

                  <TextSection animated={false}>
                    <TextHeader text='Education' />
                    <TextBody>
                      <p>
                        BSc., Computer Engineering Cooperative Program, Software Option
                        University of Alberta - Edmonton, AB
                        Completion Date: April 2017
                        <TextList
                          id='education'
                          items={[
                            'Key Electives: Software Quality, Reliable and Secure Systems Design',
                            'Capstone Design Project: Social Web Platform with Stockers Financial Ltd.',
                          ]}
                        />
                      </p>
                      <br />
                      <Container>
                        <Row>
                          <Col data-wow-delay='0.5s'><p>University of Alberta Entrance Scholarship</p></Col>
                          <Col data-wow-delay='1s'><p>Alexander Rutherford Scholarship</p></Col>
                          <Col data-wow-delay='1.5s'><p>International Baccalaureate Certificate</p></Col>
                        </Row>
                      </Container>
                    </TextBody>
                  </TextSection>

                  <TextSection bottomPadding bottomSpacer={false}>
                    <TextHeader text='Work Experience' />
                    <TextBody>
                      <p>
                        <b>Lead Developer - ATB Ventures</b>
                        , ATB Financial Ltd. || Edmonton, AB
                        <br />
                        June 2021 - Now
                        <TextList
                          id='atb-ventures'
                          items={[
                            'Accelerated the development and deployment of Proof, a digital wallet built using Hyperledger and React Native.',
                            'Spearheaded development of key web projects including Proof and Oliu’s customer-facing sites, as well as ATB Ventures’ main site',
                            'Managed design, workflow and development of key marketing tools including a dynamic email template generator for marketing staff',
                            'Coordinated with design and engineering teams to create minimum viable products' +
                              'and proof of concepts using technologies such as GSAP, blockchain, and AI',
                          ]}
                        />
                        <br />
                        <br />
                        <b>Software Engineer</b>
                        , ATB Financial Ltd. || Edmonton, AB
                        <br />
                        February 2019 - Now
                        <TextList
                          id='atb'
                          items={[
                            'Developed a suite of team member tools for ATB, which was used by ATB team members across the province.',
                            'Created support tools for development, including Google chatbots used for emergency coordination and management',
                            'Supported the team through infrastructure and architectural research, ' +
                              'leading to the implementation and integration of new technologies including Google Calendar API',
                            'Assisted in migration of key software across various systems as well as pipeline infrastructure development',
                          ]}
                        />
                        <br />
                        <br />
                        <b>Team Gateway - Software Developer</b>
                        , Questionmark Computing Ltd. || Edmonton, AB
                        <br />
                        September 2016 ‐ December 2018
                        <TextList
                          id='questionmark-intermediate'
                          items={[
                            'Led a team of eight team members on developing Questionmark\'s central platform, ' +
                              'which is used by clients totaling in excess of $1MM',
                            'Created and maintained a variety of products and tools, in coordination with other teams as scrum master',
                            'Lead planning and design of critical features, of which directly resulted in revenue in excess of $200,000',
                            'Worked with the community to identify Learning Tool Interoperability framework improvements',
                          ]}
                        />
                        <br />
                        <br />
                        <b>Full Stack Developer</b>
                        , Crude Quality Inc. || Edmonton, AB
                        <br />
                        May ‐ September 2016
                        <TextList
                          id='cqi'
                          items={[
                            'Developed and redesigned Crude Monitor, CQI’s core software title, using LAMP stack (~$500k project)',
                            'Produced 30+ wireframes and prototypes to quickly communicate changes to product owners',
                            'Analysed documentation and requirements with stakeholders to ensure correct development process',
                            'Initiated development method changes in order to optimise workflow',
                          ]}
                        />
                        <br />
                        <br />
                        <b>Software Developer</b>
                        , Alberta Environment and Parks || Edmonton, AB
                        <br />
                        January ‐ August 2015
                        <TextList
                          id='aeap'
                          items={[
                            'Developed heuristics-based environmental model identification system to reduce' +
                              'complexity in selection and implementation of popular environmental models in Canada',
                            'Engaged in full-stack development to design and develop key systems in PHP',
                            'Served as technical reference for both web technologies and ArcGIS for development team',
                          ]}
                        />
                      </p>
                    </TextBody>
                  </TextSection>
                </div>
                <div className='flex-container container'>
                  <div className='col-md-12 fixed-bottom' />
                </div>
              </div>
              <div id='bottom' />
            </div>
          </div>
        </div>
      </SmoothScroll>
    );
  }
}

Resume.propTypes = {
  hideLoader: PropTypes.func.isRequired,
  showLoader: PropTypes.func.isRequired,
};

export default WithTransition(Resume);
