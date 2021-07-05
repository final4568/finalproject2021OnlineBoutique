import { useState, useEffect } from "react";
import "../index.css";
import TailorHeader from "../layouts/TailorHeader";
import TailorSidebar from "../layouts/TailorSidebar";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";


const LoggedInTailorUpdate = ({ match , history}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [usertype, setUserType] = useState("");
    const [bio, setBio] = useState("");

    useEffect(() => {
        const fetchTailor = async () => {
          const tailor = await fetch(
            `/api/tailor/tailorprofile/${match.params.id}`
          ).then((res) => res.json());
    
          setUsername(tailor.username);
          setEmail(tailor.email);
          setPhone(tailor.phone);
          setGender(tailor.gender);
          setAddress(tailor.address);
          setUserType(tailor.usertype);
          setBio(tailor.bio);
    
        };
        fetchTailor();
      }, []);

      const updateTailorData = async (evt) => {
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
        alert("Update Succeffully");
        history.push("/LoggedTailor/Profile")
      };

    return ( 
    <>
    <TailorHeader />
      <div className="containter">
        <div className="col-2" id="left_dasBoard_col" style={{ float: "left" }}>
          <TailorSidebar />
        </div>
      <div
        className="col-10"
        id="right_dasBoard_col"
        style={{ float: "right" }}>
        <div className="form_main_class" style={{ marginTop: "-20px" }}>
          <div className="wrapper">
            <div className="title-text">
              <div className="title login">Tailor Update</div>
            </div>
            <div className="form-container">
              <div className="form-inner">
                <form className="login" onSubmit={updateTailorData}>
                  
            <label className="formlable" for="username"> <strong>Username :</strong> </label>      
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Name"
                      name="username"
                      id="username"
                      required
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
            
            <label className="formlable" for="email"> <strong>Email Address :</strong> </label>      
  
                  <div className="field">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

            <label className="formlable" for="phone"> <strong>Phone Number :</strong> </label>      
                  <div className="field">
                <input type="number" placeholder="Phone" name ="email" id="phone" required
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
                          <option value="select">select Gender</option>
                          <option value="Male">Male</option>
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

                <label className="formlable" for="usertype"> <strong>Address  :</strong> </label>      
                <div className="">
                <textarea type="text" placeholder="Address" name ="email" id="phone" required
                    value = {address}
                    onChange = {(e)=>{setAddress(e.target.value)}}
                    style={{width:"100%",
                  height:"100px", marginTop:"15px"}}
                />
                </div>

                <label className="formlable" for="Address"> <strong>Bio  :</strong> </label>      
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
                    <input type="submit" value="Update Tailor Now" />
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
          <Link to="/LoggedTailor/Profile">
          <Button color="success">Go Back</Button>
          </Link>
        </div>
      </div>
      </div>
    </>
     );
}
 
export default LoggedInTailorUpdate;