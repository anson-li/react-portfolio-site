import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { PureComponent } from 'react';
import {
  TransitionGroup,
  CSSTransition as Transition,
} from 'react-transition-group';

import Home from './pages/Home';
import WorkList from './pages/WorkList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import WorkExperiences from './pages/WorkExperiences';

import Jellicent from './pages/ProjectList/Jellicent';

const getHomeTimeline = (node, delay) => {
  // const timeline = new Timeline({ paused: true });
  // const texts = node.querySelectorAll('h1 > div');

  // timeline
  //   .from(node, 0, { display: 'none', autoAlpha: 0, delay })
  //   .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  // return timeline;
};

const getDefaultTimeline = (node, delay) => {
  // const timeline = new Timeline({ paused: true });
  // const texts = node.querySelectorAll('h1 > div');

  // timeline
  //   .from(node, 0, { display: 'none', autoAlpha: 0, delay })
  //   .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  // return timeline;
};

const play = (pathname, node, appears) => {
  // const delay = appears ? 0 : 0.5;
  // let timeline;

  // if (pathname === '/') {
  //   timeline = getHomeTimeline(node, delay);
  // } else {
  //   timeline = getDefaultTimeline(node, delay);
  // }
  // timeline.play();
};

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Route render={({ location }) => {
          const { pathname, key } = location;
          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear
                // onEnter={(node, appears) => play(pathname, node, appears)}
                // timeout={{enter: 750, exit: 0}}
              >
                <Switch location={location}>
                  <Route path="/workexp" component={WorkExperiences} />
                  <Route path="/work" component={WorkList} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/jellicent" component={Jellicent} />
                  <Route path="/" component={Home} />
                </Switch>
              </Transition>
            </TransitionGroup>
          );
        }}
        />
      </Router>
    );
  }
}

export default App;
