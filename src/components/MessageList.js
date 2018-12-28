import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentRoom: null,
      messages: [],
    };

    this.messagesRef = this.props.firebase.database().ref('messages');
}

componentDidMount(){
  this.messagesRef.on('child_added', snapshot=>{
    const message = snapshot.val();
    message.key = snapshot.key;

    this.setState({ messages: this.state.messages.concat(message) });
  });
}

showRoomMessage(message, index){
      if (message.roomId === this.props.activeRoom){
        return (
          <p key = {index}>{message.content}></p>
        );
      }
}

filteredMessage() {
  return this.state.messages.filter(message => {
    console.log(message.roomId);
    console.log(this.props.activeRoom);
    return message.roomId === this.props.activeRoom;
  });
}

render(){
  return(
        <div className = "Meassages">
            <h1> {this.props.activeRoomTitle }</h1>
            {
              this.state.messages.map((message, index) =>
              this.showRoomMessage(message, index)
            )
            }
            <Message
              firebase= { this.props.firebase}
              activeRoom= { this.props.activeRoom }
              user= { this.props.user }
            />
        </div>
      );
    }

}

export default MessageList;
