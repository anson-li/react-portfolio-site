import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    const {
      background, title, section, nextURL, nextTitle, redirect,
    } = this.props;
    return (
      <div id="scroll-page">
        <div id="fixed-wrapper" className="fixed-wrapper">
          <div className="main-container">
            <div id="scrollContainer" className="flex-container container ">
              <div className="hide-under col-md-12 left-top">
                <img className="bg-img" src={background} alt="Background" />
                <div className="horizontal"><p>← Let&rsquo;s continue</p></div>
                <div className="spacer-sm" />
                <div className="center-sm">
                  <h2 className="scroll-title">{title}</h2>
                  <div className="col-md-12">
                    <img className="line-break" src={LineBreak} alt="Line break" />
                  </div>
                </div>
                <div className="spacer-xs" />
                <br />

                { section.map((item, index) => (
                  <BodySection
                    item={item}
                    key={'body-'.concat(index)}
                  />
                ))}

                <br />
                <br />
                { redirect && (
                  <div className="wow fadeIn">
                    <p className="serif">Next Work →</p>
                    <h3><Link to={nextURL} className="bigstrike" href={nextURL}>{nextTitle}</Link></h3>
                  </div>
                )}
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

WorkTemplate.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  section: PropTypes.arrayOf(PropTypes.element).isRequired,
  nextURL: PropTypes.string.isRequired,
  nextTitle: PropTypes.string.isRequired,
  redirect: PropTypes.bool,
};

WorkTemplate.defaultProps = {
  redirect: true,
}

export default WorkTemplate;
