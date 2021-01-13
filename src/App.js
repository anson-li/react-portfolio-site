/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { matchPath } from 'react-router-dom';
import Border from './common/Border';
import MainLogo from './common/MainLogo';

class App extends PureComponent {
  matchPath = (path) => matchPath(window.location.pathname, path);

  render() {
    return (
      <div id="app">
        <div className="fixed-header">
          <Border />
          <MainLogo />
        </div>
        <TransitionGroup id="content">
          {this.props.routes
            .filter(({ path }) => this.matchPath(path))
            .map(({ Component, key }) => (
              <Component key={key} />
            ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
