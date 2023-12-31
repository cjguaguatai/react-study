import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
export default class Header extends Component {
  handleKeyUp = (event) => {
    if (event.keyCode === 13&&event.target.value.trim()!=='') {
      this.props.addTodos(event.target.value);
    }
  };
  static propTypes ={
    addTodos:PropTypes.func.isRequired,
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
