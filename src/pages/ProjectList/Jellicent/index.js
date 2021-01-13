import React, { PureComponent } from 'react';
import Background from '../../../common/Background';
import JellicentObject from './components/JellicentObject';

class Jellicent extends PureComponent {
  render() {
    return (
      <div id="main-page">
        <Background />
        <div className="fixed">
          <JellicentObject />
        </div>
      </div>
    );
  }
}

export default Jellicent;
