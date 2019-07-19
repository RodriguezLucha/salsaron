import React from 'react';
import styles from './App.module.scss';
import axios from 'axios';
class App extends React.Component {
  state = {loggedIn: false, email: '', password: ''};
  renderContent() {
    switch (this.state.loggedIn) {
    case true:
      return (
        <button onClick={() => this.logout()}>
            Log Out
        </button>
      );
    case false:
      return (
        <div>
          <label>Email
            <input
              onChange={(e) => this.setState({email: e.currentTarget.value})}
              type="text"
              value={this.state.email}/>
          </label>
          <label>Password
            <input
              onChange={(e) => this.setState({password: e.currentTarget.value})}
              type="text"
              value={this.state.password}/>
          </label>
          <button onClick={() => this.login()}>Login</button>
        </div>
      );
    default:
      return <div>Loading</div>;
    }
  }

  login(){
    let email = this.state.email;
    let password = this.state.password;

    axios.post('/api/users/login', {
      email,
      password
    }).then(result => {
      this.setState({loggedIn: true});
      console.log('success');
    }).catch(err => {
      console.log('there was an error', err.message);
      // console.log(err);
    });
  }

  logout(){
    this.setState({loggedIn: false});
  }


  render(){
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Salsaron</h1>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
