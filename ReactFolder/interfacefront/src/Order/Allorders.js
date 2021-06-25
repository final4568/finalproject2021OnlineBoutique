
import axios from "axios";
import "../index.css";
import { useState, useEffect } from "react";

const Allorders = ({history}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {    
        const loadproducts = async () => {
          const result = await axios.get("/api/oders/seeorder");
          setProducts(result.data);
        };
    
        loadproducts();
      }, [history]);

    return ( 
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
                      <img src={`/images/${product.productimage}`} alt="..."
                      width="100px" height="60px"/>
                  </td>
                  <td>{product.userName}</td>
                  <td>{product.productid}</td>                  
                </tr>
              ))}
            </tbody>
          </table>
     );
}
 
export default Allorders;