import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

class FadeText extends PureComponent {
  componentDidMount() {
    const targets = `#${this.props.id}.ml3 .letter`;
    anime
      .timeline({ loop: this.props.loop })
      .add({
        targets,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2250,
        delay: (el, i) => this.props.base + this.props.iteration * i,
      });
  }

  render() {
    return (
      <this.props.type
        className={`${this.props.className} ml3`}
        id={this.props.id}
      >
        {
      this.props.text.split('').map((v, index) => (
        <span className="letter" key={index}>{v}</span>
      ))
      }
      </this.props.type>
    );
  }
}

FadeText.propTypes = {
  type: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  base: PropTypes.number,
  iteration: PropTypes.number,
  loop: PropTypes.bool,
};

FadeText.defaultProps = {
  className: '',
  id: '',
  base: 500,
  iteration: 30,
  loop: false,
};

export default FadeText;
