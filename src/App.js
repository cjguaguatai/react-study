import React, { Component } from 'react';
import Search from './components/Search';
import List from './components/List';
export default class App extends Component {
  state = {
    userList: [],
    isFirst: true, // 是否第一次打开
    isLoading: false, // 是否加载中
    err: '', // 错误信息
  };

  updateAppState = (data) => {
    this.setState(data);
  };

  render() {
    
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state}/>
      </div>
    );
  }
}
