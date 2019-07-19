import React from 'react';
import styles from './App.module.scss';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {loggedIn: false, email: '', password: ''};
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent() {
    switch (this.state.loggedIn) {
    case true:
      return (
        <div>
          <button onClick={() => this.logout()}>Logout</button>
        </div>
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
    }).catch(err => {
      console.log('there was an error', err.message);
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
