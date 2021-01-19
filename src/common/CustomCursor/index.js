import React, { PureComponent } from 'react';
import { TweenLite, Power0 } from "gsap";

import "./style.scss";

class CustomCursor extends PureComponent {
  constructor(props) {
    super(props);
    this.moveCircle = this.moveCircle.bind(this);
    this.hoverFunc = this.hoverFunc.bind(this);
    this.unhoverFunc = this.unhoverFunc.bind(this);
    this.circleTween = null;
    this.followTween = null;
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.moveCircle);
    window.addEventListener("scroll", this.onScroll);
  }

  moveCircle(e) {
    console.log(e);
    TweenLite.to(this.circle, 0.3, {
      x: e.x,
      y: e.y,
    });
    TweenLite.to(this.follow, 0.7, {
      x: e.x,
      y: e.y,
    });
  }
  
  hoverFunc(e) {
    TweenLite.to(this.circle, 0.3, {
      opacity: 1,
      scale: 0
    });
    TweenLite.to(this.follow, 0.3, {
      scale: 3
    });  
  }

  unhoverFunc(e) {
    TweenLite.to(this.circle, 0.3, {
      opacity: 1,
      scale: 1,
    });
    TweenLite.to(this.follow, 0.3, {
      scale: 1,
    });  
  }

  onScroll(e) {
    console.log(e);
    TweenLite.to(this.circle, 0.3, {
      x: e.x,
      y: e.y,
    });
    TweenLite.to(this.follow, 0.7, {
      x: e.x,
      y: e.y,
    });
  }

  render() {
    return (
      <>
        <div className="cursor-circle" ref={ref => (this.circle = ref)} />
        <div className="cursor-circle-follow" ref={ref => (this.follow = ref)}/>
      </>
    );
  }
}

export default CustomCursor;
