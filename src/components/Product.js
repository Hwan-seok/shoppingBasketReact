import React from 'react';
import {connect} from 'react-redux';
import {toggleSelect} from '../actions';

class Product extends React.Component {
  style = (isSelected) => {
    return {
      borderColor: this.props.isSelected ? 'DodgerBlue' : '',
      backgroundColor: this.props.isSelected
        ? 'rgba(30, 144, 255, 0.2)'
        : 'white',
      position: 'relative',
      float: 'left',
      borderStyle: 'solid',
      borderWidth: '1px',
      width: '45%',
      height: '27%',
      margin: '2%',
      borderRadius: '10px',
      // textDecoration: this.props.completed ? 'line-through' : 'none',
      // margin: 'auto',
      // marginBottom: '14px',
      // padding: '20px',
      // borderStyle: 'solid',
      // borderWidth: '0 0 0 8px',
      // listStyle: 'none',
      // display: 'flex',
      // width: '1000px',
      // height: '100px',
      // left: '50%',
    };
  };
  imgStyle = {
    padding: '10px',
    width: '70%',
    height: '50%',
    position: 'relative',
    borderRadius: '20px',
  };
  render() {
    console.log('product reRender', this.props);
    return (
      <div
        style={this.style(this.props.isSelected)}
        onClick={this.props.toggleSelect}
      >
        <div style={{float: 'left'}}>
          <img
            style={this.imgStyle}
            src={`../productImage/${this.props.name}.jpg`}
          />
        </div>
        <div
          style={{
            verticalAlign: 'middle',
            width: '100%',
            textAlign: 'center',
          }}
        >
          {/* TODO : textAlign, vertialAlign 동작안함... */}
          <br />
          <br />
          <br /> 
          {this.props.name}
          <br />
          <br />\{this.props.price}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSelect: () => dispatch(toggleSelect(ownProps.idx)),
  };
};

Product = connect(
    undefined,
    mapDispatchToProps
)(Product);

export default Product;
