import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

import withTransition from '../../common/WithTransition';
import SmoothScroll from '../../common/SmoothScroll';
import BackgroundImage from '../../common/BackgroundImage';

import './style.scss';

class Resume extends PureComponent {
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

  render() {
    const { hideLoader } = this.props;
    return (
      <SmoothScroll>
        <div id="scroll-page" ref={(e) => { this.el = e; }}>
          <div id="fixed-wrapper" className="fixed-wrapper">
            <div className="main-container">
              <div id="scrollContainer" className="flex-container container ">
                <div className="hide-under col-md-12 left-top">
                  <BackgroundImage
                    src={AlbertaBackground}
                    alt="Background showing Alberta"
                    afterLoad={hideLoader}
                  />
                  <div className="center-sm">
                    <h2 className="scroll-title">
                      Anson Li
                      <a href={ResumePDF} download="resume_ansonli.pdf"><img className="download-img" src={DownloadIcon} alt="Download the resume" /></a>
                    </h2>
                    <div className="col-md-12">
                      <img className="line-break" src={LineBreak} alt="Line separator" />
                    </div>
                  </div>

                  <TextSection animated={false}>
                    <TextHeader text="Overview" />
                    <TextBody>
                      <p>
                        Versatile software engineer with solid experience in full-stack
                        technologies, and a strong suite of supplementary languages.
                        Strong background in team management and support with hands-on
                        experience in project development and management.
                        <br />
                        <TextList
                          id="overview"
                          items={[
                            '6+ years combined project and software experience in full-stack development',
                            'Experience in project management and agile development methods with startups and established business solution'
                            + ' providers; projects ranged from $2k - $3m',
                            'Knowledgeable of asset management, code quality, and code security',
                            'Passion for learning and adapting to new technologies to produce professional-level code.',
                          ]}
                        />
                      </p>
                    </TextBody>
                  </TextSection>

                  <TextSection animated={false}>
                    <TextHeader text="Education" />
                    <TextBody>
                      <p>
                        BSc., Computer Engineering Cooperative Program, Software Option
                        University of Alberta - Edmonton, AB
                        Completion Date: April 2017
                        <TextList
                          id="education"
                          items={[
                            'Key Electives: Software Quality, Reliable and Secure Systems Design',
                            'Capstone Design Project: Social Web Platform with Stockers Financial Ltd.',
                          ]}
                        />
                      </p>
                      <br />
                      <Container>
                        <Row>
                          <Col data-wow-delay="0.5s"><p>University of Alberta Entrance Scholarship</p></Col>
                          <Col data-wow-delay="1s"><p>Alexander Rutherford Scholarship</p></Col>
                          <Col data-wow-delay="1.5s"><p>International Baccalaureate Certificate</p></Col>
                        </Row>
                      </Container>
                    </TextBody>
                  </TextSection>

                  <TextSection>
                    <TextHeader text="Work Experience" />
                    <TextBody>
                      <p>
                        <b>Software Engineer</b>
                        , ATB Financial Ltd. || Edmonton, AB
                        <br />
                        February 2019 - Now
                        <TextList
                          id="atb"
                          items={[
                            'Developed a suite of team member tools for ATB, which was used by ATB team members across the province.',
                            'Created support tools for development, including Google chatbots used for emergency coordination and management',
                            'Supported the team through infrastructure and architectural research, leading to the implementation and integration of new technologies including Google Calendar API',
                            'Assisted in migration of key software across various systems as well as pipeline infrastructure development',
                          ]}
                        />
                        <br />
                        <br />
                        <b>Team Gateway - Software Developer</b>
                        , Questionmark Computing Ltd. || Edmonton, AB
                        <br />
                        May 2017 ‐ December 2018
                        <TextList
                          id="questionmark-intermediate"
                          items={[
                            'Led a team of eight team members on developing Questionmark\'s central platform, which is used by clients totaling in excess of $1MM',
                            'Created and maintained a variety of products and tools, in coordination with other teams as scrum master',
                            'Lead planning and design of critical features, of which directly resulted in revenue in excess of $200,000',
                            'Worked with the community to identify Learning Tool Interoperability framework improvements',
                          ]}
                        />
                        <br />
                        <br />
                        <b>Team Gateway - Junior Developer</b>
                        , Questionmark Computing Ltd. || Edmonton, AB
                        <br />
                        September ‐ December 2016
                        <TextList
                          id="questionmark-junior"
                          items={[
                            'Created a Learning Tools Interoperability tool for connecting Questionmark with major educational institutions',
                            'Completed 7 sprints  as part of a five-member team to integrate and upgrade core Questionmark products',
                            'Presented code and deliverables to staff and clientele, to identify key changes and updates on core software',
                            'Utilised planning and organizational skills to manage tight development deadlines and competing priorities',
                          ]}
                        />
                        <br />
                        <br />
                        <b>Full Stack Developer</b>
                        , Crude Quality Inc. || Edmonton, AB
                        <br />
                        May ‐ September 2016
                        <TextList
                          id="cqi"
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
                          id="aeap"
                          items={[
                            'Developed heuristics-based environmental model identification system to reduce complexity in selection and implementation of popular environmental models in Canada',
                            'Engaged in full-stack development to design and develop key systems in PHP',
                            'Served as technical reference for both web technologies and ArcGIS for development team',
                          ]}
                        />
                      </p>
                    </TextBody>
                  </TextSection>

                  <TextSection bottomSpacer={false} bottomPadding>
                    <TextHeader text="Software Experience" />
                    <TextBody>
                      <p>
                        <b>React</b>
                        <TextList
                          id="frontend"
                          items={[
                            '3+ years of experience of building both professional web applications and personal sites',
                            'Converted personal portfolio to React over the course of several months',
                            'Oversaw React development as part of the Front-End Center of Excellence team within ATB',
                          ]}
                        />
                        <br />
                        <b>Additional Front‐End Development</b>
                        <TextList
                          id="frontend"
                          items={[
                            'Developed and sold various websites for customers with a variety of tools, including PHP and Javascript',
                            'Oversaw development of corporate websites for companies including Enerfest Inc. and CQI',
                            'Designed and created various experimental web projects using tools including three.js and GSAP',
                          ]}
                        />
                        <br />
                        <b>Full Stack Development</b>
                        <TextList
                          id="fullstack"
                          items={[
                            'Developed AlbertaMES in MEAN, a heuristics‐driven web application for environmental models',
                            'Developed CrudeMonitor in LAMP, a data management and analytics tool for Canadian crude oil',
                            'Worked on Team Member Tools as part of ATB\'s initiative, using React and node.js',
                          ]}
                        />
                        <br />
                        <b>Back‐End Development</b>
                        <TextList
                          id="backend"
                          items={[
                            'Developed backend structures and integrated them for AlbertaMES',
                            'Worked with different database implementation methods such as Heroku and BerkeleyDB',
                          ]}
                        />
                        <br />
                        <b>Python &amp; Google Chatbots</b>
                        <TextList
                          id="python"
                          items={[
                            'Develop various work support tools using Python and Google App Engine',
                            'Examples of tools createed include: live issue tracker, GCP outage tracker, Merge Request tracker, Google Chat threadsaver',
                          ]}
                        />
                        <br />
                        <b>CI/CD</b>
                        <TextList
                          id="cicd"
                          items={[
                            'Supported project migration to true CI/CD through process development & documentation',
                            'Designed and built a new process flow for integrating live, cross-environment feature toggles to support true CI/CD',
                            'Led various deployments as part of the CI/CD process; working with developers, managers, and clients',
                            'Used Kubernetes and GCP web tools to analyse system health and diagnose errors',
                          ]}
                        />
                        <br />
                        <b>C Programming</b>
                        <TextList
                          id="cprog"
                          items={[
                            'Developed process monitoring software for Linux‐based systems',
                            'Implemented basic algorithmic processes and interpreter',
                          ]}
                        />
                        <br />
                        <b>Ruby / Ruby on Rails:</b>
                        <TextList
                          id="ror"
                          items={[
                            'Implemented RoR framework in developing a website designed for statistics analysis and dynamic visual representation',
                          ]}
                        />
                        <br />
                        <b>Java / Android</b>
                        <TextList
                          id="java"
                          items={[
                            'Developed an android application for trading cards',
                            'Developed various side projects for both Android and Java',
                          ]}
                        />
                        <br />
                        <b>Other Work</b>
                        <TextList
                          id="other"
                          items={[
                            'Expertise in Microsoft products including Excel, Word, Access, PowerPoint',
                            'Developed using multiple OSes, including Ubuntu, OSX and Windows',
                            'Worked with various graphics and photo editing software including Photoshop and Sketch',
                            'Developed with other languages and frameworks such as Python and ASP.net',
                            'Experienced in various version control systems, including Git and Subversion',
                            'Worked with tools including Visual Studio Code, Eclipse and Postman',
                          ]}
                        />
                      </p>
                    </TextBody>
                  </TextSection>
                </div>
                <div className="flex-container container">
                  <div className="col-md-12 fixed-bottom" />
                </div>
              </div>
              <div id="bottom" />
            </div>
          </div>
        </div>
      </SmoothScroll>
    );
  }
}

Resume.propTypes = {
  showLoader: PropTypes.func.isRequired,
  hideLoader: PropTypes.func.isRequired,
};

export default withTransition(Resume);
