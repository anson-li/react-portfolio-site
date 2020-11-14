import React, { PureComponent } from 'react';
import Loader from '../../common/Loader';
import Border from '../../common/Border'; 
import Background from '../../common/Background';
import MainLogo from '../../common/MainLogo';
import TopNavigation from '../../common/TopNavigation';
import MobileNavigation from '../../common/MobileNavigation';
import ThreeSphere from '../../common/ThreeSphere';
import MainText from './components/MainText';

class Home extends PureComponent {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Loader />
        <Background />
        <div className="fixed">
          <Border />
          <TopNavigation />
          <MobileNavigation />
          <ThreeSphere />
          <MainLogo />
          <MainText />
      </div>
    </div>
    );
  }
}

export default Home;
