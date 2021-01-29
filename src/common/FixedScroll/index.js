import React, { PureComponent } from 'react';
import './style.scss';
import { TweenLite, Power0 } from "gsap";

class FixedScroll extends PureComponent {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    TweenLite.to(this.fixedScroll, 1, {
      y: window.pageYOffset * 0.8,
      ease: Power0,
      backfaceVisibility: "hidden",
    });
  };

  render() {
    const { text } = this.props;
    return (
      <div className="horizontal d-none d-sm-block" ref={ref => (this.fixedScroll = ref)}><p>{text}</p></div>
    );
  }
}

export default FixedScroll;
