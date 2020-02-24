import React, { Component } from 'react'
import { connect} from 'react-redux'
import {createProperty} from '../../store/actions/propertyActions'
import { Redirect } from 'react-router-dom'

class CreateProperty extends Component {
    state ={
        name:'',
        address:'',
        price:'',
        description:''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.createProperty(this.state)
        this.props.history.push('/')
    }

    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/login' />
        return (
           <div class="container">
                <div class="row">
                    
                    <div className="col s6 offset-s3">
                        <div class="card center login">
                            
                            <h5 className="black-text">Property Details</h5>
                            

                            <form className="white">
                                <div className="input-field">
                                    <p className="left-align">Name</p>
                                    <input type="text" id='name' placeholder="4 bedroom 2 garage Mansion" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <p className="left-align">Address</p>
                                    <input type="address" id='address' placeholder="25 David Road, Blueberry, 234" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <p className="left-align">Price</p>
                                    <input type="number" id='price' placeholder="price" onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    
                                    <p className="left-align">Description</p>
                                    <textarea  id='description' placeholder="Secure complex, four bedroom unit...." onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <button className="btn blue darken-3 z-depth-0">Create</button>
                                    <button className="btn blue darken-3 z-depth-0">Cancel</button> 
                                    
                                </div>
                                

                            </form>
                            
                        </div>
                    
                </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth
    }
}

const mapDispathToProps = (dispatch) =>{
    return {
        createProperty: (property) => dispatch(createProperty(property))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(CreateProperty)