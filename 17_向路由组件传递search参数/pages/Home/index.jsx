import React, { Component } from 'react';
import News from './News/index';
import Message from './Message/index';
import MyNavLink from '../../components/MyNavLink';
import { Route, Switch, Redirect } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <a className="list-group-item" href="./home-news.html">
                News
              </a> */}
              <MyNavLink to="/home/news">news</MyNavLink>
            </li>
            <li>
              {/* <a className="list-group-item active" href="./home-message.html">
                Message
              </a> */}
              <MyNavLink to="/home/message">message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news" />
          </Switch>
          {/* <News />
          <Message /> */}
        </div>
      </div>
    );
  }
}
