import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: [],
      username: "<USERNAME HERE>",
      content: "<CONTENT OF THE MESSAGE HERE>",
      sentAt: "<TIME MESSAGE WAS SENT HERE>",
      roomId: "<ROOM UID HERE>"
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
          <p key = {index}>{message.content}</p>
        );
      }
}

render(){
  return(
    <div>
    {
          this.state.messages.map((message, index) =>
            <div>
            onClick = {(message,index) => this.showRoomMessage(message, index)}
            </div>
          )
        }
      </div>
      );
    }
}

export default MessageList;
