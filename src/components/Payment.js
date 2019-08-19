import React from 'react';
import NumSelect from './NumSelect';
import SumSelect from './SumSelect';
import ToggleCurrency from './ToggleCurrency';

class Payment extends React.Component {
  style = {
    float: 'right',
    borderStyle: 'solid',
    height: '600px',
    textAlign: 'center',
    width: '32%',
  };
  render() {
    return (
      <div style={this.style}>
        <NumSelect />
        <SumSelect />
        <ToggleCurrency />
      </div>
    );
  }
}

export default Payment;
