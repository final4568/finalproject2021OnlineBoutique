import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

// import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InforBar/InfoBar";
import Input from "../Inputs/Input";
import './Chat.css';

const server = "http://localhost:4000";
var socket;

const Ccomponents = ({ history }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
//   const [users, setUsers] = useState("");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const [tailorprofile, setProfile] = useState({});
  useEffect(() => {

    const token = localStorage.getItem("authToken");
    if (!token) history.push("tailor/login");

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axios.get(
          "/api/tailor/LoggedTailorProfile",
          config
        );
        setName(data.username);
        setRoom(data.gender);
        console.log(data.username)

       

      } catch (error) {
        console.log("You are not authorized, please login first");
      }
    };

    fetchPrivateDate();
    socket = io(server, { transports: ["websocket"] });
    console.log(socket);

    // socket.emit("join", { name, room }, (error) => {
    //     console.log(name);
    //     console.log(room);
    //   if (error) {
    //     alert(error);
    //     console.log(error)
    //   }
    // });
    
  }, [history]);




//   useEffect(() => {
//     socket.on('message', message => {
//       setMessages(messages => [ ...messages, message ]);
//     });
    
//     socket.on("roomData", ({ users }) => {
//       setUsers(users);
//     });
// }, [messages]);

// const sendMessage = (event) => {
//     event.preventDefault();

//     if(message) {
//       socket.emit('sendMessage', message, () => setMessage(''));
//     }
//   }

  return (
      <>
      <h1>{name}</h1>
      <h1>{room}</h1>
    {/* <div className="outerContainer">
      <div className="container_chat">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div> */}
    </>
  );
};

export default Ccomponents;
