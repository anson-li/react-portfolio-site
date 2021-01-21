/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { matchPath } from 'react-router-dom';
import PropTypes from 'prop-types';

import Border from './common/Border';
import MainLogo from './common/MainLogo';
import CustomCursor from './common/CustomCursor';

class App extends PureComponent {
  matchPath = (path) => matchPath(window.location.pathname, path);

  constructor(props) {
    super(props);
    this.onCursorHover = this.onCursorHover.bind(this);
    this.onCursorUnhover = this.onCursorUnhover.bind(this);
    this.cursor = React.createRef();
  }

  onCursorHover() {
    console.log('Hit appjs');
    this.cursor.current.hoverFunc();
  };

  onCursorUnhover() {
    this.cursor.current.unhoverFunc();
  }

  render() {
    const { routes } = this.props;
    return (
      <div id="app">
        <CustomCursor ref={this.cursor} />
        <div className="fixed-header">
          <Border 
            cursorHover = {this.onCursorHover}
            cursorUnhover = {this.onCursorUnhover}
          />
          <MainLogo 
            cursorHover = {this.onCursorHover}
            cursorUnhover = {this.onCursorUnhover}
          />
        </div>
        <TransitionGroup id="content">
          { routes
            .filter(({ path }) => this.matchPath(path))
            .map(({ Component, key }) => (
              <Component
                key={key}
                cursorHover = {this.onCursorHover}
                cursorUnhover = {this.onCursorUnhover}
              />
            ))}
        </TransitionGroup>
      </div>
    );
  }
}

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  routes: [],
};

export default App;
