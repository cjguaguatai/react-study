import React, { Component } from 'react';
import Item from '../Item/index';

export default class List extends Component {
  render() {
    const { todos ,checkedChange} = this.props;
    return (
      <ul className="todo-main">
        {todos.map((item, index) => {
          return <Item key={item.id} {...item} checkedChange={checkedChange}/>;
        })}
      </ul>
    );
  }
}
