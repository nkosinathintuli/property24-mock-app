import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/' className="black-text">Home</NavLink></li>
        <li><NavLink to='#' className="black-text">Properties</NavLink></li>
        <li><NavLink to='#' className="black-text">Developments</NavLink></li>
        <li><NavLink to='#' className="black-text">Commercial</NavLink></li>
        <li><NavLink to='#' className="black-text">Calculators</NavLink></li>
        <li><NavLink to='#' className="black-text">Advice</NavLink></li>
        <li><NavLink to='/create' className="black-text">New Property</NavLink></li>
        <li><a href="###" className="black-text" onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="red">{props.profile.email}</NavLink></li>
        <li><NavLink to='#' className="black-text"><i className="material-icons">notifications_none</i></NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)