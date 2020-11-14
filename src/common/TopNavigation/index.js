
import React, { PureComponent } from 'react';

class TopNavigation extends PureComponent {
  render() {
    return (
      <div className="col-md-12 top-center hidden-xs">
        <h5><a className="strikethrough" href="resume.html">Resume</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="strikethrough"  href="work.html" >Work</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="strikethrough"  href="contact.html">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5>
      </div>
    );
  }
}

export default TopNavigation;