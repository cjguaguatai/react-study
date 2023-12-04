import React, { Component } from 'react';

export default class Footer extends Component {
  handleDelAll = () => {
    this.props.handleDelAll();
  };
  handleCheckAll = (event) => {
    this.props.handleCheckAll(event.target.checked);
  };
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((per, cur) => {
      return (per += cur.done ? 1 : 0);
    }, 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            onChange={this.handleCheckAll}
            checked={(doneCount === todos.length&&todos.length!==0) ? true : false}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部 {todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.handleDelAll}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
