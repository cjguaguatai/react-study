import React, { Component } from 'react';
import axios from 'axios';
export default class Search extends Component {
  search = () => {
    const {
      keyWordNode: { value },
    } = this;
    axios.get(`http://localhost:3000/search/users?q=${value}`).then(
      (res) => {
        console.log('res', res);
      },
      (req) => {
        console.log('req', req);
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
