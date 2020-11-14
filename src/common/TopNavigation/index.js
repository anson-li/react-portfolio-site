
import React, { PureComponent } from 'react';

class TopNavigation extends PureComponent {
  render() {
    return (
      <div className="col-md-12 top-center hidden-xs">
        <h5><a className="strikethrough" href="resume">Resume</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="strikethrough"  href="work" >Work</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="strikethrough"  href="contact">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
      </div>
    );
  }
}

export default TopNavigation;