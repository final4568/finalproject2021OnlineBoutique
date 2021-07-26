import MessengerHeader from "../layouts/MessengerHeader";
import Conversation from "./Conversation";
import MessageBox from "./MessageBox";
import "../index.css"
import axios from "axios";
import React, { useEffect, useState } from "react";


const Messenger = ({history}) => {
const [tailor, setTailor] = useState({});
const [tailorid, settailorid] = useState({});
const [conversations, setConversation] = useState([]);



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
// get loggedin Tailor
        setTailor(data);
        settailorid(data._id);

      } catch (error) {
        console.log("You are not authorized, please login first");
      }
    };

    const getconversation = async()=>{
        try{
            const res = await axios.get("/api/conversation/" +tailorid);
            console.log(res)
            setConversation(res.data)
        }catch(err){
            console.log(err)
        }
    };




    fetchPrivateDate();
    getconversation();
  }, [tailorid]);




    
    return ( 
        <>
        <MessengerHeader/>
   
        <div className="container_fluide">
            <div className="row" id ="messanger">
                <div className="col-lg-3" >

                    {conversations.map((c)=>{
                    <Conversation conversation={c}/>
                    })}
                    
                    <Conversation/>
                </div>
                <div className="col-lg-7" id="messagecolumn" >
                    <div className="chatBoxTop">
                        <MessageBox/>
                        <MessageBox own={true}/>
                        <MessageBox/>
                        <MessageBox own={true}/>
                        <MessageBox/>
                        <MessageBox/>
                        <MessageBox own={true}/>
                    </div>
                    <br/>
                 
                    <div className="" style={{marginTop:"10px"}}>
                        <textarea className="chatMessageInput" placeholder="Write Something..."/>
                        <button className="chatSubmitbutton" style={{marginTop:"-70px",    background:" #1877f2",
                        padding:"10px 50px 10px 60px", color:"#fff", borderRadius:"10px"
                    }}>Send</button>
                    </div>
                </div>
                
            </div>
        </div>
        

        </>
     );
}
 
export default Messenger;