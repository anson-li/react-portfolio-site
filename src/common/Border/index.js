import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Border extends PureComponent {
  render() {
    return (
      <div>
        <div id="left" />
        <div id="right" />
        <div id="top">
        { this.props.scroll ? (
            <div className="col-md-12 top-center hidden-xs">
              <h5 className="connect"><a className="strikethrough" href="resume">Resume</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="strikethrough"  href="work" >Work</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a className="strikethrough"  href="contact">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
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