

import { useState } from "react";
import axios from "axios";
import '../index.css';

import Menu from '../layouts/Menu';

const UserRegister = ({history}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthDay] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState("");



    const user_register = async (e)=>{
        e.preventDefault();
        const config = {
            headers:{
                "Content-Type": "application/json",
            },
        };
        if(password !== confirmpassword){
        setPassword("");
        setConfirmPassword("");
        
        setTimeout(() => {
          setError("");
        }, 5000);
        return setError("Passwords do not match");
        }
        
        try{
            const { data } = await axios.post(
                "/api/users/register",
                  {
                    username,
                    email,
                    phone,
                    gender,
                    password,
                    address,
                    birthday
                  },
                  config
                );
              
                localStorage.setItem("authToken", data.token); 
                setSuccess(data.data); 
                history.push("/user/dashboard");

        }catch(error){
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
            <form onSubmit={user_register} className="login">
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
                </div>
                <div className="field">
                <select
                         value = {gender}
                         onChange = {(e)=>{setGender(e.target.value)}}
                         style={{width:"100%",
                        height:"40px"}}
                        >
                          <option value="select">select Gender</option>
                          <option value="male">Male</option>
                          <option value="Female">FeMale</option>
                        </select>
                </div>
                
                
                <div className="field">
                <input  type="Date" placeholder="Birthday" name ="email" id="phone" required
                    value = {birthday}
                    onChange = {(e)=>{setBirthDay(e.target.value)}}
                />
                </div>
                
                <div className="">
                <textarea type="text" placeholder="Address" name ="email" id="phone" required
                    value = {address}
                    onChange = {(e)=>{setAddress(e.target.value)}}
                    style={{height:"100px",
                        marginTop:"10px"}}
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
                <input type="submit" value="Add New Tailor"/>
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