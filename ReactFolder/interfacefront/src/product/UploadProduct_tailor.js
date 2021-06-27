import React, { useState } from "react";
import axios from "axios";
import TailorHeader from '../layouts/TailorHeader';
import TailorSidebar from '../layouts/TailorSidebar';
import {  Link } from "react-router-dom";
import {Button} from "reactstrap";

const UploadProduct_tailor = ({history}) => {
    const[product_name, setPName] =useState("");
    const[product_des, setDesc] =useState("");
    const[product_category, setCate] =useState("");
    const[product_uploadby, setULby] =useState("");    
    const[file, setFile] =useState(null);
    
    const onInputchaged = (e)=>{
        setFile(e.target.files[0])
    };

    const onsubmitInput = (e)=>{
        e.preventDefault();

        const fromData = new FormData();
        fromData.append('product_name', product_name);
        fromData.append('product_description', product_des);
        fromData.append('product_category', product_category);
        fromData.append('product_uploadby', product_uploadby);
        fromData.append('product_photo', file);

        const config = {
            headers:{
                'content-type':'multipart/form-date'
            },
        };

        axios.post('/api/product/upload', fromData, config).then((response) =>{
            alert('upload successfully...!');
           
            setPName("");
            setDesc("");
            setCate("");
            setULby("");
            setFile("");
            history.push("/ProductTable_tailor");

        }).catch((err)=>{
            console.log(err);
        })

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
          style={{ float: "right" }}
        >
         
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
                
                <div className="field">
                <input type="text" placeholder="Product Name" required name ="productName" id="productName" 
                    value = {product_name}
                    onChange = {(e)=>{setPName(e.target.value)}}
                />
                </div>
                <div className="field">
                <textarea type="text" placeholder="Product Description" required name ="productDes" id="productDes" 
                    value = {product_des}
                    onChange = {(e)=>{setDesc(e.target.value)}}
                />
                </div>

                <div className="field">
                <input type="text" placeholder="ProductCategory" required name ="productcategory" id="Uploadby" 
                    value = {product_category}
                    onChange = {(e)=>{setCate(e.target.value)}}
                />
                </div>

                <div className="field">
                <input type="text" placeholder="Product Upload By" required name ="Uploadby" id="Uploadby" 
                    value = {product_uploadby}
                    onChange = {(e)=>{setULby(e.target.value)}}
                />
                </div>
                
                
                <input type="file" placeholder="Upload photo" required name ="product_photo" id="photo"
                onChange = {onInputchaged}                
                />
                </div>
                
            
                <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Upload Products Now"/>
                </div>               
            </form>
            </div>
        </div>
        </div>
        </div>

        <Link to="/ProductTable_tailor">
          <Button color="success">Go Back</Button>
          </Link>
        </div>
      </div>
      </> 
        
      

     );
}
 
export default UploadProduct_tailor;
 
