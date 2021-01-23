import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

class BannerLink extends PureComponent {
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
      title, description, internalLink, externalLink, showDescription, hideDescription,
    } = this.props;
    return (
      <div className="wow fadeIn banner-link">
        <h6>
          { internalLink
          && (
            <Link
              onMouseEnter={() => showDescription(description)}
              onMouseLeave={() => hideDescription()}
              to={internalLink}
              href={internalLink}>
              {title}
            </Link>
          )}
          { externalLink
          && (
            <a
              href={externalLink}
              onMouseEnter={() => showDescription(description)}
              onMouseLeave={() => hideDescription()}>
              {title}
            </a>
          )}
        </h6>
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
