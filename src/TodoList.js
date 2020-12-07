import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoActions from './actions/todos';

class TodoList extends Component {

  state = {
    todoText: '',
    todoTextEdit: '',
    isEditing: false
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    this.setState({ isEditing: false });

    if (this.state.isEditing) {
      this.props.editTodo(todo, this.state.todoTextEdit);
    } else {
      if (this.state.todoText) {
        this.props.addTodo(this.state.todoText);
        this.setState({ todoText: '' });
      }
    }
  }

  removeTodo(todo) {
    this.props.removeTodo(todo);
  }

  getTodo(todo) {
    this.setState({ todoTextEdit: todo.text });
  }

  editTodo(todo) {
    this.setState({ isEditing: true });
    this.props.setVisibility(todo);
  }

  render() {

    const {
      todos,
    } = this.props;

    return(
      <div>
        <ul>
          { todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.removeTodo(todo)}>Delete</button>
              <button onClick={() => this.getTodo(todo)}>Select</button>
              <button onClick={() => this.editTodo(todo)}>Edit</button>
              {
                todo.visibility &&
                <form key={todo.id}>
                  <input
                    type="text"
                    onChange={e => this.setState({ todoTextEdit: e.target.value })}
                  />
                  <button onClick={e => this.addTodo(e, todo)}>Add</button>
                </form>
              }
            </li>
          ) }
        </ul>

        <h3>{this.state.todoText}</h3>
        <h4>Item selecionado: {this.state.todoTextEdit}</h4>

        <form onSubmit={this.addTodo}>
          <input
            type="text"
            value={this.state.todoText}
            onChange={e => this.setState({ todoText: e.target.value })}
          />
          <button onClick={this.addTodo}>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
