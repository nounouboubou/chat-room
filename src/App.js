import React, { Component } from 'react';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js">

 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyCOY_0kOIIGnW_SB65qu7lVYEp0svQ1G9Q",
   authDomain: "rooms-6038f.firebaseapp.com",
   databaseURL: "https://rooms-6038f.firebaseio.com",
   projectId: "rooms-6038f",
   storageBucket: "rooms-6038f.appspot.com",
   messagingSenderId: "901065535366"
 };
 firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
