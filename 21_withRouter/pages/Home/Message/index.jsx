import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Detail from './Detail';
export default class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: 'message001' },
      { id: 2, title: 'message002' },
      { id: 3, title: 'message003' },
    ],
  };
  pushShow = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`);
  };
  replaceShow = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`);
  };
  goForward = () => {
    this.props.history.goForward();
  };
  back = () => {
    this.props.history.goBack();
  };
  go = () => {
    this.props.history.go(-1);
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
                <Link to={`/home/message/detail/${ele.id}/${ele.title}`}>
                  {ele.title}
                </Link>
                {/* search参数 */}
                {/* <Link
                  to={`/home/message/detail?id=${ele.id}&title=${ele.title}`}
                >
                  {ele.title}
                </Link> */}
                {/* state参数 */}
                {/* <Link
                  to={{pathname: '/home/message/detail', state: { id: ele.id, title: ele.title}}}
                  replace
                >
                  {ele.title}
                </Link> */}
                &nbsp;{' '}
                <button onClick={() => this.pushShow(ele.id, ele.title)}>
                  push
                </button>
                &nbsp;{' '}
                <button onClick={() => this.replaceShow(ele.id, ele.title)}>
                  replace
                </button>
                &nbsp;{' '}
                <button onClick={() => this.goForward()}>goForward</button>
                &nbsp; <button onClick={() => this.back()}>back</button>
                &nbsp; <button onClick={() => this.go()}>go</button>
              </li>
            );
          })}
          {/* <li>
            <a href="/message/3">message003</a>&nbsp;&nbsp;
          </li> */}
        </ul>
        <hr />
        {/* params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />
        {/* search参数 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* state参数 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
      </div>
    );
  }
}
