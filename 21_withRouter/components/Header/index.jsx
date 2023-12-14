import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(
  class Header extends Component {
    back = () => {
      this.props.history.goBack();
    };
    go = () => {
      this.props.history.go(-1);
    };
    render() {
      return (
        <div>
          {' '}
          <h2>React Router Demo</h2>
          &nbsp; <button onClick={() => this.back()}>back</button>
          &nbsp; <button onClick={() => this.go()}>go</button>
        </div>
      );
    }
  },
);
