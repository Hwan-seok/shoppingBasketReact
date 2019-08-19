import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

class NumComplete extends Component {
  render() {
    return (
      <Fragment>
        <h1>할일 목록</h1>
        <h2>
          {this.props.length}개중 {this.props.complete}개 완료
        </h2>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    length: state.todo.length,
    complete: state.todo.filter((todo) => {
      return todo.completed == true;
    }).length,
  };
};

NumComplete = connect(mapStateToProps)(NumComplete);

export default NumComplete;
