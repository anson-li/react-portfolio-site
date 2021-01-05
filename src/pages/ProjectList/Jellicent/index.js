import React, { PureComponent } from 'react';
import Loader from '../../../common/Loader';
import Border from '../../../common/Border'; 
import Background from '../../../common/Background';
import MainLogo from '../../../common/MainLogo';
import Navigation from '../../../common/Navigation';
import JellicentObject from './components/JellicentObject';
import MainText from '../../Home/components/MainText';

class Jellicent extends PureComponent {
  render() {
    return (
      <div id="main-page">
        <Loader />
        <Background />
        <div className="fixed">
          <Border 
            scroll={false}
          />
          <Navigation />
          <JellicentObject />
      </div>
    </div>
    );
  }
}

export default Jellicent;
