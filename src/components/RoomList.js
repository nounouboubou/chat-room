
import React, { Component } from 'react';

class room-list extends React.Component {
  constructor(props){
           super(props);
           this.state = {
             rooms: []
           }
           this.roomsRef = this.props.firebase.database().ref('rooms');
         }

        componentDidMount() {
              this.roomsRef.on('child_added', snapshot => {
              const room = snapshot.val();
              room.key = snapshot.key;
              this.setState({ rooms: this.state.rooms.concat( room ) })
              });
            }

        render() {
          return (
            this.state.rooms.map( (room, index) =>
                      <div key={index} >{this.state.rooms.room}</div>
               )
          );
        }
      }
      
      ReactDOM.render(
              <room-list/>,document.getElementById('app')
            );

export default RoomList;
