import React, { PureComponent } from 'react';
import WOW from 'wowjs';

import Loader from '../../../../common/Loader';
import Navigation from '../../../../common/Navigation';
import MainLogo from '../../../../common/MainLogo';
import Border from '../../../../common/Border';
import BodySection from './components/BodySection';

import LineBreak from '../../../../web/assets/line-break.png';

class WorkTemplate extends PureComponent {
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
      <div id="scroll-page" ref={(e) => (this.el = e)}>
        <Loader />
        <div id="fixed-wrapper" className="fixed-wrapper">
          <div className="main-container">
            <div id="scrollContainer" className="flex-container container ">
              <div className="hide-under col-md-12 left-top">
                <img className="bg-img" src={this.props.background} alt="Background" />
                <div className="horizontal"><p>← Let's continue</p></div>
                <div className="spacer-sm" />
                <div className="center-sm">
                  <h2 className="scroll-title">{this.props.title}</h2>
                  <div className="col-md-12">
                    <img className="line-break" src={LineBreak} alt="Line break" />
                  </div>
                </div>
                <div className="spacer-xs" />
                <br />

                { this.props.section.map((item, index) => (
                  <BodySection
                    item={item}
                  />
                ))}

                <br />
                <br />
                <div className="wow fadeIn">
                  <p className="serif">Next Work →</p>
                  <h3><a className="bigstrike" href={this.props.nextURL}>{this.props.nextTitle}</a></h3>
                </div>
                <div className="spacer-sm" />
              </div>
            </div>
            <div className="flex-container container">
              <br />
              <br />
              <div className="col-md-12 fixed-bottom" />
            </div>
          </div>
          <div id="bottom" />
        </div>
      </div>
    );
  }
}

export default WorkTemplate;
