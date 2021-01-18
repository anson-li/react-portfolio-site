import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../../../../web/assets/line-break.png';
import './style.scss';

class TextSection extends PureComponent {
  render() {
    const { children, bottomSpacer, bottomPadding, animated } = this.props;
    const wow = animated ? 'wow' : '';
    return (
      <div className={`text-section fadeIn ${wow}`} data-wow-duration="1s">
        <div className="col-md-12">
          { children }
        </div>
        { bottomSpacer ? <img className="line-break" src={LineBreak} alt="Line separator" /> : null }
        { bottomPadding ? <div className="section-spacer" /> : null }
      </div>
    );
  }
}

TextSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  bottomSpacer: PropTypes.bool,
  bottomPadding: PropTypes.bool,
  animated: PropTypes.bool,
};

TextSection.defaultProps = {
  bottomSpacer: true,
  bottomPadding: false,
  animated: true,
};

export default TextSection;
