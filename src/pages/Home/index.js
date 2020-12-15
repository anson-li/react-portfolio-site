import React, { PureComponent } from 'react';
import Loader from '../../common/Loader';
import Border from '../../common/Border'; 
import Background from '../../common/Background';
import MainLogo from '../../common/MainLogo';
import Navigation from '../../common/Navigation';
import ThreeSphere from '../../common/ThreeSphere';
import MainText from './components/MainText';

class Home extends PureComponent {
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
          <ThreeSphere />
          <MainLogo />
          <MainText />
      </div>
    </div>
    );
  }
}

export default Home;
