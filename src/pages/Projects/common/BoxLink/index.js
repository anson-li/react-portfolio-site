import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class BoxLink extends PureComponent {
  render() {
    return (
      <div className="box-outline">
        { this.props.internalRef
        && (
        <Link to={this.props.interalRef} href={this.props.href}>
          <h4 className="box-title">{this.props.title}</h4>
          <div className="box-description">{this.props.description}</div>
        </Link>
        )}
        { this.props.externalRef
        && (
        <a href={this.props.externalRef}>
          <h4 className="box-title">{this.props.title}</h4>
          <div className="box-description">{this.props.description}</div>
        </a>
        )}
      </div>
    );
  }
}

export default BoxLink;
