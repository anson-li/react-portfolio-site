import React, { PureComponent } from 'react';

class TextBody extends PureComponent {
  render() {
    return (
      <div>
        <br />
        <p>
          <span>
            {this.props.children}
          </span>
        </p>
      </div>
    );
  }
}

export default TextBody;