import React from 'react'
import { connect } from 'react-redux'

class NoteForm extends React.Component {
  state = {
    content: ""
  }

  changeHandler = (e) => {
    this.setState({ content: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({ content: "" })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text-area" value={this.state.content} onChange={this.changeHandler} />
        <input type="submit" value="add note" />
      </form>
    )
  }

}

//write action since it doesn't need to read the state, just write to it
//mapDispatchToProps
const mdp = (dispatch) => {
  //dispatch: is to take in an action and then call our reducer and
  //pass that action into the reducer

  return { submitHandler: (noteObj) => dispatch({ type: "add note", payload: noteObj }) }
}

//we need to include null to represent the mapStateToProps that doesn't
//technically exist 1st is read, 2nd is write
export default connect(null, mdp)(NoteForm)