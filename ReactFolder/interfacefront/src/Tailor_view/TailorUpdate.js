import { useState, useEffect } from "react";
import "../index.css";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const TailorUpdate = ({ history, match }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [usertype, setUserType] = useState("");
  const [bio, setBio] = useState("");


  useEffect(() => {
    const fetchTailor = async () => {

      const tailors = await fetch(
        `/api/tailor/tailorprofile/${match.params.id}`
      ).then((res) => res.json());

      setUsername(tailors.username);
      setEmail(tailors.email);
      setPhone(tailors.phone);
      setGender(tailors.gender);
      setAddress(tailors.address);
      setUserType(tailors.usertype);
      setBio(tailors.bio);

    };
    fetchTailor();
  }, [history, match]);

  const updateData = async (evt) => {
    evt.preventDefault();
    const body = {
          username,
          email,
          phone,
          gender,
          address,
          usertype,
          bio
    };
    
    await fetch(`/api/tailor/update/${match.params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    alert("Update successFully");
    history.push("/tailorMain")
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
            Update Tailor                
            </div>
        </div>
        <div className="form-container">            
            <div className="form-inner">
            <form onSubmit={updateData} className="login">

            <label className="formlable" for="username"> <strong>Username :</strong> </label>      
                <div className="field">
                <input type="text" placeholder="Name" name ="username" id="username" required
                    value = {username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                />
                </div>

            <label className="formlable" for="email"> <strong>Email Address :</strong> </label>      
                <div className="field">
                <input type="email" placeholder="Email Address" name ="email" id="email" required
                    value = {email}
                    onChange = {(e)=>{setEmail(e.target.value)}}
                />
                </div>

            <label className="formlable" for="phone"> <strong>Phone Number :</strong> </label>      
                <div className="field">
                <input type="number" placeholder="Phone" name ="Phone" id="phone" required
                    value = {phone}
                    onChange = {(e)=>{setPhone(e.target.value)}}
                />
                </div>

            <label className="formlable" for="Gender"> <strong>Gender :</strong> </label>      
                <div className="field">
                <select
                         value = {gender}
                         onChange = {(e)=>{setGender(e.target.value)}}
                         style={{width:"100%",
                        height:"40px"}}
                        >
                          <option value="male">Male</option>
                          <option value="Female">FeMale</option>
                        </select>
                
                </div>
                
               
            <label className="formlable" for="usertype"> <strong>User Type :</strong> </label>      
                <div className="field">
                <select
                    value = {usertype}
                    onChange = {(e)=>{setUserType(e.target.value)}}
                    style={{width:"100%",
                  height:"40px"}}
                  >
                    <option value="male">Administration</option>
                    <option value="Female">Tailor</option>
                    <option value="Female">User</option>
                  </select>

                
                </div>
                <label className="formlable" for="Address"> <strong>Address  :</strong> </label>      
                <div className="">
                <textarea type="text" placeholder="Address" name ="Address" id="Address" required
                    value = {address}
                    onChange = {(e)=>{setAddress(e.target.value)}}
                    style={{height:"100px",
                  marginTop:"10px"}}
                />
                </div>
                
                <label className="formlable" for="Address"> <strong>Address  :</strong> </label>      
                <div className="">
                <textarea  type="text" placeholder="Bio" name ="email" id="phone" required
                    value = {bio}
                    onChange = {(e)=>{setBio(e.target.value)}}
                    style={{height:"100px",
                  marginTop:"10px"}}
                />
                </div>

                

               <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Add New Tailor"/>
                </div>
               
            </form>
            </div>
        </div>
        
        </div>
        </div>

                
        <Link to="/tailorMain">
          <Button color="success">Go Back</Button>
          </Link>
        </div>
      </div>
  
    
    </>
  );
};

export default TailorUpdate;
