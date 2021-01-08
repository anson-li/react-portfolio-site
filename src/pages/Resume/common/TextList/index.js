import React, { PureComponent } from 'react';

class TextList extends PureComponent {
  render() {
    const items = [];

    this.props.items.forEach((element) => {
      items.push(<span>
        ●
        {element}
        <br />
      </span>);
    });

    return (
      <div className="text-list">
        <br />
        {items}
      </div>
    );
  }
}

export default TextList;
