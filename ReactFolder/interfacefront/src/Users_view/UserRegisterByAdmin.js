import { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";

const UserRegisterByAdmin = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");


  const user_register = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }
    try {
      const { data } = await axios.post(
        "/api/users/register",
        {
          username,
          email,
          phone,
          gender,
          password,
          address,
          birthday,
        },
        config
      );
      alert("New User Registered Successfully...!");
      history.push("/user/UserMain")

    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setPassword("");
        setConfirmPassword("");
        setError("");
      }, 3000);
      return setError("This Email Already Registered...! Try Another");
    }
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
          style={{ float: "right" }}
        >
          <div className="form_main_class" style={{ marginTop: "-20px" }}>
            <div className="wrapper">
              <div className="title-text">
                <div className="title login">
                  Add New User
                  <div>
                    {error && <span className="error-message">{error}</span>}
                  </div>
                </div>
              </div>
              <div className="form-container">
                <div className="form-inner">
                  <form onSubmit={user_register} className="login">
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
                      <input
                        type="number"
                        placeholder="Phone"
                        name="email"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                    <div className="field">
                      <input
                        type="text"
                        placeholder="Enter Gender"
                        name="email"
                        id="phone"
                        required
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                    </div>
                    <div className="field">
                      <textarea
                        type="text"
                        placeholder="Address"
                        name="email"
                        id="phone"
                        required
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                    <div className="field">
                      <input
                        type="Date"
                        placeholder="Birthday"
                        name="email"
                        id="phone"
                        required
                        value={birthday}
                        onChange={(e) => {
                          setBirthDay(e.target.value);
                        }}
                      />
                    </div>

                    <div className="field">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className="field">
                      <input
                        type="password"
                        placeholder="Confirm password"
                        name="ConfirmPassword"
                        id="ConfirmPassword"
                        required
                        value={confirmpassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      />
                    </div>

                    <div className="field btn">
                      <div className="btn-layer"></div>
                      <input type="submit" value="Add New User" />
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

export default UserRegisterByAdmin;
