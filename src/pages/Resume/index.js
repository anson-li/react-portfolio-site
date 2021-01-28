import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import anime from 'animejs';

import AlbertaBackground from '../../web/assets/background/bg-alberta.png';
import LineBreak from '../../web/assets/line-break.png';
import DownloadIcon from '../../web/assets/icon/ico-download.png';

import TextSection from './common/TextSection';
import TextHeader from './common/TextHeader';
import TextBody from './common/TextBody';
import TextList from './common/TextList';

import ResumePDF from '../../web/assets/resume_ansonli.pdf';
import withTransition from '../../common/WithTransition';

import SmoothScroll from '../../common/SmoothScroll';

import './style.scss';
import Background from '../../common/Background';
import BackgroundImage from '../../common/BackgroundImage'

class Resume extends PureComponent {
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
      duration: 0,
      easing: 'easeOutExpo',
    }).finished;
  }

  render() {
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
                        Versatile software engineer with solid experience in full-stack technologies,
                        and a strong suite of supplementary languages.
                        Strong background in team management and support with hands-on
                        experience in project development and management.
                        <TextList
                          id="overview"
                          items={[
                            '5 years combined project and software experience in full-stack development',
                            'Experience in project management and agile development methods with startups and established business solution providers; projects ranged from $2k - $3m',
                            'Knowledgeable of asset management, code quality, and code security',
                            'Proven ability to work in multidisciplinary teams of 4 - 30 members to meet project deliverables and deadlines',
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
                            'Developed team member tools for ATB, which was used by ATB team members across the province.',
                            'Created support tools for development, including Google chatbots used for emergency coordination and management',
                            'Member of the Front End CoE team within ATB, which led several initiatives including the development of organization-wide best practices',
                            'Assisted in migration of key software across various systems',
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
                            'Led a team of eight team members on developing Questionmark\'s central platform, which is used by clients totaling in excess of $1MM.',
                            'Created and maintained a variety of products and tools, in coordination with other teams as scrum master.',
                            'Lead planning and design of critical features, of which directly resulted in revenue in excess of $200,000.',
                            'Worked with the community to identify Learning Tool Interoperability framework improvements.',
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
                        <b>Front‐End Development</b>
                        <TextList
                          id="frontend"
                          items={[
                            'Developed and sold various websites for customers',
                            'Oversaw development of corporate websites for companies including Enerfest Inc.',
                            'Developed various web applications for ATB Financial Ltd.',
                            'Produced various experimental web projects using tools including three.js',
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
                        <b>Other Work</b>
                        <TextList
                          id="other"
                          items={[
                            'Expertise in Microsoft products including Excel, Word, Access, PowerPoint',
                            'Developed using multiple OSes, including Ubuntu, OSX and Windows',
                            'Worked with various graphics and photo editing software including Photoshop and Sketch',
                            'Developed with other languages and frameworks such as Python and ASP.net',
                            'Implemented other technologies including Github, Sublime Text 3 and Eclipse',
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

export default withTransition(Resume);
