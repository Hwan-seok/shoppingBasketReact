import React from 'react';
import Products from './Products';
import Payment from './Payment';

class App extends React.Component {
  render() {
    return (
      <div>
        <Products />
        <Payment />
      </div>
    );
  }
}

export default App;
