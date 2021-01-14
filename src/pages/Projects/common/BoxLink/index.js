import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

class BoxLink extends PureComponent {
  render() {
    const {
      internalRef, externalRef, title, description,
    } = this.props;
    return (
      <div className="box-outline">
        { internalRef
        && (
        <Link to={internalRef} href={internalRef}>
          <h4 className="box-title">{title}</h4>
          <div className="box-description">{description}</div>
        </Link>
        )}
        { externalRef
        && (
        <a href={externalRef}>
          <h4 className="box-title">{title}</h4>
          <div className="box-description">{description}</div>
        </a>
        )}
      </div>
    );
  }
}

BoxLink.propTypes = {
  internalRef: PropTypes.string,
  externalRef: PropTypes.string,
  title: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired,
};

BoxLink.defaultProps = {
  internalRef: '',
  externalRef: '',
};

export default BoxLink;
