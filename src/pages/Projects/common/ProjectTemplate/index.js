import React, {
  PureComponent,
} from 'react';
import WOW from 'wowjs';
import PropTypes from 'prop-types';

import LineBreak from '../../../../web/assets/line-break.png';
import BoxLink from '../BoxLink';

class ProjectTemplate extends PureComponent {
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
      title, description, lineBreak, internalLink, externalLink,
    } = this.props;

    return (
      <div className='wow fadeIn'>
        <h3>{title}</h3>
        <br />

        <div className='col-md-12 no-padding'>
          <div className='col-md-6 no-padding'>
            <p>
              {description}
            </p>
            <br />
          </div>
        </div>
        <div className='col-md-12 no-padding'>
          <div className='col-md-6 no-padding'>
            <p>
              <BoxLink
                externalLink={externalLink}
                internalLink={internalLink}
              />
            </p>
            <div className='spacer-xs' />
          </div>
        </div>
        <div className='col-md-12 no-padding'>
          { lineBreak &&
          <div className='center-sm paddingtop-0'>
            <img alt='Line break' className='line-break' src={LineBreak} />
          </div>}
          <div className='spacer-xs' />
        </div>
      </div>
    );
  }
}

ProjectTemplate.propTypes = {
  description: PropTypes.string.isRequired,
  externalLink: PropTypes.string,
  internalLink: PropTypes.string,
  lineBreak: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

ProjectTemplate.defaultProps = {
  externalLink: null,
  internalLink: null,
  lineBreak: false,
};

export default ProjectTemplate;
