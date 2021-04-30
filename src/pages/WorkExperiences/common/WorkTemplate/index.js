import React, {
  PureComponent,
} from 'react';
import WOW from 'wowjs';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import BodySection from './components/BodySection';
import BackgroundImage from '../../../../common/BackgroundImage';
import FixedScroll from '../../../../common/FixedScroll';

import LineBreak from '../../../../web/assets/line-break.png';

class WorkTemplate extends PureComponent {
  componentDidMount () {
    new WOW.WOW({
      animateClass: 'animated',
      boxClass: 'wow',
      live: false,
      mobile: true,
      offset: 0,
    }).init();
  }

  render () {
    const {
      background, title, section, nextURL, nextTitle, redirect, hideLoader,
    } = this.props;

    return (
      <div id='scroll-page'>
        <div className='fixed-wrapper' id='fixed-wrapper'>
          <div className='main-container'>
            <div className='flex-container container ' id='scrollContainer'>
              <div className='hide-under col-md-12 left-top'>
                <BackgroundImage
                  afterLoad={hideLoader}
                  alt='Background'
                  src={background}
                />
                <FixedScroll
                  text='Let&rsquo;s continue →'
                />
                <div className='spacer-sm' />
                <div className='center-sm'>
                  <h2 className='scroll-title'>{title}</h2>
                  <div className='col-md-12'>
                    <img alt='Line break' className='line-break' src={LineBreak} />
                  </div>
                </div>
                <div className='spacer-xs' />
                <br />

                { section.map((item, index) => {
                  return <BodySection
                    item={item}
                    key={'body-'.concat(index)}
                  />;
                })}

                <br />
                <br />
                { redirect &&
                <div className='wow fadeIn'>
                  <p className='serif'>Next Work →</p>
                  <h3><Link className='bigstrike' href={nextURL} to={nextURL}>{nextTitle}</Link></h3>
                </div>}
                <div className='spacer-sm' />
              </div>
            </div>
            <div className='flex-container container'>
              <br />
              <br />
              <div className='col-md-12 fixed-bottom' />
            </div>
          </div>
          <div id='bottom' />
        </div>
      </div>
    );
  }
}

WorkTemplate.propTypes = {
  background: PropTypes.string.isRequired,
  hideLoader: PropTypes.func,
  nextTitle: PropTypes.string.isRequired,
  nextURL: PropTypes.string.isRequired,
  redirect: PropTypes.bool,
  section: PropTypes.arrayOf(PropTypes.element).isRequired,
  title: PropTypes.string.isRequired,
};

WorkTemplate.defaultProps = {
  hideLoader: () => {},
  redirect: true,
};

export default WorkTemplate;
