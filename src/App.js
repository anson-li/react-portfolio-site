import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { PureComponent } from 'react';

import Home from './pages/Home';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import Questionmark from './pages/Questionmark';
import CrudeMonitor from './pages/CrudeMonitor';
import SSCTE from './pages/SSCTE';
import DailyUI from './pages/DailyUI';
import TeamAqua from './pages/TeamAqua';
import AlbertaMES from './pages/AlbertaMES';

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
              <Route path="/work" component={Work} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
          </Switch>
      </Router>
    );
  }
}

export default App;
