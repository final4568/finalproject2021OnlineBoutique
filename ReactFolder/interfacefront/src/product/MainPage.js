import React, { useState } from "react";
import axios from "axios";

const MainPage = () => {
    
    const[file, setFile] =useState(null);
    
    const onInputchaged = (e)=>{
        setFile(e.target.files[0])
    };

    const onsubmitInput = (e)=>{
        e.preventDefault();

        const fromData = new FormData();

        fromData.append('product_photo', file);

        const config = {
            headers:{
                'content-type':'multipart/form-date'
            },
        };

        axios.post('/api/product/upload', fromData, config).then((response) =>{
            alert('upload successfully...!');

        }).catch((err)=>{
            console.log(err);
        })

    };
    
    return ( 
        <>
        <div className="form_main_class">
        <div className="wrapper">
        <div className="title-text">
            <div className="title login">
              Product Upload
                <div>
                </div>
            </div>        
        </div>
        <div className="form-container">            
            <div className="form-inner">
            <form onSubmit={onsubmitInput} className="login">                
                <div className="xyz" style={{marginTop:"40px"}}>
                <input type="file" placeholder="Upload photo" required name ="photo" id="photo"
                
                onChange = {onInputchaged}                
                />
                </div>
            
                <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Upload Image Now"/>
                </div>
               
            </form>
            </div>
        </div>
        </div>
        </div>
        </>

     );
}
 
export default MainPage;