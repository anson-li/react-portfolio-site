import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

class FadeText extends PureComponent {
  componentDidMount () {
    const {
      id, loop, base, iteration,
    } = this.props;
    const targets = `#${id}.ml3 .letter`;
    anime
      .timeline({loop})
      .add({
        delay: (el, index) => {
          return base + iteration * index;
        },
        duration: 2250,
        easing: 'easeOutExpo',
        opacity: [0, 1],
        targets,
      });
  }

  render () {
    const {className, id, text} = this.props;

    return (
      <this.props.type
        className={`${className} ml3`}
        id={id}
      >
        {
          text.split('').map((character, index) => {
            return <span className='letter' key={character.concat(index)}>{character}</span>;
          })
        }
      </this.props.type>
    );
  }
}

FadeText.propTypes = {
  base: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  iteration: PropTypes.number,
  loop: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

FadeText.defaultProps = {
  base: 500,
  className: '',
  id: '',
  iteration: 30,
  loop: false,
};

export default FadeText;
