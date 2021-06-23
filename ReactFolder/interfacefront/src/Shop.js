

import Top from './layouts/Top';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';
import './css/Shoppage.css';
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";


const Shop = ({history}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const loadproducts = async () => {
          const result = await axios.get("/api/product/getallproducts");
          setProducts(result.data);
    
        };
        loadproducts();
      }, [history]);
    return (
        <>
                <Top/>
                <Menu/>
                <div className="container-fluide" style={{
                        height:"200px",
                        background:"pink",
                        textAlign:'center',
                        fontSize:"50px",
                        fontWeight:"bolder",
                        paddingTop:"40px"}}>
                            SHOP PAGE
                    </div>
                    <div>
                    </div> 
                    <div style={{marginTop:"40px"}}></div>
            
                    <table class="table border shadow" style={{ marginTop: "40px" }}>
            <thead>
              <tr class="table-dark">
                <th scope="col"> Image</th>
                <th scope="col">Products Name</th>
                <th scope="col">Category</th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                      <img src={product.product_photo} alt="..."
                      with="100%"/>
                  </td>
                  <td>{product.product_name}</td>
                  <td>{product.product_category}</td>

                  <td>
                    <Link to={`/product/detail/${product._id}`}>
                      <Button id="btn_table" color="primary" size="sm">
                        View
                      </Button>
                    </Link>
                    <Link to={`/product/Update/${product._id}`}>
                      <Button id="btn_table" color="warning" size="sm" >
                        Edit
                      </Button>
                    </Link>

                    
                    
                    

               
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
                {products.map((product)=>{
                  <div className="xyz" key={product._id}>
                    <h1>name:{product.product_name}</h1>
                    <div>{product.product_name}</div>
                    <div>{product.product_name}</div>
                    <div>{product.product_name}</div>

                  </div>
                })}
                

                 


                <Footer/>
        </>
    );
}
 
export default Shop;
