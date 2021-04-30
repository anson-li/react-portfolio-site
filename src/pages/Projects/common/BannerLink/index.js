import React, {
  PureComponent,
} from 'react';
import WOW from 'wowjs';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import {
  TweenLite,
} from 'gsap';

import './style.scss';

class BannerLink extends PureComponent {
  constructor (props) {
    super(props);
    this.showDescription = this.showDescription.bind(this);
    this.hideDescription = this.hideDescription.bind(this);
  }

  componentDidMount () {
    new WOW.WOW({
      animateClass: 'animated',
      boxClass: 'wow',
      live: false,
      mobile: true,
      offset: 0,
    }).init();
  }

  showDescription (description, background, ref) {
    const {showDescription} = this.props;
    TweenLite.to(this.bannerlink, 0.1, {
      color: '#ffd5a8',
    });
    showDescription(description, background, ref);
  }

  hideDescription () {
    const {hideDescription} = this.props;
    TweenLite.to(this.bannerlink, 0.1, {
      color: '#ffffff',
    });
    hideDescription();
  }

  render () {
    const {
      title, date, description, internalLink, externalLink, background, imageref,
    } = this.props;

    return (
      <div className='wow fadeIn banner-link'>
        <p>
          { internalLink &&
          <Link
            href={internalLink}
            onMouseEnter={() => {
              return this.showDescription(description, background, imageref);
            }}
            onMouseLeave={() => {
              return this.hideDescription();
            }}
            to={internalLink}
          >
            <span
              className='project-span' ref={(e) => {
                this.bannerlink = e;
              }}>
              <span className='project-description'>{title}</span>
              <span className='project-date'>{date}</span>
            </span>
          </Link>}
          { externalLink &&
          <a
            href={externalLink}
            onMouseEnter={() => {
              return this.showDescription(description, background, imageref);
            }}
            onMouseLeave={() => {
              return this.hideDescription();
            }}
          >
            <span
              className='project-span' ref={(e) => {
                this.bannerlink = e;
              }}>
              <span className='project-description'>{title}</span>
              <span className='project-date'>{date}</span>
            </span>
          </a>}
        </p>
        <br />
      </div>
    );
  }
}

BannerLink.propTypes = {
  background: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  externalLink: PropTypes.string,
  hideDescription: PropTypes.func.isRequired,
  imageref: PropTypes.object.isRequired,
  internalLink: PropTypes.string,
  showDescription: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

BannerLink.defaultProps = {
  externalLink: null,
  internalLink: null,
};

export default BannerLink;
