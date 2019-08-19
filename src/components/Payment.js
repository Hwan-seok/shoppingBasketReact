import React, {Fragment} from 'react';
import NumSelect from './NumSelect';
import SumSelect from './SumSelect';
import ToggleCurrency from './ToggleCurrency';
import Footer from './Footer';

class Payment extends React.Component {
  style = {
    position: 'relative',
    float: 'right',
    borderStyle: 'solid',
    height: '600px',
    textAlign: 'center',
    width: '32%',
  };
  render() {
    return (
      <div style={this.style}>
        <Footer />
        <NumSelect />
        <SumSelect />
        <ToggleCurrency />
      </div>
    );
  }
}

export default Payment;
