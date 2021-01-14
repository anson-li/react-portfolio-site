/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */

// Built from https://codesandbox.io/s/mz6rz6zw3x?file=/src/sections/About.js
import React from 'react';
import { Transition } from 'react-transition-group';

export default function withTransition(WrappedComponent) {
  return class extends React.Component {
    handleAnimateIn(done) {
      const doNotScroll = ['Home', 'Jellicent'];
      if (typeof this.wrappedComponent.animateIn === 'function') {
        if (!doNotScroll.includes(this.wrappedComponent.constructor.name)) {
          window.scrollTo(0, 0);
        }
        const promise = this.wrappedComponent.animateIn();
        if (promise && typeof promise.then === 'function') {
          promise.then(done);
        } else {
          done();
        }
      }
    }

    handleAnimateOut(done) {
      const next = () => {
        if (done) done();
      };
      if (typeof this.wrappedComponent.animateOut === 'function') {
        const promise = this.wrappedComponent.animateOut();
        if (promise && typeof promise.then === 'function') {
          promise.then(next);
        } else {
          next();
        }
      } else {
        next();
      }
    }

    render() {
      return (
        <Transition
          {...this.props}
          addEndListener={(node, done) => {
            // eslint-disable-next-line react/prop-types
            if (this.props.in) {
              this.handleAnimateIn(done);
            } else {
              this.handleAnimateOut(done);
            }
          }}
        >
          {(status) => (
            <WrappedComponent
              ref={(e) => { this.wrappedComponent = e; }}
              {...this.props}
              transitionStatus={status}
            />
          )}
        </Transition>
      );
    }
  };
}
