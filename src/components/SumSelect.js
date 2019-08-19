import React from 'react';
import {connect} from 'react-redux';

class SumSelect extends React.Component {
  render() {
    if (this.props.currencyDollar == false) return <div>\{this.props.sum}</div>;
    else return <div>${(this.props.sum / 1100).toFixed(2)}</div>;
  }
}

const mapStateToProps = (state) => {
  const reducer = (result, current) => {
    if (current.isSelected == true) return result + current.price;
    else return result;
  };

  return {
    sum: state.products.reduce(reducer, 0),
    currencyDollar: state.currencyDollar,
  };
};

SumSelect = connect(mapStateToProps)(SumSelect);

export default SumSelect;
