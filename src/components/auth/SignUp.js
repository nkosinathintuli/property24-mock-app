import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

class SignUp extends Component {
    state ={
        email:'',
        password:'',
        fullName:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError} = this.props;
        if(auth.uid) return <Redirect to='/' />
        return (
           <div className="container">
                <div className="row">
                    <div className="col s6 offset-s3">
                        <div className="card center login">
                            <img src={require('../../images/icons/property24.png')} className="center"/>
                            <h5 className="black-text">Welcome Back</h5>
                            <p className="grey-text">Login to continue</p>

                            <form className="white" onSubmit={this.handleSubmit}>
                                <div className="input-field">
                                    <p className="left-align">Full Name</p>
                                    <input type="text" id='fullname' placeholder="John Doe" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <p className="left-align">Email</p>
                                    <input type="email" id='email' placeholder="johndoe@gmail.com" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password" ></label>
                                    <p className="left-align">Password</p>
                                    <input type="password" id='password' placeholder="password" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password" ></label>
                                    <p className="left-align">Confirm Password</p>
                                    <input type="password" id='password' placeholder="password" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <button className="btn blue darken-3 z-depth-0">Sign Up</button> 
                                    <div className="red-text center">
                                        { authError ? <p>{ authError }</p>: null}
                                    </div>  
                                    <p>Already have an account? <a>Login</a></p>
                                </div>
                                

                            </form>
                            
                        </div>
                    
                </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)