export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: text
  }
}

export function removeTodo(todo) {
  return {
    type: 'REMOVE_TODO',
    payload: todo
  }
}

export function getTodo(todo) {
  return {
    type: 'GET_TODO',
    payload: todo
  }
}

export function editTodo(todo, newValue) {
  return {
    type: 'EDIT_TODO',
    payload: todo,
    updated: {
      id: todo.id,
      text: newValue,
      visibility: false
    }
  }
}

export function setVisibility(todo) {
  return {
    type: 'SET_VISIBILITY',
    payload: {
      id: todo.id,
      text: todo.text,
      visibility: true
    }
  }
}
