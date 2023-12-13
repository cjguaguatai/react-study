import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Detail from './Detail';
export default class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: 'message001' },
      { id: 2, title: 'message002' },
      { id: 3, title: 'message003' },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((ele) => {
            return (
              <li key={ele.id}>
                {/* params参数 */}
                {/* <Link to={`/home/message/detail/${ele.id}/${ele.title}`}>{ele.title}</Link> */}
                {/* search参数 */}
                {/* <Link
                  to={`/home/message/detail?id=${ele.id}&title=${ele.title}`}
                >
                  {ele.title}
                </Link> */}
                {/* state参数 */}
                 <Link
                  to={{pathname: '/home/message/detail', state: { id: ele.id, title: ele.title}}}
                >
                  {ele.title}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <a href="/message/3">message003</a>&nbsp;&nbsp;
          </li> */}
        </ul>
        <hr />
        {/* params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
        {/* search参数 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* state参数 */}
        <Route path="/home/message/detail" component={Detail} />

      </div>
    );
  }
}
