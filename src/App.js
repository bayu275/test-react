import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      todoItems : '',
      items : []
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items, this.state.todoItems],
      todoItems : ''
    })
  }

  handleChange = event => {
    this.setState({
      todoItems : event.target.value
    })
    console.log(this.state.todoItems)
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.todoItems} onChange={this.handleChange} />
          <button>Add</button>
        </form>

        <ListItem items={this.state.items} />
      </div>
    )
  }
}

export default App;