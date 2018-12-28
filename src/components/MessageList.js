import React, { Component } from 'react';

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
    return message.roomId === this.props.activeRoom;
  });
}

render(){
  return(
    <div>
    {
          this.filteredMessage().map((message, index) =>
            <div
            key={index}
              onClick = {() => this.showRoomMessage(message, index)}
            >
            {message.content}
            </div>
          )
        }
      </div>
      );
    }
}

export default MessageList;
