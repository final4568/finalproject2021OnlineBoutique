import { useState, useEffect } from "react";
import "../index.css";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";


const UserUpdate = ({ history, match }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    const fetchTailor = async () => {
      const user = await fetch(
        `/api/users/Userprofile/${match.params.id}`
      ).then((res) => res.json());

      setUsername(user.username);
      setEmail(user.email);
      setPhone(user.phone);
      setGender(user.gender);
      setAddress(user.address);
      setBirthday(user.birthday);
      

    };
    fetchTailor();
  }, []);

  const updateData = async (evt) => {
    evt.preventDefault();
    const body = {
          username,
          email,
          phone,
          gender,
          address,
          birthday
    };
    await fetch(`/api/users/userupdate/${match.params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    alert("Update successFully");
    history.push("/User/UserMain")
  };

  return (
    <>
      <AdminHeader />
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <AdminSideBar />
        </div>
      
      <div
        className="col-10"
        id="right_dasBoard_col"
        style={{ float: "right" }}>

        <div className="form_main_class"  style={{marginTop:"-20px"}}>
        <div className="wrapper">
        <div className="title-text">
            <div className="title login">
            User Update                
            </div>
        </div>
        <div className="form-container">            
            <div className="form-inner">
            <form onSubmit={updateData} className="login">
                <div className="field">
                <input type="text" placeholder="Name" name ="username" id="username" required
                    value = {username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                />
                </div>
                <div className="field">
                <input type="email" placeholder="Email Address" name ="email" id="email" required
                    value = {email}
                    onChange = {(e)=>{setEmail(e.target.value)}}
                />
                </div>
                <div className="field">
                <input type="number" placeholder="Phone" name ="phone" id="phone" required
                    value = {phone}
                    onChange = {(e)=>{setPhone(e.target.value)}}
                />
                </div><div className="field">
                <input type="text" placeholder="Enter Gender" name ="gender" id="gender" required
                    value = {gender}
                    onChange = {(e)=>{setGender(e.target.value)}}
                />
                </div><div className="field">
                <textarea type="text" placeholder="Address" name ="address" id="address" required
                    value = {address}
                    onChange = {(e)=>{setAddress(e.target.value)}}
                />
                </div><div className="field">
                <input type="date" placeholder="Date" name ="Date" id="Date" required
                    value = {birthday}
                    onChange = {(e)=>{setBirthday(e.target.value)}}
                />
                </div> 
               
               <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Update User"/>
                </div>
               
            </form>
            </div>
        </div>
        </div>
        </div>

                

        </div>
      </div>
  
    
    </>
  );
};

export default UserUpdate;