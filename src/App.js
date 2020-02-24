import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import NavBar from './components/layout/NavBar'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import HomePage from './components/homePage/HomePage'
import CreateProperty from './components/property/CreateProperty'
import PropertyDetails from './components/property/PropertyDetails'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/login" component={Login}/>
              <Route path='/property/:id' component={PropertyDetails}/>
              <Route path='/create' component={CreateProperty}/>

            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
