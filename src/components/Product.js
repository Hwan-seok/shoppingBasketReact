import React from 'react';
import {connect} from 'react-redux';
import {toggleSelect} from '../actions';

class Product extends React.Component {
  style = {
    position: 'relative',
    float: 'left',
    borderStyle: 'solid',
    borderWidth: '1px',
    width: '47%',
    height: '33%',
    margin: '10px',
    // textDecoration: this.props.completed ? 'line-through' : 'none',
    borderColor: this.props.isSelected ? 'DodgerBlue' : 'none',
    // margin: 'auto',
    // marginBottom: '14px',
    // padding: '20px',
    // borderStyle: 'solid',
    // borderWidth: '0 0 0 8px',
    backgroundColor: this.props.isSelected ? 'rgba(30, 144, 255, 0.2)' : 'none',
    // listStyle: 'none',
    // display: 'flex',
    // width: '1000px',
    // height: '100px',
    // left: '50%',
  };
  imgStyle = {
    padding: '10px',
    width: '70%',
    position: 'relative',
    borderRadius: '20px',
  };
  render() {
    console.log('product render', this.props);
    return (
      <div style={this.style} onClick={this.props.toggleSelect}>
        <div style={{float: 'left'}}>
          <img
            style={this.imgStyle}
            src={`../productImage/${this.props.name}.jpg`}
          />
        </div>
        <div style={{float: 'right', textAlign: 'center'}}>
          {this.props.name}
          {this.props.price}원
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps.idx);
  return {
    toggleSelect: () => dispatch(toggleSelect(ownProps.idx)),
  };
};

Product = connect(
    undefined,
    mapDispatchToProps
)(Product);

export default Product;
