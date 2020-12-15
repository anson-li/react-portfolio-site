import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { PureComponent } from 'react';

import Home from './pages/Home';
import WorkList from './pages/WorkList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import Questionmark from './pages/WorkExperiences/Questionmark';
import CrudeMonitor from './pages/WorkExperiences/CrudeMonitor';
import SSCTE from './pages/WorkExperiences/SSCTE';
import DailyUI from './pages/WorkExperiences/DailyUI';
import TeamAqua from './pages/WorkExperiences/TeamAqua';
import AlbertaMES from './pages/WorkExperiences/AlbertaMES';

class App extends PureComponent {
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/albertames" component={AlbertaMES} />
              <Route path="/teamaqua" component={TeamAqua} />
              <Route path="/dailyui" component={DailyUI} />
              <Route path="/sscte" component={SSCTE} />
              <Route path="/crudemonitor" component={CrudeMonitor} />
              <Route path="/questionmark" component={Questionmark} />
              <Route path="/work" component={WorkList} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
          </Switch>
      </Router>
    );
  }
}

export default App;
