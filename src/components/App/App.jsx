import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';

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
      </Router>

    );
  }
}

export default App;
