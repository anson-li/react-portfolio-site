import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BoxLink extends PureComponent {
  render() {
    const {
      internalLink, externalLink,
    } = this.props;
    return (
      <div>
        { internalLink
        && (
          <Link to={internalLink} href={internalLink} className="btn">View case study</Link>
        )}
        { externalLink
        && (
          <a href={externalLink} className="btn">View case study</a>
        )}
      </div>
    );
  }
}

BoxLink.propTypes = {
  internalLink: PropTypes.string,
  externalLink: PropTypes.string,
};

BoxLink.defaultProps = {
  internalLink: null,
  externalLink: null,
};

export default BoxLink;
