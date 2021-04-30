import React, {
  PureComponent,
} from 'react';
import WOW from 'wowjs';
import {
  Link,
} from 'react-router-dom';

import DarkBackground from '../../../../web/assets/background/bg-index-dev-dark.png';
import FadeText from '../../../../common/FadeText';

class MainText extends PureComponent {
  componentDidMount () {
    new WOW.WOW({
      animateClass: 'animated',
      boxClass: 'wow',
      live: false,
      mobile: true,
      offset: 0,
    }).init();
  }

  render () {
    return (
      <div className='full-page'>
        <div className='flex-container container '>
          <div className='col-md-12 mid-center'>
            <img alt='Background subfill' className='background-dev-dark' src={DarkBackground} />
            <div className='spacer-sm d-lg-none' />
            <FadeText
              id='main-text'
              text="Hey - I'm Anson Li, and I am a software engineer at ATB."
              type='h1'
            />
            <Link href='work' id='sub-link' to='/work'>
              <FadeText
                base={1800}
                className='strikethrough'
                id='sub-text'
                text="Let's take a look →"
                type='h6'
              />
            </Link>
          </div>
        </div>
        <div className='col-md-12 fixed-bottom'>
          <p className='item'>
            <span className='serif wow fadeIn d-none d-lg-block' data-wow-delay='0.5s' data-wow-duration='1s'>hello@anson.li</span>
          </p>
        </div>
      </div>
    );
  }
}

export default MainText;
