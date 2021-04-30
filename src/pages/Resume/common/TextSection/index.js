import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../../../../web/assets/line-break.png';
import './style.scss';

class TextSection extends PureComponent {
  render () {
    const {
      children, bottomSpacer, bottomPadding, animated,
    } = this.props;
    const wow = animated ? 'wow' : '';

    return (
      <div className={`text-section fadeIn ${wow}`} data-wow-duration='1s'>
        <div className='col-md-12'>
          { children }
        </div>
        { bottomSpacer ? <img alt='Line separator' className='line-break' src={LineBreak} /> : null }
        { bottomPadding ? <div className='section-spacer' /> : null }
      </div>
    );
  }
}

TextSection.propTypes = {
  animated: PropTypes.bool,
  bottomPadding: PropTypes.bool,
  bottomSpacer: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

TextSection.defaultProps = {
  animated: true,
  bottomPadding: false,
  bottomSpacer: true,
};

export default TextSection;
