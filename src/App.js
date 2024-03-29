import React, {
  PureComponent,
} from 'react';
import {
  TransitionGroup,
} from 'react-transition-group';
import {
  matchPath,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Border from './common/Border';
import MainLogo from './common/MainLogo';
import Loader from './common/Loader';

class App extends PureComponent {
  constructor (props) {
    super(props);
    this.showLoader = this.showLoader.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
    this.loader = React.createRef();
  }

  matchPath = (path) => {
    return matchPath(window.location.pathname, path);
  };

  showLoader () {
    this.loader.current.fadeIn();
  }

  hideLoader () {
    this.loader.current.fadeOut();
  }

  render () {
    const {routes} = this.props;

    return (
      <div id='app'>
        <div className='fixed-header'>
          <Border />
          <MainLogo />
        </div>
        <Loader ref={this.loader} />
        <TransitionGroup id='content'>
          { routes
            .filter(({path}) => {
              return this.matchPath(path);
            })
            .map(({Component, key}) => {
              return <Component
                hideLoader={this.hideLoader}
                key={key}
                showLoader={this.showLoader}
              />;
            })}
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
