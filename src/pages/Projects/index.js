import React, { PureComponent } from 'react';
import anime from 'animejs';
import { TweenLite, gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

import withTransition from '../../common/WithTransition';

import BannerLink from './common/BannerLink';
import SmoothScroll from '../../common/SmoothScroll';
import './style.scss';

gsap.registerPlugin(TextPlugin);

class Projects extends PureComponent {
  constructor(props) {
    super(props);
    this.showDescription = this.showDescription.bind(this);
    this.hideDescription = this.hideDescription.bind(this);
  }

  showDescription(description) {
    console.log(this.description);
    console.log(description);
    TweenLite.to(this.description, 0, {
      text: description
    });
  }

  hideDescription() {
  }

  animateIn() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeOutExpo',
    }).finished;
  }

  animateOut() {
    anime.remove(this.el);
    return anime({
      targets: this.el,
      translateY: -100,
      opacity: 0,
      duration: 0,
      easing: 'easeOutExpo',
    }).finished;
  }

  render() {
    return (
      <SmoothScroll>
        <div id="scroll-page" ref={(e) => { this.el = e; }}>
          <div id="fixed-wrapper" className="fixed-wrapper">
            <div className="main-container">
              <div id="scrollContainer" className="flex-container container ">
                <div className="hide-under col-md-12 left-top">
                  <div className="row">
                    <div className="col">
                      <h3 id="description" ref={(e) => { this.description = e; }}>Placeholder text</h3>
                      <div id="box-image" />
                    </div>
                    <div className="col">
                      <BannerLink
                        title="Jellicent"
                        description="Testing three.js basic React templating with
                          passthroughs, scene design and camera manipulation."
                        internalLink="/jellicent"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                      />
                      <BannerLink
                        title="LTI"
                        description="Learning Interoperability Tool developed for Questionmark systems."
                        externalLink="https://github.com/questionmark/qm-lti"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                      />
                      <BannerLink
                        title="UnleashedBot"
                        description="Support tool developed for ATB for easier processing."
                        internalLink="/jellicent"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                      />
                      <BannerLink
                        title="Flight for Finance"
                        description="Right now, 42% of Canadians are struggling to meet financial commitments."
                        externalLink="https://github.com/questionmark/qm-lti"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                      />
                    </div>
                  </div>                  
                </div>
                <div className="filler-bottom" />
                <div className="spacer-sm" />
              </div>
              <div id="bottom" />
            </div>
          </div>
        </div>
      </SmoothScroll>
    );
  }
}

export default withTransition(Projects);
