import React from 'react'
import { connect } from 'react-redux'
import Note from '../Components/Note'
import NoteForm from '../Components/NoteForm'
import { getNotes } from '../Redux/actions'

class NotesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchNotes()
  }

  renderNotes = () => {
    return this.props.notes.map((note) => <Note key={note.id} note={note} />)
  }

  render() {
    console.log("notes container render", this.props.notes)
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
  return { notes: state.notes }
}

//write action
const mdp = (dispatch) => {
  return { fetchNotes: () => dispatch(getNotes()) }
}

//conventional name is mapStateToProps, subscribing the notes app to state
export default connect(msp, mdp)(NotesContainer)