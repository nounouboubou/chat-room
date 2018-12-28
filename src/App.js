import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';
import * as firebase from 'firebase';
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
  constructor(){
  super();

  this.state = {
    activeRoom: '',
    activeRoomTitle: '',
    user: ''
  };
}

selectActiveRoom(key, roomName){
  const selectedActiveRoom = key;
  const newActiveRoomTitle= roomName;

  this.setState({ activeRoom: selectedActiveRoom});
}

setUser(user) {
  this.setState({user: user });
}

  render() {
    return (
      <div className="App">
      <RoomList
      firebase={ firebase }
      activeRoom= {this.state.activeRoom}
      selectActiveRoom={ (key,title) => this.selectActiveRoom(key,title) }
      user= { this.state.user }
      setUser= { (user) => this.setUser(user) }
      />
      <MessageList
      firebase={ firebase }
      activeRoom= { this.state.activeRoom }
      user= { this.state.user }
      setUser= { (user) => this.setUser(user) }
      />
      <User
      firebase={ firebase }
      user= { this.state.user }
      setUser= { (user) => this.setUser(user) }
      />
      </div>
    );
  }
}

export default App;
