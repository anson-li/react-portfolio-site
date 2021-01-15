import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LineBreak from '../../../../web/assets/line-break.png';
import BoxLink from '../BoxLink';

class ProjectTemplate extends PureComponent {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false,
    }).init();
  }

  render() {
    const {
      title, description, lineBreak, internalLink, externalLink,
    } = this.props;
    return (
      <div className="wow fadeIn">
        <h3>{title}</h3>
        <br />

        <div className="col-md-12 no-padding">
          <div className="col-md-6 no-padding">
            <p>
              {description}
            </p>
            <br />
          </div>
        </div>
        <div className="col-md-12 no-padding">
          <div className="col-md-6 no-padding">
            <p>
              <BoxLink
                internalLink={internalLink}
                externalLink={externalLink}
              />
            </p>
            <div className="spacer-xs" />
          </div>
        </div>
        <div className="col-md-12 no-padding">
          { lineBreak && (
            <div className="center-sm paddingtop-0">
              <img className="line-break" src={LineBreak} alt="Line break" />
            </div>
          )}
          <div className="spacer-xs" />
        </div>
      </div>
    );
  }
}

ProjectTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  lineBreak: PropTypes.bool,
  internalLink: PropTypes.string,
  externalLink: PropTypes.string,
};

ProjectTemplate.defaultProps = {
  lineBreak: false,
  internalLink: null,
  externalLink: null,
};

export default ProjectTemplate;
