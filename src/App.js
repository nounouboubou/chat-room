import React, { Component } from 'react';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';



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
      <RoomList firebase={ firebase }/>
      <div>Message component goes here</div>
      </div>
    );
  }
}

export default App;
