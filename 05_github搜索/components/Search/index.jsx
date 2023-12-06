import React, { Component } from 'react';
import axios from 'axios';
export default class Search extends Component {
  // state ={
  //   users:[]
  // }
  search = () => {
    const {
      keyWordNode: { value },
    } = this;
    this.props.updateAppState({ isFirst: false, isLoading: true });
    axios.get(`http://localhost:3000/search/users?q=${value}`).then(
      (res) => {
        // this.setState({
        //   users: res.data.items,
        // });
        // console.log(this.state.users);
        this.props.updateAppState({
          isLoading: false,
          userList: res.data.items,
        });
      },
      (req) => {
        this.props.updateAppState({
          isLoading: false,
          err: req,
        });
      },
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWordNode = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
