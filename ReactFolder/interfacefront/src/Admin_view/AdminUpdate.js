import { useState, useEffect } from "react";
import "../index.css";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";


const AdminUpdate = ({ match , history}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [usertype, setUserType] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const fetchTailor = async () => {
      const admin = await fetch(
        `/api/admin/getadmin/${match.params.id}`
      ).then((res) => res.json());

      setUsername(admin.username);
      setEmail(admin.email);
      setPhone(admin.phone);
      setGender(admin.gender);
      setAddress(admin.address);
      setUserType(admin.usertype);
      setBio(admin.bio);

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
      usertype,
      bio  
    };
    await fetch(`/api/admin/adminupdate/${match.params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    alert("Update Succeffully");
    history.push("/admin/profile")
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

        <div className="form_main_class" style={{ marginTop: "-20px" }}>
          <div className="wrapper">
            <div className="title-text">
              <div className="title login">Admin Update</div>
            </div>
            <div className="form-container">
              <div className="form-inner">
                <form className="login" onSubmit={updateData}>
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
                    <input type="submit" value="Update Admin" />
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

export default AdminUpdate;

 
// export default AdminUpdate;