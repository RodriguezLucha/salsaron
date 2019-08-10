import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Route
          component={Home}
          exact
          path='/'/>
        <Route
          component={Login}
          exact
          path='/login'/>
        <Route
          component={Signup}
          exact
          path='/signup'/>
      </Router>

    );
  }
}

export default App;
