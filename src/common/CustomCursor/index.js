import React, { PureComponent } from 'react';
import { TweenLite, Power0 } from "gsap";

import "./style.scss";

class CustomCursor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0,
    };
    this.moveCircle = this.moveCircle.bind(this);
    this.hoverFunc = this.hoverFunc.bind(this);
    this.unhoverFunc = this.unhoverFunc.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.moveCircle);
    window.addEventListener("scroll", this.onScroll);
  }

  moveCircle(e) {
    TweenLite.to(this.circle, 0.3, {
      x: e.clientX,
      y: e.clientY + window.pageYOffset
    });
    TweenLite.to(this.follow, 0.7, {
      x: e.clientX,
      y: e.clientY + window.pageYOffset
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
      scale: 1
    });
    TweenLite.to(this.follow, 0.3, {
      scale: 1
    });  
  }

  onScroll = (e) => {
    // FIXME: Fix scroll behavior to properly move smoothly
    // const { scrollY } = this.state;
    // console.log(window.pageYOffset - scrollY);
    // TweenLite.to(this.circle, 0.1, {
    //   y: "+=10", // + (window.pageYOffset - scrollY),
    // });
    // TweenLite.to(this.follow, 0.1, {
    //   y: "+=" + (window.pageYOffset - scrollY),
    // });
    // this.setState({
    //   scrollY: window.pageYOffset,
    // });
  };

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
