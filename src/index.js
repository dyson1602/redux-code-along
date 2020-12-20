import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';

const rootReducer = () => { return { notes: [] } }
//reducer is a function that reutrns a state object
const store = createStore(rootReducer)

console.log("Store:", store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);