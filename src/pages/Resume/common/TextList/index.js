import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';

class TextList extends PureComponent {
  render () {
    const cleanedItems = [];
    const {id, items} = this.props;

    items.forEach((element, index) => {
      cleanedItems.push(
        // eslint-disable-next-line react/no-array-index-key
        <span key={`${id}-${index}`}>
          ●&nbsp;
          {element}
          <br />
        </span>,
      );
    });

    return (
      <span className='text-list'>
        <br />
        {cleanedItems}
      </span>
    );
  }
}

TextList.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])).isRequired,
};

export default TextList;
