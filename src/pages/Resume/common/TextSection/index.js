import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../../../../web/assets/line-break.png';
import './style.scss';

class TextSection extends PureComponent {
  render() {
    return (
      <div className="text-section wow fadeIn" data-wow-duration="1s">
        <div className="col-md-12">
          { this.props.children }
        </div>
        { this.props.bottomSpacer ? <img className="line-break" src={LineBreak} alt="Line separator" /> : null }
        { this.props.bottomPadding ? <div className="section-spacer" /> : null }
      </div>
    );
  }
}

TextSection.propTypes = {
  bottomSpacer: PropTypes.bool,
  bottomPadding: PropTypes.bool,
};

TextSection.defaultProps = {
  bottomSpacer: true,
  bottomPadding: false,
};

export default TextSection;
