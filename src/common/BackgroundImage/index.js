import React, { PureComponent } from 'react';
import './style.scss';

class BackgroundImage extends PureComponent {
  render() {
    const { src, alt } = this.props;
    return (
      <img className="bg-img" src={src} alt={alt} />
    );
  }
}

export default BackgroundImage;
