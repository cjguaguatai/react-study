import React, { Component } from 'react';
import './index.css';

export default class List extends Component {
  renderDom = () => {
    const { userList, isFirst, isLoading, err } = this.props;
    if (isFirst) {
      return <div>请输入关键词</div>;
    } else if (isLoading) {
      return <div>正在加载...</div>;
    } else if (err) {
      return <div>{err.message}</div>;
    } else {
      return (
        <div className="row">
          {userList.map((ele) => (
            <div className="card" key={ele.id}>
              <a href={ele.html_url} target="_blank" rel="noreferrer">
                <img
                  alt="reactjs"
                  src={ele.avatar_url}
                  style={{ width: '100px' }}
                />
              </a>
              <p className="card-text">{ele.login}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  render() {
    // const { userList, isFirst, isLoading, err } = this.props;
    return this.renderDom();
  }
}
