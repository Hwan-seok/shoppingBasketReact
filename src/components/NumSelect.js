import React from 'react';
import {connect} from 'react-redux';

class NumSelect extends React.Component {
  render() {
    return <h2>총 {this.props.numSelect}개 제품 선택됨</h2>;
  }
}

const mapStateToProps = (state) => {
  return {
    numSelect: state.products.filter((product) => product.isSelected).length,
  };
};

NumSelect = connect(mapStateToProps)(NumSelect);
export default NumSelect;
