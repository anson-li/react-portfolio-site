import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TweenLite } from 'gsap';

import './style.scss';

class BannerLink extends PureComponent {
  constructor(props) {
    super(props);
    this.showDescription = this.showDescription.bind(this);
    this.hideDescription = this.hideDescription.bind(this);
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
    }).init();
  }

  showDescription(description) {
    TweenLite.to(this.bannerlink, 0.1, {
      color: '#ffd5a8',
    });
    this.props.showDescription(description);
  }

  hideDescription() {
    TweenLite.to(this.bannerlink, 0.1, {
      color: '#ffffff',
    });
    this.props.hideDescription();
  }

  render() {
    const {
      title, date, description, internalLink, externalLink,
    } = this.props;
    return (
      <div className="wow fadeIn banner-link">
        <p>
          { internalLink
          && (
            <Link
              onMouseEnter={() => this.showDescription(description)}
              onMouseLeave={() => this.hideDescription()}
              to={internalLink}
              href={internalLink}>
              <span ref={(e) => { this.bannerlink = e; }}>
                <span className="project-description">{title}</span>
                <span className="project-date">{date}</span>
              </span>
            </Link>
          )}
          { externalLink
          && (
            <a
              href={externalLink}
              onMouseEnter={() => this.showDescription(description)}
              onMouseLeave={() => this.hideDescription()}>
              <span ref={(e) => { this.bannerlink = e; }}>
                <span className="project-description">{title}</span>
                <span className="project-date">{date}</span>
              </span>
            </a>
          )}
        </p>
        <br />
      </div>
    );
  }
}

BannerLink.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  internalLink: PropTypes.string,
  externalLink: PropTypes.string,
};

BannerLink.defaultProps = {
  internalLink: null,
  externalLink: null,
};

export default BannerLink;
