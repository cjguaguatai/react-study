import React, { Component } from 'react';
import './index.css';
export default class Item extends Component {
  checkedChange = (id) => {
    return () => {
      this.props.checkedChange(id);
    };
  };
  render() {
    const { content, done, id } = this.props;
    return (
      <li className="li">
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.checkedChange(id)}
          />
          <span>{content}</span>
        </label>
        <button className="btn btn-danger">删除</button>
      </li>
    );
  }
}
