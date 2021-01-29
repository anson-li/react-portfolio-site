import React, { PureComponent } from 'react';
import './style.scss';
import { TweenLite, Power0 } from "gsap";

class FixedScroll extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0,
    };
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
        
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = this.getDocHeight();
  
    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPosition = Math.ceil(scrollTop / totalDocScrollLength * 100);
    this.setState({ scrollPosition });

    if (scrollPosition > 95) {
      TweenLite.to(this.fixedScroll, 1, {
        opacity: 0,
      });
    } else if (scrollPosition < 95) {
      TweenLite.to(this.fixedScroll, 1, {
        opacity: 1,
      });
    }
  };

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight,
    );
  }

  render() {
    const { text } = this.props;
    return (
      <div className="horizontal d-none d-sm-block" ref={ref => (this.fixedScroll = ref)}><p>{text}</p></div>
    );
  }
}

export default FixedScroll;
