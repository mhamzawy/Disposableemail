import React from 'react';
import logo from './emaillogo.png';
import './App.css';
import LoginForm from './Login'
import EmailList from './List'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {address: ''};

  }

  changeAddress(address) {
    this.setState({address: address});
  }

  render() {
    if (this.state.address !== '') {
      return (
            <EmailList address={this.state.address} changeAddress={this.changeAddress.bind(this)}/>
      ); 
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <LoginForm changeAddress={this.changeAddress.bind(this)}/>
        </div>
      );
    }
  }
}

export default App;
