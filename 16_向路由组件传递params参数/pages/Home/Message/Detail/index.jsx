import React, { Component } from 'react';

const DetailData = [
    {id:1,content:'呱呱太'},
    {id:2,content:'呱呱太ggt '},
    {id:3,content:'呱呱太ggtggt '},
]
export default class Detail extends Component {
  render() {
    console.log(this.props);
    const {id,title} = this.props.match.params;
    const findResult = DetailData.find(item=>item.id==id);

    return <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
    </ul>
  }
}
