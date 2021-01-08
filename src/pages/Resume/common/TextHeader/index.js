import React, { PureComponent } from 'react';

class TextHeader extends PureComponent {
  render() {
    return (
      <h3 className="center-sm paddingtop-0">
        {this.props.text}
      </h3>
    );
  }
}

export default TextHeader;
