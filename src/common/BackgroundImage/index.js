import React, { PureComponent } from 'react';
import './style.scss';
import { TweenLite, Power0 } from "gsap";

class BackgroundImage extends PureComponent {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    console.log('this');
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    console.log('test');
    console.log(window.pageYOffset);
    TweenLite.to(this.backgroundImage, 1, {
      y: window.pageYOffset * 0.3,
      ease: Power0,
    });
  };

  render() {
    const { src, alt } = this.props;
    return (
      <img className="bg-img" src={src} alt={alt} ref={ref => (this.backgroundImage = ref)} />
    );
  }
}

export default BackgroundImage;
