import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextBody extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <br />
        <span>
          {children}
        </span>
      </div>
    );
  }
}

TextBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TextBody;
