import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { PureComponent } from 'react';

import Home from './pages/Home';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

class App extends PureComponent {
  render() {
    return (
      <Router>
          <Switch>
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
