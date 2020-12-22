import React from 'react'
import { connect } from 'react-redux'
import Note from '../Components/Note'
import NoteForm from '../Components/NoteForm'

class NotesContainer extends React.Component {
  // state = { notes: [] }
  // async componentDidMount() {
  //   const apiResponse = await fetch('http://localhost:4000/notes')
  //   const notes = await apiResponse.json()
  //   this.setState({ notes })
  // }

  renderNotes = () => {
    return this.props.notes.map((note) => <Note key={note.id} note={note} />)
  }

  render() {
    return (
      <>
        <NoteForm />
        <ul>
          {this.renderNotes()}
        </ul>
      </>
    )
  }
}

//read action
const msp = (state) => {
  //this does not override props from the parent container, it only adds to them
  console.log('current redux state: ', state)
  return { notes: state.notes }
}

//conventional name is mapStateToProps, subscribing the notes app to state
export default connect(msp)(NotesContainer)