import React, { PureComponent } from 'react';
import { Link }from 'react-router-dom';

import './style.scss';

class BoxLink extends PureComponent {
  render() {
    return (
      <div className="box-outline">
        <Link to={this.props.href} href={this.props.href}>{this.props.text}</Link>
      </div>
    );
  }
}

export default BoxLink;