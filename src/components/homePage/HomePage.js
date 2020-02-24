import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import PropertyList from '../property/PropertyList'
import SearchBar from '../layout/SearchBar.js'
 
class HomePage extends Component {
  render() {
    const { properties} = this.props;
    //if (!auth.uid) return <Redirect to='/signin' /> 
      return (
          <div className="dashboard">
            <SearchBar/>
            <PropertyList properties={properties} />
          </div>
      )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    properties: state.firestore.ordered.properties,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'properties', orderBy: ['createdAt', 'desc']}
  ])
)(HomePage)