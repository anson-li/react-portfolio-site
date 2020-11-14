import React, { PureComponent } from 'react';

class TextBody extends PureComponent {
  render() {
    return (
      <div>
        <br />
        <p>
          <span className="wow fadeIn" data-wow-duration="0.5s">
            {this.props.children}
          </span>
        </p>
      </div>
    );
  }
}

export default TextBody;