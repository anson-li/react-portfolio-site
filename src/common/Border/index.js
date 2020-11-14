import React, { PureComponent } from 'react';

class Border extends PureComponent {
  render() {
    return (
      <div>
        <div id="left" />
        <div id="right" />
        <div id="top" />
        <div id="bottom" /> 
      </div>
    );
  }
}

export default Border;