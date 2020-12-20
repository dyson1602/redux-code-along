import './App.css';
import React from 'react'
import NotesContainer from './Containers/NotesContainer';
import Header from './Components/Header'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <NotesContainer />
      </>
    );
  }
}

export default App
