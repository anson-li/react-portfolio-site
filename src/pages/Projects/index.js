import React, { PureComponent } from 'react';
import WOW from 'wowjs';

import { Link } from 'react-router-dom';
import Loader from '../../common/Loader';
import Navigation from '../../common/Navigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import WorkBackground from '../../web/assets/background/bg-work.png';

class Projects extends PureComponent {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
    }).init();
  }

  render() {
    return (
      <div id="scroll-page">
        <Loader />
        <div id="fixed-wrapper" className="fixed-wrapper">
          <div className="fixed-header">
            <Border />
            <Navigation scroll />
            <MainLogo />
          </div>
          <div className="main-container">
            <div id="scrollContainer" className="flex-container container ">
              <div className="hide-under col-md-12 left-top">
                <img className="bg-img" src={WorkBackground} alt="Background" />
                <div className="spacer-sm" />
                <div className="center-sm">
                  <h2 className="scroll-title">Projects</h2>
                  <div className="col-md-12">
                    <img className="line-break" src={LineBreak} alt="Line break" />
                  </div>
                </div>
                <div className="spacer-xs" />
                <br />

                <div className="wow fadeIn">
                  <h3>Jellicent</h3>
                  <br />

                  <div className="col-md-12 no-padding">
                    <div className="col-md-6 no-padding">
                      <p>
                        Testing three.js basic React templating with passthroughs, scene design and camera manipulation.
                      </p>
                      <br />
                    </div>
                  </div>
                  <div className="col-md-12 no-padding">
                    <div className="col-md-6 no-padding">
                      <p>
                        <Link to="/jellicent" href="/jellicent" className="btn">View case study</Link>
                      </p>
                      <div className="spacer-xs" />
                    </div>
                  </div>
                  <div className="col-md-12 no-padding">
                    <div className="center-sm paddingtop-0">
                      <img className="line-break" src={LineBreak} alt="Line break" />
                    </div>
                    <div className="spacer-xs" />
                  </div>
                </div>

                <div className="wow fadeIn">
                  <h3>LTI</h3>
                  <br />

                  <div className="col-md-12 no-padding">
                    <div className="col-md-6 no-padding">
                      <p>
                        Learning Interoperability Tool developed for Questionmark systems.
                      </p>
                      <br />
                    </div>
                  </div>
                  <div className="col-md-12 no-padding">
                    <div className="col-md-6 no-padding">
                      <p>
                        <a href="https://github.com/questionmark/qm-lti" className="btn">View case study</a>
                      </p>
                      <div className="spacer-xs" />
                    </div>
                  </div>
                  <div className="col-md-12 no-padding">
                    <div className="center-sm paddingtop-0">
                      <img className="line-break" src={LineBreak} alt="Line break" />
                    </div>
                    <div className="spacer-xs" />
                  </div>
                </div>
              </div>
              <div className="spacer-sm" />
              <div className="flex-container container">
                <br />
                <br />
                <div className="col-md-12 fixed-bottom" />
              </div>
            </div>
            <div id="bottom" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
