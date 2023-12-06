import React, { Component } from 'react';
import './index.css';
import PubSub from 'pubsub-js';
export default class List extends Component {
  state = {
    userList: [],
    isFirst: true, // 是否第一次打开
    isLoading: false, // 是否加载中
    err: '', // 错误信息
  };
  componentDidMount() {
    this.token = PubSub.subscribe('updateState', (msg, data) => {
      this.setState(data);
    });
    console.log(this);
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  renderDom = () => {
    const { userList, isFirst, isLoading, err } = this.state;
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
