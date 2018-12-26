import React, { Component } from 'react';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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
  };
}

selectActiveRoom(key, title){
  const selectedActiveRoom = key;
  const newActiveRoomTitle= title;
  this.setState({ activeRoom: selectedActiveRoom});
}
  render() {
    return (
      <div className="App">
      <RoomList firebase={ firebase }
      activeRoom= {this.state.activeRoom}
      selectActiveRoom={ (key,title) => this.selectActiveRoom(key,title) }
      />
      <MessageList
      firebase={ firebase }
      activeRoom= { this.state.activeRoom }
      />
      </div>
    );
  }
}

export default App;
