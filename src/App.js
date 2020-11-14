import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { PureComponent } from 'react';

import Home from './pages/Home';
import Work from './pages/Work';
import Resume from './pages/Resume';

class App extends PureComponent {
  render() {
    return (
      <Router>
          <Switch>
              <Route path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/resume" component={Resume} />
          </Switch>
      </Router>
    );
  }
}

export default App;
