import React from 'react';
import Products from './Products';
import Payment from './Payment';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Products />
        <Payment />
      </div>
    );
  }
}

export default App;
