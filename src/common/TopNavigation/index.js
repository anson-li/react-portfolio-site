
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class TopNavigation extends PureComponent {
  render() {
    return (
      <div className="col-md-12 top-center hidden-xs">
        <h5>
          <Link to={'/resume'} className="strikethrough top-item" href="resume">Resume</Link>
          <Link to={'/work'} className="strikethrough top-item">Work</Link>
          <Link to={'/contact'} className="strikethrough">Contact</Link>
        </h5>
      </div>
    );
  }
}

export default TopNavigation;