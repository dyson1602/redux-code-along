const notesUrl = "http://localhost:4000/notes"

export const getNotes = () => {
  return async (dispatch) => {
    const apiRepsonse = await fetch(notesUrl)
    const notesArray = await apiRepsonse.json()
    dispatch({ type: "add_notes_from_fetched", payload: notesArray })
  }
}

export const postNote = (noteObj) => {
  return async (dispatch, getState) => {
    console.log("get state: ", getState)
    const apiRepsonse = await fetch(notesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(noteObj)
    })
    const note = await apiRepsonse.json()
    dispatch({ type: "post_new_note", payload: note })
  }
}

