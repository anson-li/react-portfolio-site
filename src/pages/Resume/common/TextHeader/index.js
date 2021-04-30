import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

class TextHeader extends PureComponent {
  render () {
    const {text} = this.props;

    return (
      <h3 className='center-sm paddingtop-0'>
        {text}
      </h3>
    );
  }
}

TextHeader.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default TextHeader;
