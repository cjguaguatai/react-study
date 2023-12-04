import React, { Component } from 'react';
import './index.css';
export default class Item extends Component {
  checkedChange = (id) => {
    return () => {
      this.props.checkedChange(id);
    };
  };
  handleDel=(id)=>()=>{
    this.props.handleDel(id);
  }
 

  render() {
    const { content, done, id } = this.props;
    return (
      <li className="li">
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.checkedChange(id)}
          />
          <span>{content}</span>
        </label>
        <button className="btn btn-danger " onClick={this.handleDel(id)}>删除</button>
      </li>
    );
  }
}
