import React, {Component} from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect} from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
            })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render() {
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to='/' />
        return (
            <div class="container">
                <div class="row">
                    <div className="col s6 offset-s3">
                        <div class="card center login">
                            <img src={require('../../images/icons/property24.png')} className="center"/>
                            <h5 className="black-text">Welcome Back</h5>
                            <p className="grey-text">Login to continue</p>

                            <form className="white" onSubmit={this.handleSubmit}>
                                <div className="input-field">
                                    <p className="left-align">Email</p>
                                    <input type="email" id='email' placeholder="john@gmail.com" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password" ></label>
                                    <p className="left-align">Password</p>
                                    <input type="password" id='password' placeholder="password" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <button className="btn blue darken-3 z-depth-0">Login</button> 
                                    <div className="red-text center">
                                        { authError ? <p>{ authError }</p>: null}
                                    </div>  
                                    <p>New user? <a>Sign Up</a></p>
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)