import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextList extends PureComponent {
  render() {
    const cleanedItems = [];
    const { items } = this.props;

    items.forEach((element) => {
      cleanedItems.push(
        <span>
          ●&nbsp;
          {element}
          <br />
        </span>,
      );
    });

    return (
      <div className="text-list">
        <br />
        {cleanedItems}
      </div>
    );
  }
}

TextList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TextList;
