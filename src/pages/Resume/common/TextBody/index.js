import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextBody extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <br />
        <p>
          <span>
            {children}
          </span>
        </p>
      </div>
    );
  }
}

TextBody.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TextBody;
