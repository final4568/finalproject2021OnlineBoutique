
import { useState, useEffect } from "react";
import "../index.css";
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import axios from 'axios'

const Updateproduct = ({history, match}) => {
    const[product_name, setPName] =useState("");
    const[product_des, setDesc] =useState("");
    const[product_category, setCate] =useState("");
    const[product_uploadby, setULby] =useState("");    
    const[file, setFile] =useState(null);
    
    const onInputchaged = (e)=>{
        setFile(e.target.files[0])
    };
    useEffect(() => {
        const fetchproduct = async () => {
          const product = await fetch(
            `/api/product/productdetail/${match.params.id}`
          ).then((res) => res.json());
    
          setPName(product.product_name);
          setDesc(product.product_description);
          setCate(product.product_category);
          setULby(product.product_uploadby);
          setFile(product.product_photo);
    
        };
        fetchproduct();
      }, [history, match]);

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

        axios.put(`/api/product/update/${match.params.id}`, fromData, config).then((response) =>{
            alert('updated successfully...!');
            setPName("");
            setDesc("");
            setCate("");
            setULby("");
            setFile("");
            history.push("/product/allProducttable");

        }).catch((err)=>{
            console.log(err);
        })

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
        
        <div className="form_main_class">
        <div className="wrapper">
        <div className="title-text">
            <div className="title login">
              Product Edit
                <div>
                </div>
            </div>        
        </div>
        <div className="form-container">            
            <div className="form-inner">
            <form  className="login" onSubmit={onsubmitInput}>                
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
                <input type="submit" value="Updated Products Now"/>
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
 
export default Updateproduct;