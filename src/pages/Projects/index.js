import React, { PureComponent } from 'react';
import WOW from 'wowjs';

import Loader from '../../common/Loader';
import Navigation from '../../common/Navigation';
import MainLogo from '../../common/MainLogo';
import Border from '../../common/Border';

import LineBreak from '../../web/assets/line-break.png';
import WorkBackground from '../../web/assets/background/bg-work.png';

import BoxLink from './common/BoxLink';

class Projects extends PureComponent {
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
                <img className="bg-img" src={WorkBackground} alt="Background"/>
                <div className="spacer-sm"></div>
                <div className="center-sm">
                  <h2 className="scroll-title">Projects</h2>
                  <div className="col-md-12">
                    <img className="line-break" src={LineBreak} alt="Line break"/>
                  </div>
                </div>
                <div className="spacer-xs"></div>
                <br />

                <div className="col-md-12">

                <div className="wow fadeIn">
                  <BoxLink
                    text="Jellicent"
                    href="/jellicent"
                  />
                </div>
              </div>
            </div>
            <div className="spacer-sm"></div>
            <div className="flex-container container">
              <br /><br />
              <div className="col-md-12 fixed-bottom">
              </div>
            </div>
          </div>
          <div id="bottom"></div>
        </div>
      </div>
    </div> 
    )
  }
}

export default Projects;
