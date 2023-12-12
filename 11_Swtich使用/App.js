import React, { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';
import {  Route, NavLink ,Switch} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header/>
            </div>
          </div>
        </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生html中，靠a跳转不同的页面 */}
                {/* <a className="list-group-item" href="./about.html">
              About
            </a>
            <a className="list-group-item active" href="./home.html">
              Home
            </a> */}
                {/* 在react中靠路由链接实现切换组件 */}
                {/* <NavLink activeClassName='click' className="list-group-item" to="/about">
                  About
                </NavLink>
                <NavLink activeClassName='click' className="list-group-item" to="/home">
                  Home
                </NavLink> */}
                <MyNavLink to='/about'>About</MyNavLink>
                <MyNavLink to='/home'>Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* <h3>我是Home的内容</h3> */}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/about" component={Home} />
                  <Route path="/home" component={Home} />
                </Switch>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
