import React, {
  PureComponent,
} from 'react';
import WOW from 'wowjs';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import LineBreak from '../../../../web/assets/line-break.png';

class WorkTemplate extends PureComponent {
  componentDidMount () {
    new WOW.WOW({
      animateClass: 'animated',
      boxClass: 'wow',
      live: false,
      mobile: true,
      offset: 0,
    }).init();
  }

  render () {
    const {
      title, description, panel, link, lineBreak, animated, afterLoad,
    } = this.props;
    const wow = animated ? 'wow' : '';

    return (
      <div className={` ${wow} fadeIn`}>
        <h3>{title}</h3>
        <br />

        <div className='col-md-12 no-padding'>
          <div className='col-md-6 no-padding'>
            <p>
              {description}
            </p>
            <div className='spacer-xs' />
          </div>
        </div>
        <img
          alt={`${title} Panel`}
          className='img-panel'
          onLoad={afterLoad}
          ref={(ref) => {
            this.panelImage = ref;
          }}
          src={panel}
        />
        <div className='col-md-12 no-padding'>
          <div className='col-md-6 no-padding'>
            <div className='spacer-xs' />
            <p>
              <Link className='btn' href={link} to={link}>
                View case study
              </Link>
            </p>
            <div className='spacer-xs' />
          </div>
        </div>
        <div className='col-md-12 no-padding'>
          <div className='visible-xs'>
            <div className='spacer-xs' />
          </div>
          { lineBreak &&
          <div className='center-sm paddingtop-0'>
            <img alt='Line break' className='line-break' src={LineBreak} />
          </div>}
          <div className='spacer-xs' />
          <div className='visible-xs'>
            <div className='spacer-xs' />
          </div>
        </div>
      </div>
    );
  }
}

WorkTemplate.propTypes = {
  afterLoad: PropTypes.func,
  animated: PropTypes.bool,
  description: PropTypes.string.isRequired,
  lineBreak: PropTypes.bool,
  link: PropTypes.string.isRequired,
  panel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

WorkTemplate.defaultProps = {
  afterLoad: () => {},
  animated: true,
  lineBreak: false,
};

export default WorkTemplate;
