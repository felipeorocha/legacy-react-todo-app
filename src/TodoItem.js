import React, { Component } from 'react'
class TodoItem extends Component {

  render() {
    return (
      <li>
        {this.props.todo.text}
        <button onClick={() => this.props.removeTodo(this.props.todo)}>Delete</button>
      </li>
    )
  }
}

export default TodoItem;
