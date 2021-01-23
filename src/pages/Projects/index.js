import React, { PureComponent } from 'react';
import anime from 'animejs';
import { TweenLite, gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

import withTransition from '../../common/WithTransition';

import BannerLink from './common/BannerLink';
import SmoothScroll from '../../common/SmoothScroll';
import './style.scss';
import { Tween } from 'gsap/gsap-core';
import DefaultBackground from '../../web/assets/projects/default.jpg';


gsap.registerPlugin(TextPlugin);

class Projects extends PureComponent {
  constructor(props) {
    super(props);
    this.showDescription = this.showDescription.bind(this);
    this.hideDescription = this.hideDescription.bind(this);
  }

  showDescription(description) {
    TweenLite.to(this.description, 0, {
      text: description,
    });
  }

  hideDescription() {
    // TweenLite.to(this.description, 0, {
    //   text: 'Web Projects',
    // });
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
                <div className="hide-under col-md-12 project-top">
                  <div className="row">
                    <div className="col">
                      <h3 className="description" ref={(e) => { this.description = e; }}>Web Projects</h3>
                      <div id="box-image">
                        <img className="box-image-background" src={DefaultBackground} alt="Default project background" />
                      </div>
                    </div>
                    <div className="col">
                      <BannerLink
                        title="Jellicent"
                        description="Testing three.js basic React templating with
                          passthroughs, scene design and camera manipulation."
                        date="January 2020"
                        internalLink="/jellicent"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                      />
                      <BannerLink
                        title="LTI"
                        description="Learning Interoperability Tool developed for Questionmark systems."
                        externalLink="https://github.com/questionmark/qm-lti"
                        date="July 2018"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                      />
                      <BannerLink
                        title="UnleashedBot"
                        description="Support tool developed for ATB for easier processing."
                        internalLink="/jellicent"
                        date="June 2019"
                        showDescription={this.showDescription}
                        hideDescription={this.hideDescription}
                      />
                      <BannerLink
                        title="Flight for Financial Freedom"
                        description="Right now, 42% of Canadians are struggling to meet financial commitments."
                        externalLink="https://github.com/questionmark/qm-lti"
                        date="November 2019"
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
