import React from 'react';
import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer/index'
import './App.css';
class App extends React.Component {
  state = {
    todos:[
      {id:1,content:'吃饭',done:true},
      {id:2,content:'睡觉',done:false},
      {id:3,content:'打豆豆',done:false},
    ]
  }
  addTodos= (data)=>{
    const {todos} = this.state;
    const newTodos = [{id:todos.length+1,content:data,done:false}].concat(todos)
    // const newTodos = todos.concat([{id:todos.length+1,content:data,done:false}])
    this.setState({todos:newTodos})
  }
  changeDone = (id)=>{
    const {todos} = this.state;
    const newTodos = todos.map(item=>{
      if(item.id === id){
        return {
          ...item,
          done:!item.done
        }
      }
      return item
    })
    this.setState({todos:newTodos})
  }

  render() {
    const {todos} = this.state;
   
    return (  
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodos={this.addTodos}/>
          <List todos={todos} checkedChange={this.changeDone}/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
