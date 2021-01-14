import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';

class Border extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visibleMenu: false,
    };
    this.renderStandard = this.renderStandard.bind(this);
    this.renderMobile = this.renderMobile.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.triggerMenuAnimation = this.triggerMenuAnimation.bind(this);
  }

  toggleMenu() {
    console.log('menu toggled');
    this.setState((prevState) => ({
      visibleMenu: !prevState.visibleMenu,
    }), () => {
      this.triggerMenuAnimation();
    });
  }

  triggerMenuAnimation() {
    const targets = '.menu';
    const { visibleMenu } = this.state;
    if (visibleMenu) {
      anime
        .timeline({ loop: false })
        .add({
          targets,
          opacity: [0, 1],
          easing: 'easeOutQuart',
          translateY: {
            value: 10,
          },
          duration: 500,
        });
    } else {
      anime
        .timeline({ loop: false })
        .add({
          targets,
          opacity: [1, 0],
          easing: 'easeOutQuart',
          translateY: {
            value: -10,
          },
          duration: 500,
        });
    }
  }

  renderStandard() {
    return (
      <div>
        <div id="left" />
        <div id="right" />
        <div id="top">
          <div className="col-md-12 top-center d-none d-sm-block">
            <h5 className="connect">
              <Link to="/resume" className="strikethrough top-item" href="resume">Resume</Link>
              <Link to="/work" className="strikethrough top-item">Work</Link>
              <Link to="/contact" className="strikethrough top-item">Contact</Link>
              <Link to="/projects" className="strikethrough project">Projects</Link>
            </h5>
          </div>
        </div>
      </div>
    );
  }

  renderMobile() {
    return (
      <div className="zindex-100 col-md-12 d-block d-sm-none paddingleft-0">
        <button type="button" id="menu-button" onClick={this.toggleMenu} onKeyDown={this.toggleMenu}>
          <h5 className="toggle menuhead">
            <span className="title">Anson Li</span>
            <div className="hamburger-menu">&#9776;</div>
          </h5>
        </button>
        <div className="dropdown">
          <h5>
            <ul className="menu">
              <li><a className="strikethrough menulink" href="/">Home</a></li>
              <li><a className="strikethrough menulink" href="resume">Resume</a></li>
              <li><a className="strikethrough menulink" href="work">Work</a></li>
              <li><a className="strikethrough menulink" href="contact">Contact</a></li>
              <li><a className="strikethrough menulink project" href="projects">Projects</a></li>
            </ul>
          </h5>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderStandard()}
        {this.renderMobile()}
      </div>
    );
  }
}

export default Border;
