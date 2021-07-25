import MessengerHeader from "../layouts/MessengerHeader";
import Conversation from "./Conversation";
import MessageBox from "./MessageBox";
import "../index.css"
const Messenger = () => {
    return ( 
        <>
        <MessengerHeader/>
        <div className="container_fluide">
            <div className="row" id ="messanger">
                <div className="col-lg-3" >
                    <Conversation/>
                    <Conversation/>
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
                        <MessageBox/>
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