import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../../../../web/assets/line-break.png';
import './style.scss';

class TextSection extends PureComponent {
  render() {
    const { children, bottomSpacer, bottomPadding } = this.props;
    return (
      <div className="text-section wow fadeIn" data-wow-duration="1s">
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
  children: PropTypes.element.isRequired,
  bottomSpacer: PropTypes.bool,
  bottomPadding: PropTypes.bool,
};

TextSection.defaultProps = {
  bottomSpacer: true,
  bottomPadding: false,
};

export default TextSection;
