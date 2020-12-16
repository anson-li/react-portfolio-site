import React, { PureComponent } from 'react';
import WOW from 'wowjs';
import DarkBackground from '../../../web/assets/background/bg-index-dev-dark.png';
import FadeText from '../../../common/FadeText';

class MainText extends PureComponent {
  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false
    }).init();
  }

  render() {
    return (
      <div className="full-page">
        <div className="flex-container container ">
          <div className="col-md-12 mid-center">
          <img className="background-dev-dark" src={DarkBackground} alt="Background subfill"/>
            <div className="spacer-sm d-lg-none"></div>
            <FadeText
              type="h1"
              id="main-text"
              text="Hey - I'm Anson Li, and I am a software engineer at ATB."
            />
            <a id="sub-link" href="work">
              <FadeText
                type="h7"
                id="sub-text"
                className="strikethrough"
                text="Let's take a look →"
                base={1800}
              />
            </a>
          </div>
        </div>
        <div className="col-md-12 fixed-bottom">
          <p className="item">
            <span className="serif wow fadeIn d-none d-lg-block" data-wow-duration="1s" data-wow-delay="0.5s">hello@ansonli.ca</span>
          </p>
        </div>
      </div>
    );
  }
}

export default MainText;