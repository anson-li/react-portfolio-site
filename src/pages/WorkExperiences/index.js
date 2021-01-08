import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { PureComponent } from 'react';

import Questionmark from './Questionmark';
import CrudeMonitor from './CrudeMonitor';
import SSCTE from './SSCTE';
import DailyUI from './DailyUI';
import TeamAqua from './TeamAqua';
import AlbertaMES from './AlbertaMES';

class WorkExperiences extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/workexp/albertames" component={AlbertaMES} />
          <Route path="/workexp/teamaqua" component={TeamAqua} />
          <Route path="/workexp/dailyui" component={DailyUI} />
          <Route path="/workexp/sscte" component={SSCTE} />
          <Route path="/workexp/crudemonitor" component={CrudeMonitor} />
          <Route path="/workexp/questionmark" component={Questionmark} />
        </Switch>
      </Router>
    );
  }
}

export default WorkExperiences;
