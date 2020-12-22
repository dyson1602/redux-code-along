import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App';

const rootReducer = (currentState = { notes: [] }, action) => {
  console.log('reducer action: ', action)
  if (action.type === "post_new_note") {
    console.log('reducer action:', action)
    return { ...currentState, notes: [...currentState.notes, action.payload] }
  } else if (action.type === "add_notes_from_fetched") {
    console.log('state', currentState)
    return {...currentState, notes: action.payload}
  } else {
    return currentState
  }
}
//reducer is a function that reutrns a state object
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);