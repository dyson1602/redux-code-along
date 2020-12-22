import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';

const rootReducer = (currentState = {notes: []}, action) => {
  if (action.type === "add note"){
    console.log('reducer action:', action)
    return { ...currentState, notes: [...currentState.notes, action.payload]}
  } else {
    return currentState
  }
}
//reducer is a function that reutrns a state object
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);