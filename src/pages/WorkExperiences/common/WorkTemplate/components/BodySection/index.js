import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

import LineBreak from '../../../../../../web/assets/line-break.png';

class BodySection extends PureComponent {
  render () {
    const {item} = this.props;

    return (
      <div>
        {item}
        <br />
        <br />
        <br />
        <div className='col-md-12 wow fadeIn'>
          <div className='center-sm paddingtop-0'>
            <img alt='Line break' className='line-break' src={LineBreak} />
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
