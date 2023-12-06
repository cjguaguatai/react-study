import React, { Component } from 'react';
// import axios from 'axios';
import PubSub from 'pubsub-js';

export default class Search extends Component {
  // state ={
  //   users:[]
  // }
  search = async () => {
    const {
      keyWordNode: { value },
    } = this;
    PubSub.publish('updateState', { isFirst: false, isLoading: true });
    // axios.get(`/search/users2?q=${value}`).then(
    //   (res) => {
    //     // this.setState({
    //     //   users: res.data.items,
    //     // });
    //     // console.log(this.state.users);
    //     PubSub.publish('updateState', {
    //       isLoading: false,
    //       userList: res.data.items,
    //     });
    //   },
    //   (req) => {
    //     PubSub.publish('updateState', {
    //       isLoading: false,
    //       err: req,
    //     });
    //   },
    // );
    // fetch(`/search/user2s2?q=${value}`)
    //   .then(
    //     async (res) => {
    //       // console.log(data);
    //       // const data = await res.json();
    //       return res.json();
    //     },
    //   )
    //   .then(
    //     (res) => {
    //       console.log(res);
    //     },
    //   ).catch((err)=>{
    //     console.dir(err);
    //   });
    try {
      const res = await fetch(`/search/users2?q=${value}`);
      const { items } = await res.json();
      PubSub.publish('updateState', {
        isLoading: false,
        userList: items,
      });
    } catch (error) {
      PubSub.publish('updateState', {
        isLoading: false,
        err: error,
      });
    }
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
