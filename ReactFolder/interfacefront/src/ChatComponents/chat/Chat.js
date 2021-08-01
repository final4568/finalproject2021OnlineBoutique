import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InforBar/InfoBar'
import Input from '../Inputs/Input';
import axios from "axios";

import './Chat.css';
const server = "http://localhost:4000";
let socket;

const Chat = ({ name, room }) => {
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userprofile, setProfile] = useState([]);
  const [open, setOpen] = useState(false);



  useEffect(() => {

    // const { name, room } = queryString.parse(location.search);


    socket = io(server, {transports:['websocket']}); 
    socket.emit('join', { name, room }, (error) => {
     
      if(error) {
        alert(error);
      }
    });
  }, []);


  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
 


<div className="outerContainer">

  <button style={{
      margin:"20px",
      background:"red"
    }} 

    onClick={()=>{
      setOpen(!open)}}>
      
      Open chat box</button>

    {open && 
    
      <div className="container_chat">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    
  
    
    }

  
  


</div>
 
  );
}

export default Chat;