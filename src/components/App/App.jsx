import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';

class App extends React.Component {
  render(){
    return (
      <Router>
        <Route
          component={Home}
          exact
          path='/'/>
      </Router>

    );
  }
}

export default App;
