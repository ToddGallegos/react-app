
import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    addItem = () => {
        this.setState({todos: this.state.todos.concat(this.inputRef.value)})
        this.inputRef.value = ""
    }

    removeTodo = index => {
        this.setState(prevState => {
          const todos = [...prevState.todos];
          todos.splice(index, 1);
          return { todos };
        });
      };

    displayTodos = () => {
        // return this.state.todos.map(todo => <h5>{this.state.todos.indexOf(todo)}<span>) </span>{todo}</h5>)
        return this.state.todos.map((todo, index) => 
        <>
        <div style={{display: "flex"}}>
        <h5 key={index}>{index + 1}: {todo}</h5>
        <button style={{marginLeft: "1rem"}}onClick={() => this.removeTodo(index)}>Remove</button>
        </div>
        </>
        )
    }

  render() {
    return (
        <>
      <div style={{marginBottom: "1rem"}}><h1>TODOS</h1>
      {this.state.todos.length !== 0 ? this.displayTodos() : <p>Nothing to do!</p>}
      <div style={{marginTop: "1rem"}}>
        <input type="text" ref={ref => (this.inputRef = ref)}></input>
        <button onClick={this.addItem}>Add</button>
      </div>
      </div>
      </>
    )
  }
}
