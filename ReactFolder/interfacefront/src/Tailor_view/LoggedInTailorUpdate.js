import { useState, useEffect } from "react";
import "../index.css";
import TailorHeader from "../layouts/TailorHeader";
import TailorSidebar from "../layouts/TailorSidebar";


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
        history.push("/LoggedTailorProfile")
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
                  <div className="field">
                <input type="number" placeholder="Phone" name ="email" id="phone" required
                    value = {phone}
                    onChange = {(e)=>{setPhone(e.target.value)}}
                />
                </div><div className="field">
                <input type="text" placeholder="Enter Gender" name ="email" id="phone" required
                    value = {gender}
                    onChange = {(e)=>{setGender(e.target.value)}}
                />
                </div><div className="field">
                <textarea type="text" placeholder="Address" name ="email" id="phone" required
                    value = {address}
                    onChange = {(e)=>{setAddress(e.target.value)}}
                />
                </div><div className="field">
                <input type="text" placeholder="User Type" name ="email" id="phone" required
                    value = {usertype}
                    onChange = {(e)=>{setUserType(e.target.value)}}
                />
                </div> 
                <div className="field">
                <textarea  type="text" placeholder="Bio" name ="email" id="phone" required
                    value = {bio}
                    onChange = {(e)=>{setBio(e.target.value)}}
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
        </div>
      </div>
      </div>
    </>
     );
}
 
export default LoggedInTailorUpdate;