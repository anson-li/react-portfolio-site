import React, { PureComponent } from 'react';
import LineBreak from '../../../../../../web/assets/line-break.png';

class BodySection extends PureComponent {
  render() {
    return (
      <div>
        {this.props.item}
        <br />
        <br />
        <br />
        <div className="col-md-12 wow fadeIn">
          <div className="center-sm paddingtop-0">
            <img className="line-break" src={LineBreak} alt="Line break" />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default BodySection;
