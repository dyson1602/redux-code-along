import React from 'react'
import Note from '../Components/Note'

class NotesContainer extends React.Component {

  state = { notes: [] }

  async componentDidMount() {
    const apiResponse = await fetch('http://localhost:4000/notes')
    const notes = await apiResponse.json()
    this.setState({ notes })
  }

  renderNotes = () => {
    return this.state.notes.map(note => <Note key={note.id} note={note} />)
  }

  render() {
    return (
      <ul>
        {this.renderNotes()}
      </ul>
    )
  }
}

export default NotesContainer