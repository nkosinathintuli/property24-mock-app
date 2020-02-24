import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'





const NavBar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  
  return (
    <div id="navbar" className="navbar-fixed">
      <nav className="nav-wrapper white darken-0">
        <div  className="container">
            <Link to='/' className="brand-logo">
              <img src={require('../../images/icons/property24.png')} className="center-align"/>
            </Link>
            {links}
        </div>
      </nav>
    </div>
    
  )
}

const mapStateToProps = (state) => {
   
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(NavBar)