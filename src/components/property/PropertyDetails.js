import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


const PropertyDetails = (props) => {
  const { property,auth } = props;
  if(!auth.uid) return <Redirect to='/signin' />
  if (property) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-5">
          <div className="card-content">
            <span className="card-title">{property.name}</span>
            <p>{property.description}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {property.authorFullName} }</div>
            
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading property...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const properties = state.firestore.data.properties;
  const property = properties ? properties[id] : null
  return {
    property: property,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'properties'
  }])
)(PropertyDetails)
