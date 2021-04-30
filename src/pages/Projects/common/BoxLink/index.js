import React, {
  PureComponent,
} from 'react';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

class BoxLink extends PureComponent {
  render () {
    const {
      internalLink, externalLink,
    } = this.props;

    return (
      <>
        { internalLink &&
          <Link className='btn' href={internalLink} to={internalLink}>View case study</Link>}
        { externalLink &&
          <a className='btn' href={externalLink}>View case study</a>}
      </>
    );
  }
}

BoxLink.propTypes = {
  externalLink: PropTypes.string,
  internalLink: PropTypes.string,
};

BoxLink.defaultProps = {
  externalLink: null,
  internalLink: null,
};

export default BoxLink;
