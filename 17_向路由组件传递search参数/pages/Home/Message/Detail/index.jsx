import React, { Component } from 'react';
import qs from 'qs'
const DetailData = [
    {id:1,content:'呱呱太'},
    {id:2,content:'呱呱太ggt '},
    {id:3,content:'呱呱太ggtggt '},
]
export default class Detail extends Component {
  render() {
    // console.log(this.props.location);
    const {search} = this.props.location
    const query = qs.parse(search.substr(1));
    console.log(query);
    const {id,title} = query;
    const findResult = DetailData.find(item=>item.id==query.id);

    return <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findResult.content}</li>
    </ul>
  }
}
