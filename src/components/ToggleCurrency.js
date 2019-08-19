import React from 'react';
import {toggleCurrency} from '../actions';
import {connect} from 'react-redux';

class ToggleCurrency extends React.Component {
  buttonStyle = {
    position: 'relative',
    borderRadius: '10px',
    width: '50%',
    height: '20%',
    margin: '5%',
    top: '100px',
    backgroundColor: 'skyblue',
  };
  render() {
    let text = '';
    if (this.props.currencyDollar == false) text = 'USD로 변환';
    else text = 'KRW로 변환';
    return (
      <button style={this.buttonStyle} onClick={this.props.toggleCurrency}>
        {text}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencyDollar: state.currencyDollar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCurrency: () => dispatch(toggleCurrency()),
  };
};

ToggleCurrency = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToggleCurrency);

export default ToggleCurrency;
