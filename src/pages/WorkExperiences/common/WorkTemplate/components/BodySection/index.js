import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../../../../../../web/assets/line-break.png';

class BodySection extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <div>
        {item}
        <br />
        <br />
        <br />
        <div className="col-md-12 wow fadeIn">
          <div className="center-sm paddingtop-0">
            <img className="line-break" src={LineBreak} alt="Line break" />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

BodySection.propTypes = {
  item: PropTypes.element.isRequired,
};

export default BodySection;
