
import AdminHeader from "../layouts/AdminHeader";
import AdminSideBar from "../layouts/AdminSlidebar";
import { Link } from "react-router-dom";


import { Button } from "reactstrap";
import axios from "axios";
import "../index.css";
import { useState, useEffect } from "react";

const AllProducttable_admin = ({history}) => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [ dataavaibale, setDataavaibale] = useState("No Products Uploaded");

  useEffect(() => {
    if (refresh) return setRefresh(false);

    const loadproducts = async () => {
      const result = await axios.get("/api/product/getallproducts");
      if(result == ""){
        setDataavaibale("No Products Uploaded");
      }else if(result == result){
        setProducts(result.data);
        setDataavaibale("All Product Here");
       
      }
    };

    loadproducts();
  }, [history, refresh]);

  const deleteproduct = (id) => {
    axios.delete(`/api/product/delete/${id}`);
    setRefresh(true);
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
          <h1>Products Records</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p style={{fontSize:"30px", color:"black", opacity:"0.3"}}>{dataavaibale}</p>

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
                      <img src={`/images/${product.product_photo}`} alt="..."
                      width="100px" height="60px"/>
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

                    
                    <Button
                      id="btn_table"
                      onClick={() => {
                        if (
                          window.confirm(
                            `Are you sure you wish to delete this Product?`
                          )
                        )
                        deleteproduct(product._id);
                      }}
                      color="danger" size="sm"
                    >
                      Delete
                    </Button>
                    

               
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
     );
}
 
export default AllProducttable_admin;