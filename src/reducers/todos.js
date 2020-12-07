export default function todos(state = [], action) {

  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Math.floor(Math.random() * 1000),
        text: action.payload,
        visibility: false
      }];
    case 'REMOVE_TODO':
      return state.filter(item => item.id !== action.payload.id);
    case 'GET_TODO':
      return state.find(item => item.id === action.payload.id);
    case 'EDIT_TODO':
      return state.map(item => item.id !== action.payload.id ? item : { id: action.updated.id, text: action.updated.text, visibility: action.updated.visibility });
    case 'SET_VISIBILITY':
      return state.map(item => item.id !== action.payload.id ? item : { visibility: action.payload.visibility });
    default:
      return state;
  }
}