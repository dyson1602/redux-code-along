// import React from 'react'
// import Instructor from '../Components/Instructor'
// import Form from '../Components/Form'
// import Search from '../Components/Search'
// import { Route, Switch, withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'

// class InstructorContainer extends React.Component {

//   searchHandler = (e) => {
//     this.setState({ searchValue: e.target.value })
//   }

//   componentDidMount() {
//     this.props.fetchIntructors()
//   }

//   renderInstructors = () => {
//     return this.props.instructors.map(inst => <Instructor key={instructor.id})
//   }

//   render() {
//     return(
//       <>
//       <h2>Instructors:</h2>
//       <ul>
//         {this.renderInstructors()}
//       </ul>
//       </>
//     )
//   }


// }

// export default connect(msp, mdp)(InstructorContainer)