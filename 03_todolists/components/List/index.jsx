import React, { Component } from 'react';
import Item from '../Item/index';
import PropTypes from 'prop-types';

export default class List extends Component {
  static propTypes ={
    todos:PropTypes.array.isRequired,
    checkedChange:PropTypes.func.isRequired,
  }
  render() {
    const { todos ,checkedChange,handleDel} = this.props;
    return (
      <ul className="todo-main">
        {todos.map((item, index) => {
          return <Item key={item.id} {...item} checkedChange={checkedChange} handleDel={handleDel}/>;
        })}
      </ul>
    );
  }
}
