import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { PureComponent } from 'react';

import Home from './pages/Home';
import WorkList from './pages/WorkList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import Questionmark from './pages/WorkExperiences/Questionmark';
import CrudeMonitor from './pages/WorkExperiences/CrudeMonitor';
import SSCTE from './pages/WorkExperiences/SSCTE';
import DailyUI from './pages/WorkExperiences/DailyUI';
import TeamAqua from './pages/WorkExperiences/TeamAqua';
import AlbertaMES from './pages/WorkExperiences/AlbertaMES';

import WorkExperiences from './pages/WorkExperiences';

import Jellicent from './pages/ProjectList/Jellicent';

class App extends PureComponent {
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/workexp" component={WorkExperiences} /> 
              <Route path="/work" component={WorkList} />
              <Route path="/resume" component={Resume} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
              <Route path="/jellicent" component={Jellicent} />
              <Route path="/" component={Home} />
          </Switch>
      </Router>
    );
  }
}

export default App;
