import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Border extends PureComponent {
  render() {
    return (
      <div>
        <div id="left" />
        <div id="right" />
        <div id="top">
        { this.props.scroll ? (
            <div className="col-md-12 top-center d-none d-sm-block">
              <h5 className="connect">
                <Link to={'/resume'} className="strikethrough top-item" href="resume">Resume</Link>
                <Link to={'/work'} className="strikethrough top-item">Work</Link>
                <Link to={'/contact'} className="strikethrough top-item">Contact</Link>
                <Link to={'/projects'} className="strikethrough project">Projects</Link>
              </h5>
          </div>
          ) : null
        }
        </div>
        { this.props.scroll ? null : <div id="bottom" /> }
      </div>
    );
  }
}

Border.propTypes = {
  scroll: PropTypes.bool,
};

Border.defaultProps = {
  scroll: true,
};

export default Border;