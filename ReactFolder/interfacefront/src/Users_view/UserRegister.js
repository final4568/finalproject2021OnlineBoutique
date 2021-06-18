

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../index.css';

import Menu from '../layouts/Menu';





const UserRegister = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    
    return ( 
        <>
        <Menu/>
        <div className="form_main_class">
        <div className="wrapper">
        <div className="title-text">
            <div className="title login">
                Users SignUp
                <div>
                {error && <span className="error-message">{error}</span>}
                {success && <span className="success-message">{success}</span>}   
                </div>
            </div>
        </div>
        <div className="form-container">            
            <div className="form-inner">
            <form className="login">
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
                <input type="password" name="password" id="password" placeholder="Password" required
                    value = {password}
                    onChange = {(e)=>{setPassword(e.target.value)}}
                />
                </div>
                <div className="field">
                <input type="password" placeholder="Confirm password" name="ConfirmPassword" id="ConfirmPassword" required
                    value = {confirmpassword}
                    onChange = {(e)=>{setConfirmPassword(e.target.value)}}
                />
                </div>
                <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Sign Up"/>
                </div>
                {/* <button type="submit"> sign up</button> */}
                <div className="pass-link">
                Already Have Account ? <Link to="/user/login">Login Now</Link>
                </div>
            </form>
            </div>
        </div>
        </div>
        </div>
   
        </>
     );
}
 
export default UserRegister;