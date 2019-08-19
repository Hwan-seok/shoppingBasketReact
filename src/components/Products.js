import React from 'react';
import Product from './Product';
import {connect} from 'react-redux';

class Products extends React.Component {
  style = (h, w) => {
    return {
      position: 'relative',
      float: 'left',
      borderStyle: 'solid',
      borderColor: '#50bcdf',
      height: (h * 8.2) / 10,
      width: '65%',
      overflowY: 'auto',

      // textDecoration: this.props.completed ? 'line-through' : 'none',
      // borderColor: this.props.completed ? 'Tomato' : 'DodgerBlue',
      // margin: 'auto',
      // marginBottom: '14px',
      // padding: '20px',
      // borderStyle: 'solid',
      // borderWidth: '0 0 0 8px',
      // backgroundColor: 'rgba(30, 144, 255, 0.2)',
      // listStyle: 'none',
      // display: 'flex',
      // width: '1000px',
      // height: '100px',
      // left: '50%',
    };
  };
  render() {
    return (
      <div style={this.style(window.innerHeight, window.innerWidth)}>
        {this.props.products.map((product, idx) => {
          return <Product key={idx} {...product} idx={idx} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

Products = connect(mapStateToProps)(Products);
export default Products;
