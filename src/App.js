import { Route, BrowserRouter as Router } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { TransitionGroup } from 'react-transition-group';

import Home from './pages/Home';
import WorkList from './pages/WorkList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import WorkExperiences from './pages/WorkExperiences';

import Jellicent from './pages/ProjectList/Jellicent';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <TransitionGroup id="content">
          <Route path="/workexp" component={WorkExperiences} />
          <Route path="/work" component={WorkList} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/jellicent" component={Jellicent} />
          <Route path="/" exact component={Home} />
        </TransitionGroup>
      </Router>
    );
  }
}

export default App;
