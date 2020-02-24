import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () =>{
    return (
        <ul className="right">
            <li><NavLink to='/' className="black-text">Home</NavLink></li>
            <li><NavLink to='#' className="black-text">Properties</NavLink></li>
            <li><NavLink to='#' className="black-text">Developments</NavLink></li>
            <li><NavLink to='#' className="black-text">Commercial</NavLink></li>
            <li><NavLink to='#' className="black-text">Calculators</NavLink></li>
            <li><NavLink to='#' className="black-text">Advice</NavLink></li>
            <li><NavLink to='/signup' className="blue-text">Sign Up</NavLink></li>
            <li><NavLink to='/login' className="red-text">Log In</NavLink></li>
            <li><NavLink to='#' className="black-text"><i className="material-icons">notifications_none</i></NavLink></li>
        </ul>
    )
}

export default SignedOutLinks