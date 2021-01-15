import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LineBreak from '../../../../web/assets/line-break.png';

class WorkTemplate extends PureComponent {
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
      title, description, panel, link, lineBreak,
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
            <div className="spacer-xs" />
          </div>
        </div>
        <img className="img-panel" src={panel} alt={`${title} Panel`} />
        <div className="col-md-12 no-padding">
          <div className="col-md-6 no-padding">
            <div className="spacer-xs" />
            <p>
              <Link to={link} href={link} className="btn">View case study</Link>
            </p>
            <div className="spacer-xs" />
          </div>
        </div>
        <div className="col-md-12 no-padding">
          <div className="visible-xs">
            <div className="spacer-xs" />
          </div>
          { lineBreak && (
            <div className="center-sm paddingtop-0">
              <img className="line-break" src={LineBreak} alt="Line break" />
            </div>
          )}
          <div className="spacer-xs" />
          <div className="visible-xs">
            <div className="spacer-xs" />
          </div>
        </div>
      </div>
    );
  }
}

WorkTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  panel: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  lineBreak: PropTypes.bool,
};

WorkTemplate.defaultProps = {
  lineBreak: false,
};

export default WorkTemplate;
