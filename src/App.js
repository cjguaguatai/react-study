import React, { Component } from 'react';
import axios from 'axios';
export default class App extends Component {
  getStudentData = () => {
    axios.get('http://localhost:5000/students').then(
      (res) => {},
      (req) => {},
    );
  };
  render() {
    return <div>App</div>;
  }
}
